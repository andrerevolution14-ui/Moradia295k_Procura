'use client';
import { useState, useId } from 'react';
import { insertLead } from '@/lib/supabase';
import { trackCapiLead } from '@/app/actions/capi';

interface FormData {
    nome: string;
    telefone: string;
    prazo: string;
    valor: string;
}

interface FormErrors {
    nome?: string;
    telefone?: string;
    prazo?: string;
    valor?: string;
}

function validate(data: FormData): FormErrors {
    const errors: FormErrors = {};
    if (!data.nome.trim()) {
        errors.nome = 'Por favor, introduza o seu nome.';
    } else if (data.nome.trim().length < 2) {
        errors.nome = 'O nome é demasiado curto.';
    }

    if (!data.telefone.trim() || data.telefone.trim() === '+351') {
        errors.telefone = 'Por favor, introduza o seu telefone.';
    } else {
        const cleaned = data.telefone.replace(/[\s\-().+]/g, '');
        if (!/^\d{9,15}$/.test(cleaned)) {
            errors.telefone = 'Número de telefone inválido.';
        }
    }

    if (!data.prazo) errors.prazo = 'Selecione uma opção.';
    if (!data.valor) errors.valor = 'Selecione uma opção.';
    return errors;
}
declare global {
  interface Window {
    fbq: (command: string, action: string, params?: Record<string, unknown>, options?: Record<string, unknown>) => void;
  }
}

