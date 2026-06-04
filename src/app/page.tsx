import { preload } from 'react-dom';
import dynamic from 'next/dynamic';
import RevealWrapper from '@/components/RevealWrapper';
import OptimizedImage from '@/components/OptimizedImage';
import QualForm from '@/components/QualForm';
import TrustBadges from '@/components/TrustBadges';
import VisitSteps from '@/components/VisitSteps';
import FormHighlight from '@/components/FormHighlight';
import SectionCta from '@/components/SectionCta';
import ProjectHighlights from '@/components/ProjectHighlights';
import ScarcityBar from '@/components/ScarcityBar';
import { IMAGES, CONTENT_IMAGE_SIZES } from '@/lib/images';
import { CTA_PRIMARY, CTA_SHORT } from '@/lib/cta';
import { PROJECT, UNITS_LABEL } from '@/lib/project';

const FloatingCTA = dynamic(() => import('@/components/FloatingCTA'));
const VisitFaq = dynamic(() => import('@/components/VisitFaq'));
const GalleryLightbox = dynamic(() => import('@/components/GalleryLightbox'), {
  loading: () => <div className="gallery-grid gallery-grid--skeleton" aria-hidden />,
});
const PlansLightbox = dynamic(() => import('@/components/PlansLightbox'), {
  loading: () => <div className="plans-stack plans-stack--skeleton" aria-hidden />,
});
const Calculadora = dynamic(() => import('@/components/Calculadora'));

/* ── Icons ── */
const ArrowIcon = () => (
  <svg className="btn-arrow" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
  </svg>
);

const CheckSvg = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden>
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
  </svg>
);

preload(IMAGES.hero, { as: 'image' });

/* ============================================================
   PAGE
   ============================================================ */
