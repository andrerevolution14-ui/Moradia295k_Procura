'use client';
import { useState, useId } from 'react';
import { insertLead } from '@/lib/supabase';
import { trackCapiLead } from '@/app/actions/capi';
import { CTA_PRIMARY } from '@/lib/cta';
import TrustBadges from '@/components/TrustBadges';

interface FormData {
    nome: string;
    telefone: string;
}

interface FormErrors {
    nome?: string;
    telefone?: string;
}

function validate(data: FormData): FormErrors {
    const errors: FormErrors = {};
    if (!data.nome.trim()) {
        errors.nome = 'Por favor, introduza o seu nome.';
    } else if (data.nome.trim().length < 2) {
        errors.nome = 'O nome é demasiado curto.';
    }

    const phoneCleaned = data.telefone.replace(/[\s\-().]/g, '');
    if (!phoneCleaned || phoneCleaned === '+351') {
        errors.telefone = 'Por favor, introduza o seu número de telemóvel.';
    } else if (!/^\+351\d{9}$/.test(phoneCleaned)) {
        errors.telefone = 'Introduza um número português válido: +351 seguido de 9 dígitos.';
    }

    return errors;
}

declare global {
  interface Window {
    fbq: (command: string, action: string, params?: Record<string, unknown>, options?: Record<string, unknown>) => void;
    gtag_report_conversion?: (url?: string) => boolean | void;
  }
}

export default function QualForm({ variant = 'full' }: { variant?: 'full' | 'compact' }) {
    const formId = useId();
    const isCompact = variant === 'compact';
    const [data, setData] = useState<FormData>({
        nome: '',
        telefone: '+351 ',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const set = (field: keyof FormData) => (
        e: React.ChangeEvent<HTMLInputElement>
    ) => setData((prev) => ({ ...prev, [field]: e.target.value }));

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = e.target.value;
        if (!val.startsWith('+351')) {
            val = '+351 ';
        }
        const prefix = '+351';
        const rest = val.slice(prefix.length).replace(/[^\d\s]/g, '');
        setData((prev) => ({ ...prev, telefone: prefix + rest }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (loading) return;

        setSubmitError(null);
        const errs = validate(data);
        setErrors(errs);

        if (Object.keys(errs).length > 0) {
            const firstError = Object.keys(errs)[0];
            const element = document.getElementById(`${formId}-${firstError}`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }

        setLoading(true);
        try {
            const eventId = 'lead_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
            const leadValue = 390000;

            await insertLead({ ...data, prazo: '', valor: '' });

            if (typeof window !== 'undefined' && window.fbq) {
                window.fbq('track', 'Lead', {
                    value: leadValue,
                    currency: 'EUR',
                }, { eventID: eventId });
            }

            if (typeof window !== 'undefined' && window.gtag_report_conversion) {
                window.gtag_report_conversion();
            }

            await trackCapiLead({
                nome: data.nome,
                telefone: data.telefone,
                eventId: eventId,
                value: leadValue
            });

            setSubmitted(true);
        } catch (err: unknown) {
            console.error('Submission error:', err);
            setSubmitError('Ocorreu um erro ao enviar. Por favor, tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className={`qual-form${isCompact ? ' qual-form--compact' : ''}`} style={{ minHeight: isCompact ? 'auto' : '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="form-success visible" style={{ textAlign: 'center', padding: isCompact ? '24px 12px' : '48px 24px', width: '100%' }}>
                    <div className="success-check" style={{
                        width: isCompact ? '64px' : '80px',
                        height: isCompact ? '64px' : '80px',
                        background: 'linear-gradient(135deg, #c8a96b, #a68b54)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 24px',
                        boxShadow: '0 10px 25px rgba(200, 169, 107, 0.4)',
                    }}>
                        <svg viewBox="0 0 20 20" style={{ width: '36px', height: '36px', color: '#fff' }}>
                            <path fill="currentColor" d="M16.7 5.3a1 1 0 00-1.4 0L8 12.6 4.7 9.3a1 1 0 00-1.4 1.4l4 4a1 1 0 001.4 0l8-8a1 1 0 000-1.4z" />
                        </svg>
                    </div>
                    <h3 style={{ fontSize: isCompact ? '1.35rem' : '2rem', marginBottom: '12px', color: '#fff', fontWeight: '700', letterSpacing: '-0.01em' }}>
                        Inscrição Recebida!
                    </h3>
                    <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.75)', maxWidth: '420px', margin: '0 auto 32px', lineHeight: '1.7' }}>
                        O promotor entrará em contacto consigo nas próximas 24 horas.
                    </p>
                    <a
                        href="tel:+351912050979"
                        className="btn btn--gold btn--lg"
                        id="thank-you-call-btn"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontSize: '1.05rem',
                            padding: '18px 36px',
                        }}
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '20px', height: '20px', flexShrink: 0 }} aria-hidden>
                            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.01-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                        LIGAR DIRETAMENTE AGORA
                    </a>
                    <p style={{ marginTop: '20px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>
                        Chamada para rede móvel nacional
                    </p>
                </div>
            </div>
        );
    }

    return (
        <form
            className={`qual-form${isCompact ? ' qual-form--compact' : ''}`}
            onSubmit={handleSubmit}
            noValidate
        >
            <div className={isCompact ? 'form-compact-row' : 'form-two-col'}>
                <div className="field">
                    <label htmlFor={`${formId}-nome`}>
                        O seu nome <span className="field-required">*</span>
                    </label>
                    <input
                        id={`${formId}-nome`}
                        type="text"
                        placeholder="Nome completo"
                        value={data.nome}
                        onChange={set('nome')}
                        className={errors.nome ? 'is-error' : ''}
                        autoComplete="name"
                    />
                    {errors.nome && <span className="field-error">{errors.nome}</span>}
                </div>

                <div className="field">
                    <label htmlFor={`${formId}-telefone`}>
                        O seu telemóvel <span className="field-required">*</span>
                    </label>
                    <input
                        id={`${formId}-telefone`}
                        type="tel"
                        inputMode="numeric"
                        placeholder="+351 9XX XXX XXX"
                        value={data.telefone}
                        onChange={handlePhoneChange}
                        onFocus={(e) => {
                            const len = e.target.value.length;
                            e.target.setSelectionRange(len, len);
                        }}
                        className={errors.telefone ? 'is-error' : ''}
                        autoComplete="tel"
                        maxLength={16}
                    />
                    {errors.telefone && <span className="field-error">{errors.telefone}</span>}
                </div>
            </div>



            <div className="privacy-row">
                <svg viewBox="0 0 20 20" aria-hidden><path d="M10 2a6 6 0 00-6 6v1H3a1 1 0 00-1 1v7a1 1 0 001 1h14a1 1 0 001-1v-7a1 1 0 00-1-1h-1V8a6 6 0 00-6-6zm-4 7V8a4 4 0 118 0v1H6z" /></svg>
                <p>Informação tratada de forma confidencial. Sem partilha com terceiros.</p>
            </div>

            {submitError && (
                <div className="form-submit-error">{submitError}</div>
            )}

            <button
                type="submit"
                className={`btn btn--gold btn--full${isCompact ? '' : ' btn--lg'}`}
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
                            aria-hidden
                        >
                            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                        </svg>
                        A enviar...
                    </>
                ) : (
                    <>
                        {CTA_PRIMARY}
                        <svg className="btn-arrow" viewBox="0 0 20 20" aria-hidden>
                            <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                        </svg>
                    </>
                )}
            </button>

            <TrustBadges className={isCompact ? 'trust-badges--compact' : 'trust-badges--form'} />
        </form>
    );
}