export default function QualForm() {
    const formId = useId();
    const [data, setData] = useState<FormData>({
        nome: '',
        telefone: '+351 ',
        prazo: '',
        valor: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const set = (field: keyof FormData) => (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => setData((prev) => ({ ...prev, [field]: e.target.value }));


    const selectRadio = (field: keyof FormData, value: string) =>
        setData((prev) => ({ ...prev, [field]: value }));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (loading) return;

        setSubmitError(null);
        const errs = validate(data);
        setErrors(errs);
        
        if (Object.keys(errs).length > 0) {
            console.log('Validation failed:', errs);
            const firstError = Object.keys(errs)[0];
            const element = document.getElementById(`${formId}-${firstError}`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }

        setLoading(true);
        try {
            // Generate unique event ID for deduplication
            const eventId = 'lead_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
            const leadValue = 390000;

            console.log(`[Tracking] Generating eventID: ${eventId}`);

            // 1. Insert into Supabase
            await insertLead(data);
            console.log('[Tracking] Supabase insertion successful');

            // 2. Track Lead on Client (Pixel)
            if (typeof window !== 'undefined' && window.fbq) {
                console.log('[Tracking] Firing Meta Pixel Lead event...');
                window.fbq('track', 'Lead', {
                    value: leadValue,
                    currency: 'EUR',
                }, { eventID: eventId });
            } else {
                console.warn('[Tracking] Meta Pixel (fbq) not found on window');
            }

            // 3. Track Lead on Server (CAPI)
            console.log('[Tracking] Firing Meta CAPI Lead event...');
            await trackCapiLead({
                nome: data.nome,
                telefone: data.telefone,
                eventId: eventId,
                value: leadValue
            });

            console.log('[Tracking] All tracking events triggered successfully');
            setSubmitted(true);
        } catch (err: unknown) {
            console.error('Submission error:', err);
            setSubmitError('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
        } finally {
            setLoading(false);
        }
    };


    const RadioCards = ({
        field,
        options,
    }: {
        field: keyof FormData;
        options: { value: string; label: string }[];
    }) => (
        <div className="radio-cards">
            {options.map((opt) => (
                <label
                    key={opt.value}
                    className={`radio-card${data[field] === opt.value ? ' is-selected' : ''}`}
                >
                    <input
                        type="radio"
                        id={`${formId}-${field}`}
                        name={`${formId}-${field}`}
                        value={opt.value}
                        checked={data[field] === opt.value}
                        onChange={() => selectRadio(field, opt.value)}
                    />
                    <span className="radio-dot" />
                    {opt.label}
                </label>
            ))}
        </div>
    );

    if (submitted) {
        return (
            <div className="qual-form" style={{ minHeight: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="form-success visible" style={{ textAlign: 'center', padding: '40px 20px' }}>
                    <div className="success-check" style={{ 
                        width: '80px', 
                        height: '80px', 
                        background: 'linear-gradient(135deg, #c8a96b, #a68b54)', 
                        borderRadius: '50%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        margin: '0 auto 24px',
                        boxShadow: '0 10px 25px rgba(200, 169, 107, 0.4)',
                    }}>
                        <svg viewBox="0 0 20 20" style={{ width: '40px', height: '40px', color: '#fff' }}>
                            <path fill="currentColor" d="M16.7 5.3a1 1 0 00-1.4 0L8 12.6 4.7 9.3a1 1 0 00-1.4 1.4l4 4a1 1 0 001.4 0l8-8a1 1 0 000-1.4z" />
                        </svg>
                    </div>
                    <h3 style={{ fontSize: '1.85rem', marginBottom: '16px', color: '#fff', fontWeight: '700' }}>Acesso Confirmado!</h3>
                    <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.8)', maxWidth: '400px', margin: '0 auto', lineHeight: '1.6' }}>
                        O seu pedido foi processado com sucesso. <br />
                        <strong>Enviaremos agora para o seu WhatsApp</strong> a apresentação completa e o dossier técnico do projeto.
                    </p>
                    <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center', color: '#c8a96b', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.85rem' }}>
                        <span style={{ width: '40px', height: '1px', background: 'currentColor', opacity: 0.3 }}></span>
                        Até já
                        <span style={{ width: '40px', height: '1px', background: 'currentColor', opacity: 0.3 }}></span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <form className="qual-form" onSubmit={handleSubmit} noValidate>
            <div className="form-two-col">
                <div className="field">
                    <label htmlFor={`${formId}-nome`}>
                        Nome completo <span style={{ color: 'var(--clr-gold)' }}>*</span>
                    </label>
                    <input
                        id={`${formId}-nome`}
                        type="text"
                        placeholder="O seu nome completo"
                        value={data.nome}
                        onChange={set('nome')}
                        className={errors.nome ? 'is-error' : ''}
                        autoComplete="name"
                    />
                    {errors.nome && <span className="field-error">{errors.nome}</span>}
                </div>

                <div className="field">
                    <label htmlFor={`${formId}-telefone`}>
                        Telefone (WhatsApp) <span style={{ color: 'var(--clr-gold)' }}>*</span>
                    </label>
                    <input
                        id={`${formId}-telefone`}
                        type="tel"
                        placeholder="+351 9XX XXX XXX"
                        value={data.telefone}
                        onChange={set('telefone')}
                        className={errors.telefone ? 'is-error' : ''}
                        autoComplete="tel"
                    />
                    {errors.telefone && <span className="field-error">{errors.telefone}</span>}
                </div>
            </div>

            <div className="field">
                <label htmlFor={`${formId}-prazo`}>
                    Prazo de compra previsto: <span style={{ color: 'var(--clr-gold)' }}>*</span>
                </label>
                <div className="select-wrap">
                    <select
                        id={`${formId}-prazo`}
                        value={data.prazo}
                        onChange={set('prazo')}
                        className={errors.prazo ? 'is-error' : ''}
                    >
                        <option value="">Selecione...</option>
                        <option value="ate6">Até 6 meses</option>
                        <option value="6a12">6 a 12 meses</option>
                        <option value="mais12">Mais de 12 meses</option>
                    </select>
                </div>
                {errors.prazo && <span className="field-error">{errors.prazo}</span>}
            </div>

            <div className="field">
                <label>Capital próprio disponível para entrada: <span style={{ color: 'var(--clr-gold)' }}>*</span></label>
                <RadioCards
                    field="valor"
                    options={[
                        { value: 'menos_60k', label: 'Menos de 60.000€' },
                        { value: '60k_ou_mais', label: '60.000€ ou mais' },
                    ]}
                />
                {errors.valor && <span className="field-error">{errors.valor}</span>}
            </div>

            <div className="privacy-row">
                <svg viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6v1H3a1 1 0 00-1 1v7a1 1 0 001 1h14a1 1 0 001-1v-7a1 1 0 00-1-1h-1V8a6 6 0 00-6-6zm-4 7V8a4 4 0 118 0v1H6z" /></svg>
                <p>Os seus dados são utilizados exclusivamente para contacto sobre este projeto e não serão partilhados com terceiros.</p>
            </div>

            {submitError && (
                <div style={{ color: 'var(--clr-error)', fontSize: '0.85rem', marginBottom: '16px', textAlign: 'center' }}>
                    {submitError}
                </div>
            )}

            <button
                type="submit"
                className="btn btn--gold btn--lg btn--full"
                disabled={loading}
            >
                {loading ? (
                    <>
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            style={{ animation: 'spin 0.8s linear infinite' }}
                        >
                            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                        </svg>
                        A enviar...
                    </>
                ) : (
                    <>
                        Receber Projeto e PDF Completo
                        <svg className="btn-arrow" viewBox="0 0 20 20">
                            <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                        </svg>
                    </>
                )}
            </button>
        </form>
    );
}
