'use client';
import { useState } from 'react';
import RevealWrapper from './RevealWrapper';
import { CTA_PRIMARY } from '@/lib/cta';

const TOTAL_PROJECT = 390000;
const TERRENO = 60000;
const CONSTRUCAO = 330000;
const TAXA_JURO = 0.035; // 3.5%
const IMPOSTO_AUTOCONSTRUCAO = 3480; // 5% IMT + 0.8% Selo sobre 60.000€
const POUPANCA_IMPOSTOS = 23700; // Valor de poupança aproximado indicado
const IMPOSTO_TRADICIONAL = IMPOSTO_AUTOCONSTRUCAO + POUPANCA_IMPOSTOS;

// Cálculo da média de juros durante a obra (10 meses)
// Considera-se utilização média de 30% do capital de construção para reduzir custo
const MEDIA_CAPITAL_PERCENTAGE = 0.30;
const CAPITAL_MEDIO_OBRA = CONSTRUCAO * MEDIA_CAPITAL_PERCENTAGE;
const PRESTACAO_OBRA_MEDIA = (CAPITAL_MEDIO_OBRA * TAXA_JURO) / 12;

export default function Calculadora() {
  const [entrada, setEntrada] = useState<number>(58500); // 15% default
  const [prazo, setPrazo] = useState<number>(40);

  // M = P [ i(1 + i)^n ] / [ (1 + i)^n - 1]
  const capitalEmDivida = TOTAL_PROJECT - entrada;
  const i = TAXA_JURO / 12;
  const n = prazo * 12;
  const prestacaoFinal = (capitalEmDivida * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);

  return (
    <div className="calculator-widget" style={{ 
      background: 'var(--navy-card)', 
      borderRadius: 'var(--radius-lg)', 
      border: '1px solid var(--border-dark)', 
      padding: '40px 32px', 
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h3 style={{ fontSize: '1.8rem', color: 'var(--white)', fontFamily: 'var(--font-heading)', marginBottom: '8px' }}>
          Simulador de GPI Premium
        </h3>
        <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>
          Simulação indicativa para compradores qualificados do Domaine du Vingt-Cinq (390.000€).
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '48px' }}>
        {/* INPUTS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Entrada Inicial
              </label>
              <span style={{ color: 'var(--gold)', fontWeight: 700, fontFamily: 'var(--font-heading)', fontSize: '1.2rem' }}>
                {formatCurrency(entrada)}
              </span>
            </div>
            <input 
              type="range" 
              min={39000} 
              max={195000} 
              step={1000} 
              value={entrada} 
              onChange={(e) => setEntrada(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--gold)' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              <span>10% ({formatCurrency(39000)})</span>
              <span>50% ({formatCurrency(195000)})</span>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
              Prazo do Financiamento
            </label>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[30, 35, 40].map(y => (
                <button
                  key={y}
                  onClick={() => setPrazo(y)}
                  style={{
                    flex: 1,
                    padding: '12px 0',
                    background: prazo === y ? 'var(--gold)' : 'transparent',
                    color: prazo === y ? 'var(--navy)' : 'var(--white)',
                    border: `1px solid ${prazo === y ? 'var(--gold)' : 'var(--border-dark)'}`,
                    borderRadius: 'var(--radius)',
                    fontWeight: prazo === y ? 700 : 500,
                    transition: 'var(--transition)',
                    fontSize: '0.9rem'
                  }}
                >
                  {y} Anos
                </button>
              ))}
            </div>
          </div>
          
          <div style={{ marginTop: 'auto', padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius)', border: '1px solid var(--border-dark)' }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              <strong>Parâmetros base da simulação:</strong><br />
              Valor Total: {formatCurrency(TOTAL_PROJECT)}<br />
              Taxa de Juro (TAN): {(TAXA_JURO * 100).toFixed(1)}%<br />
              Prazo de Obra: 10 Meses
            </p>
          </div>
        </div>

        {/* OUTPUTS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* BLOCO 1 */}
          <div style={{ background: 'rgba(200, 169, 107, 0.08)', border: '1px solid rgba(200, 169, 107, 0.2)', padding: '20px', borderRadius: 'var(--radius)' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
              Bloco 1: Impostos (A Grande Vantagem)
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--white)', marginBottom: '16px', lineHeight: 1.5 }}>
              Imposto a pagar (IMT+Selo sobre terreno): <strong>{formatCurrency(IMPOSTO_AUTOCONSTRUCAO)}</strong>
            </p>
            <div style={{ borderTop: '1px dashed rgba(200, 169, 107, 0.3)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>Poupança face ao<br/>método tradicional:</span>
              <span style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--gold)', fontFamily: 'var(--font-heading)' }}>
                +{formatCurrency(POUPANCA_IMPOSTOS)}
              </span>
            </div>
          </div>

          {/* BLOCO 2 */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-dark)', padding: '20px', borderRadius: 'var(--radius)' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
              Bloco 2: Fase de Construção (Custo Médio Reduzido)
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: '12px', lineHeight: 1.5 }}>
              Durante os 10 meses de obra, pagas apenas os juros do capital libertado progressivamente (carência de capital).
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--white)', fontWeight: 600 }}>Custo Médio Estimado:</span>
              <span style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--white)' }}>
                {formatCurrency(PRESTACAO_OBRA_MEDIA)}<span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 400 }}>/mês</span>
              </span>
            </div>
          </div>

          {/* BLOCO 3 */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-dark)', padding: '20px', borderRadius: 'var(--radius)' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
              Bloco 3: Pós-Construção
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: '12px', lineHeight: 1.5 }}>
              A partir da entrega da chave, inicias a amortização do crédito (capital + juros).
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--white)', fontWeight: 600 }}>Prestação Final:</span>
              <span style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--white)' }}>
                {formatCurrency(prestacaoFinal)}<span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 400 }}>/mês</span>
              </span>
            </div>
          </div>

        </div>
      </div>

      <div className="calc-cta-block">
        <p>Se os números fazem sentido para o seu perfil, o passo seguinte é consultar os materiais e acabamentos.</p>
        <a href="#formulario" className="btn btn--gold btn--lg">
          {CTA_PRIMARY}
        </a>
        <span className="calc-cta-note">Receba o mapa e descubra o nível de excelência desta moradia</span>
      </div>
    </div>
  );
}