export default function HomePage() {
  return (
    <>
      {/* ── FLOATING MOBILE CTA ── */}
      <FloatingCTA />

      {/* ── NAV ── */}
      <nav className="nav" aria-label="Navegação principal">
        <div className="container nav-container">
          <a href="#hero" className="nav-logo" aria-label="Voltar ao topo">
            Domaine <span>XXV</span>
          </a>
          <a href="#formulario" className="nav-cta-mobile btn btn--gold btn--sm">
            {CTA_SHORT}
          </a>
          <div className="nav-actions">
            <a href="#formulario" className="nav-link btn btn--gold btn--sm">{CTA_PRIMARY}</a>
            <a href="#galeria" className="nav-link btn btn--outline btn--sm">Moradia</a>
            <a href="#simulador" className="nav-link btn btn--ghost btn--sm">Simular Financiamento</a>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════
          HERO
          ══════════════════════════════════════════════════ */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          <OptimizedImage
            src={IMAGES.hero}
            alt=""
            fill
            priority
            sizes="100vw"
            quality={82}
            className="hero-bg-image"
            aria-hidden
          />
          <div className="hero-bg-overlay" />
        </div>
        <div className="container">
          <div className="hero-inner">
            <RevealWrapper>
              <p className="hero-project-name">{PROJECT.name}</p>
              <div className="hero-eyebrow">
                {PROJECT.typology} · {PROJECT.areaSqm} m² · {PROJECT.unitsAvailable} disp. · 1 reservada · {PROJECT.deliveryLabel}
              </div>

              <h1 className="hero-title hero-title--compact" style={{ lineHeight: '1.15', textAlign: 'center' }}>
                Moradia Premium Nova<br />
                <span style={{ color: 'var(--gold)' }}>390.000€</span> <span style={{ opacity: 0.4, margin: '0 6px', fontWeight: 300 }}>|</span> A 10 minutos do centro
              </h1>

              <p className="hero-sub hero-sub--compact" style={{ textAlign: 'center' }}>
                Consulte o <strong>mapa de acabamentos exclusivo</strong> e descubra os materiais premium, jardim privativo, estacionamento coberto e a opção T4.
              </p>

              <div className="hero-cta-group" style={{ justifyContent: 'center', alignItems: 'center' }}>
                <a href="#formulario" className="btn btn--gold btn--lg" id="hero-cta">
                  {CTA_PRIMARY}
                  <ArrowIcon />
                </a>
                <div className="hero-cta-secondary">
                  <a href="#galeria">Ver moradia</a>
                  <span aria-hidden>·</span>
                  <a href="#localizacao">Localização</a>
                </div>
              </div>

              <TrustBadges className="trust-badges--hero" />
            </RevealWrapper>

            <RevealWrapper delay={1}>
              <ProjectHighlights className="project-highlights--hero" />
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* ── PARTNERS BANNER ── */}
      <section className="partners-banner" aria-label="Parceiros Técnicos">
        <div className="container">
          <div className="partners-inner">
            <span className="partners-label">Parceiros Técnicos de Execução:</span>
            <div className="partners-logos">
              <div className="partner-item">
                <span className="partner-text-logo">Grupo Centímetro</span>
              </div>
              <span className="partner-sep">&amp;</span>
              <div className="partner-item partner-item--img">
                <OptimizedImage
                  src="/Positive.png"
                  alt="Positive Project & Co"
                  width={140}
                  height={45}
                  sizes="140px"
                  style={{ width: 'auto', height: '36px', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScarcityBar />

      {/* ══════════════════════════════════════════════════
          GALERIA (primeiro — prova visual)
          ══════════════════════════════════════════════════ */}
      <section className="section section--dark section--tight" id="galeria">
        <div className="container">
          <RevealWrapper>
            <div className="section-header section-header--center section-header--compact">
              <p className="label">A Moradia</p>
              <h2 className="title title--center">Veja o projeto.</h2>
              <p className="section-intro section-intro--center section-intro--short">
                Interiores e exteriores · todas as áreas personalizáveis em acabamentos
              </p>
            </div>
          </RevealWrapper>

          <GalleryLightbox />
          <SectionCta note="Acesso imediato · Mapa de acabamentos detalhado" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PLANTAS
          ══════════════════════════════════════════════════ */}
      <section className="section section--mid section--tight" id="plantas">
        <div className="container">
          <RevealWrapper>
            <div className="section-header section-header--center section-header--compact">
              <p className="label">Plantas</p>
              <h2 className="title title--center">Distribuição {PROJECT.typology} · {PROJECT.areaSqm} m²</h2>
            </div>
          </RevealWrapper>

          <PlansLightbox />
          <SectionCta />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          LOCALIZAÇÃO
          ══════════════════════════════════════════════════ */}
      <section className="section section--mid section--tight" id="localizacao">
        <div className="container">
          <RevealWrapper>
            <div className="section-header section-header--compact">
              <p className="label">Localização</p>
              <h2 className="title">Quintas, Oliveirinha</h2>
              <p className="section-intro section-intro--short">
                <strong>{PROJECT.fullAddress}</strong> — Aveiro centro, A17 e costa a minutos.
              </p>
            </div>
          </RevealWrapper>

          <div className="location-highlight">
            <div className="location-map">
              <iframe
                src={PROJECT.mapsEmbed}
                title={`Localização — ${PROJECT.fullAddress}`}
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: 'var(--radius)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="location-stats-large">
              <div className="loc-stat-card">
                <span className="loc-stat-time">8 min</span>
                <span className="loc-stat-desc">Centro de Aveiro</span>
              </div>
              <div className="loc-stat-card">
                <span className="loc-stat-time">2 min</span>
                <span className="loc-stat-desc">Autoestrada A17</span>
              </div>
              <div className="loc-stat-card">
                <span className="loc-stat-time">17 min</span>
                <span className="loc-stat-desc">Praia</span>
              </div>
            </div>
          </div>
          <SectionCta note="Descubra a localização exata, áreas amplas e condições de apoio bancário." />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FORMULÁRIO (cedo — após ver moradia e local)
          ══════════════════════════════════════════════════ */}
      <section className="section section--dark" id="formulario">
        <div className="container container--narrow">
          <RevealWrapper>
            <div className="section-header section-header--center section-header--compact">
              <p className="label">{PROJECT.managerTitle}</p>
              <h2 className="title title--center">Receba o mapa hoje.</h2>
              <p className="section-intro section-intro--center section-intro--short">
                {UNITS_LABEL} · {PROJECT.price}€ · avaliação bancária {PROJECT.priceAppraisal}€ · resposta em 24h
              </p>
              <ProjectHighlights className="project-highlights--form" />
            </div>
          </RevealWrapper>

          <RevealWrapper>
            <FormHighlight>
              <div className="form-wrap">
                <QualForm />
              </div>
            </FormHighlight>
          </RevealWrapper>

          <RevealWrapper>
            <VisitSteps />
          </RevealWrapper>

          <RevealWrapper>
            <VisitFaq />
          </RevealWrapper>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          A CASA — detalhe (após interesse visual)
          ══════════════════════════════════════════════════ */}
      <section className="section section--mid" id="projeto">
        <div className="container">
          <RevealWrapper>
            <div className="section-header section-header--center section-header--compact">
              <p className="label">Alto padrão</p>
              <h2 className="title title--center">{PROJECT.areaSqm} m² · jardim · estacionamento</h2>
              <p className="section-intro section-intro--center section-intro--short">
                Materiais de excelência · entrega em {PROJECT.deliveryLabel} · personalização em todas as áreas
              </p>
            </div>
          </RevealWrapper>

          <div className="problem-grid">
            {[
              { num: '01', title: 'Espaço familiar', body: 'Três quartos e zonas sociais amplas. Para quem faz upgrade — não procura o mínimo.' },
              { num: '02', title: 'Conforto LSF', body: 'Envolvente de alto desempenho. Eficiência térmica e acústica à altura do investimento.' },
              { num: '03', title: 'Chave na mão', body: `Cozinha e casas de banho equipadas. Entrega em ${PROJECT.deliveryLabel}, sem obras por fazer.` },
              { num: '04', title: 'Tudo personalizável', body: 'Todas as áreas: acabamentos, revestimentos e plafonds com o seu Gestor de Projeto — ainda em obra.' },
            ].map((card, i) => (
              <RevealWrapper key={card.num} delay={i % 4 as 0 | 1 | 2 | 3}>
                <div className="problem-card">
                  <div className="problem-num">{card.num}</div>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>



          <RevealWrapper>
            <div className="callout-bar">
              <div className="callout-bar-line" aria-hidden />
              <p>
                <strong>Compra em planta:</strong> apoio bancário à obra, benefícios fiscais e preço fechado — com personalização total antes da entrega.
              </p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PARA QUEM É ESTA CASA
          ══════════════════════════════════════════════════ */}
      <section className="section section--mid" id="contexto">
        <div className="container">
          <div className="lsf-layout">
            <RevealWrapper>
              <div>
                <p className="label">Para si se</p>
                <h2 className="title">Família a decidir<br />com seriedade.</h2>
                <div className="check-list">
                  {[
                    'Upgrade habitacional na região Centro',
                    'Valoriza personalização em todas as áreas',
                    'Compreende vantagem da compra em planta',
                  ].map((item) => (
                    <div key={item} className="check-item">
                      <CheckSvg />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealWrapper>

            <RevealWrapper delay={1}>
              <div className="lsf-highlight-box">
                <h3 style={{ color: 'var(--gold)' }}>{PROJECT.price}€</h3>
                <p>
                  Avaliação bancária <strong>{PROJECT.priceAppraisal}€</strong> · {UNITS_LABEL}.
                </p>
                <div className="check-list">
                  <div className="check-item" style={{ color: 'var(--white)' }}>
                    <CheckSvg /> <span>Personalização Total (Opção T4)</span>
                  </div>
                  <div className="check-item" style={{ color: 'var(--white)' }}>
                    <CheckSvg /> <span>Apoio bancário à obra</span>
                  </div>
                </div>
                <div style={{ marginTop: '24px' }}>
                  <a href="#formulario" className="btn btn--gold btn--sm btn--full">
                    {CTA_PRIMARY}
                  </a>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          COMO FUNCIONA
          ══════════════════════════════════════════════════ */}
      <section className="section section--dark" id="modelo">
        <div className="container">
          <RevealWrapper>
            <div className="section-header section-header--center">
              <p className="label">Processo</p>
              <h2 className="title title--center">Três passos.</h2>
            </div>
          </RevealWrapper>

          <div className="phases-layout">
            {[
              { step: '01', badge: 'Informação', title: 'Detalhes Técnicos', body: `Avaliação bancária (${PROJECT.priceAppraisal}€), mapa de acabamentos e opções de financiamento.` },
              { step: '02', badge: 'Reserva', title: 'Reserva', body: 'O gestor conduz visita e reserva. Proteção de sinal se o banco recusar por motivos alheios a si.' },
              { step: '03', badge: 'Entrega', title: PROJECT.deliveryLabel, body: 'Mesmo gestor acompanha personalização e obra até à entrega.' },
            ].map((p, i) => (
              <RevealWrapper key={p.step} delay={i as 0 | 1 | 2}>
                <div className="phase-card">
                  <div className="phase-step" aria-hidden>{p.step}</div>
                  <span className="phase-badge">{p.badge}</span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>

          <SectionCta />
        </div>
      </section>

      <section className="section section--mid section--tight" id="beneficios">
        <div className="container">
          <div className="lsf-layout">
            <div className="lsf-features">
              {[
                { title: 'Jardim privado', body: 'Exterior reservado à unidade.' },
                { title: 'LSF', body: 'Prazo previsível e conforto térmico superior.' },
                { title: 'Personalização total', body: 'Todas as áreas e acabamentos — com Gestor de Projeto.' },
                { title: 'Localização', body: 'Quintas: cidade, autoestrada e praia a minutos.' },
              ].map((f, i) => (
                <RevealWrapper key={f.title} delay={i % 3 as 0 | 1 | 2}>
                  <div className="lsf-feature">
                    <span className="lsf-num" aria-hidden>0{i + 1}</span>
                    <div>
                      <h3>{f.title}</h3>
                      <p>{f.body}</p>
                    </div>
                  </div>
                </RevealWrapper>
              ))}
            </div>

            <RevealWrapper delay={1}>
              <div className="lsf-highlight-box">
                <h3 style={{ color: 'var(--gold)' }}>Proteção de sinal</h3>
                <p>Devolução integral se o banco recusar por motivos alheios ao comprador.</p>
                <div style={{ marginTop: '24px' }}>
                  <a href="#formulario" className="btn btn--gold btn--sm btn--full">
                    {CTA_PRIMARY}
                  </a>
                </div>
              </div>
            </RevealWrapper>
          </div>

          <RevealWrapper delay={1}>
            <div style={{ marginTop: 48, borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
              <OptimizedImage
                src={IMAGES.salaJantar}
                alt="Sala de jantar"
                width={1400}
                height={933}
                sizes={CONTENT_IMAGE_SIZES}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </RevealWrapper>
        </div>
      </section>

      <section className="section section--dark section--tight" id="tecnologia">
        <div className="container">
          <RevealWrapper>
            <div className="section-header section-header--center section-header--compact">
              <p className="label">Construção LSF</p>
              <h2 className="title title--center">Entrega em {PROJECT.deliveryLabel}</h2>
            </div>
          </RevealWrapper>

          <div className="benefits-grid">
            {[
              { tag: 'Prazo', title: PROJECT.deliveryLabel, body: 'Cronograma contratual — obra industrializada.' },
              { tag: 'Conforto', title: 'Isolamento', body: 'Envolvente de alto desempenho térmico e acústico.' },
              { tag: 'Precisão', title: 'LSF', body: 'Estrutura em aço leve — menos imprevistos que obra tradicional.' },
              { tag: 'Valor', title: 'Em planta', body: 'Personalize agora; benefícios fiscais desta modalidade.' },
            ].map((b, i) => (
              <RevealWrapper key={b.tag} delay={i % 4 as 0 | 1 | 2 | 3}>
                <div className="benefit-card">
                  <span className="benefit-tag">{b.tag}</span>
                  <h3>{b.title}</h3>
                  <p>{b.body}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>

          <SectionCta />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          QUEM SOMOS
          ══════════════════════════════════════════════════ */}
      <section className="section section--dark" id="autoridade">
        <div className="container">
          <div className="about-grid" style={{ gridTemplateColumns: '1fr', maxWidth: 640, margin: '48px auto 0' }}>
            <RevealWrapper delay={0}>
              <div className="about-card">
                <div style={{ background: '#fff', padding: '32px 24px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px', borderRadius: 'var(--radius) var(--radius) 0 0' }}>
                  <OptimizedImage src={IMAGES.sign2} alt="Silvermont Capital" width={480} height={120} sizes="240px" style={{ width: '100%', maxWidth: '240px', height: 'auto', display: 'block' }} />
                  <OptimizedImage src={IMAGES.freitas1} alt="Parceria Freitas" width={320} height={320} sizes="160px" style={{ width: '100%', maxWidth: '160px', height: 'auto', display: 'block', borderRadius: '4px' }} />
                </div>
                <div className="about-body" style={{ textAlign: 'center' }}>
                  <h3>Silvermont Capital</h3>
                  <p>Gestão integral da obra · Gestor de Projeto dedicado · {PROJECT.promoter}.</p>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SIMULADOR
          ══════════════════════════════════════════════════ */}
      <section className="section section--mid" id="simulador">
        <div className="container">
          <RevealWrapper>
            <Calculadora />
          </RevealWrapper>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FOOTER
          ══════════════════════════════════════════════════ */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div>
              <span className="footer-logo">{PROJECT.name}</span>
              <p className="footer-tagline">{PROJECT.fullAddress} — Entrega em {PROJECT.deliveryLabel}</p>
              <div style={{ marginTop: '16px' }}>
                <a
                  href={`https://wa.me/351920601070?text=${encodeURIComponent('Olá André, gostaria de obter mais informações sobre o Domaine du Vingt-Cinq.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-whatsapp-link"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontWeight: 500,
                    fontSize: '0.85rem',
                    transition: 'color var(--transition)'
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '18px', height: '18px' }}>
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.45 5.429 0 9.85-4.417 9.853-9.848.002-2.63-1.023-5.101-2.887-6.968C16.375 1.92 13.901 1.9 11.272 1.9c-5.432 0-9.854 4.416-9.856 9.849-.001 1.947.509 3.551 1.487 5.106L1.87 21.087l4.777-1.933zm11.986-7.834c-.267-.134-1.587-.783-1.834-.873-.247-.09-.427-.135-.607.135-.18.27-.697.873-.854 1.053-.158.18-.315.202-.582.067-.267-.134-1.13-.416-2.153-1.328-.795-.71-1.332-1.587-1.488-1.857-.157-.27-.017-.417.118-.552.121-.122.267-.315.4-.473.133-.157.178-.27.266-.45.089-.18.045-.338-.022-.473-.068-.135-.607-1.463-.83-2.003-.218-.527-.459-.455-.63-.464-.162-.008-.347-.01-.53-.01-.183 0-.482.068-.733.338-.25.27-1.587 1.553-1.587 3.78s1.62 4.388 1.845 4.691c.225.304 3.19 4.871 7.729 6.827 1.079.466 1.92.744 2.576.953 1.083.344 2.07.296 2.852.179.87-.13 1.834-.749 2.092-1.439.258-.69.258-1.283.18-1.414-.079-.13-.282-.22-.549-.354z"/>
                  </svg>
                  WhatsApp: +351 920 601 070 (André Queirós)
                </a>
              </div>
            </div>
            <p className="footer-disclaimer">
              Material indicativo sujeito a afinações em fase de desenvolvimento. Valores perspetivados de modo indicial e a proposta documentada pode carecer de verificação por meios legais. Não consubstancia a compra final em si sem prévia autorização das partes intervenientes.
            </p>
          </div>
          <div className="footer-bottom">
            <span>&copy; 2026 Silvermont Capital. Todos os direitos reservados.</span>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <a href="/termos" style={{ color: 'inherit', textDecoration: 'underline' }}>Termos e Condições</a>
              <a href="/privacidade" style={{ color: 'inherit', textDecoration: 'underline' }}>Política de Privacidade</a>
              <span>Venda Exclusiva.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
