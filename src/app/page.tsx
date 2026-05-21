import { Fragment } from 'react';
import FloatingCTA from '@/components/FloatingCTA';
import RevealWrapper from '@/components/RevealWrapper';
import QualForm from '@/components/QualForm';
import GalleryLightbox from '@/components/GalleryLightbox';
import PlansLightbox from '@/components/PlansLightbox';
import Calculadora from '@/components/Calculadora';

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
            Moradia <span>T3 Quintãs</span>
          </a>
          <div className="nav-actions">
            <a href="#formulario" className="nav-link btn btn--gold btn--sm">Agendar Visita</a>
            <a href="#galeria" className="nav-link btn btn--outline btn--sm">Fotos & Plantas</a>
            <a href="#simulador" className="nav-link btn btn--ghost btn--sm">Simular Financiamento</a>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════
          HERO
          ══════════════════════════════════════════════════ */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          <img src="/Exterior Capa.png" alt="" aria-hidden="true" />
          <div className="hero-bg-overlay" />
        </div>
        <div className="container">
          <div className="hero-inner">
            <RevealWrapper>
              <div className="hero-eyebrow">T3 · 185m² · Jardim Privativo · Março 2027</div>

              <h1 className="hero-title">
                A casa onde a tua<br />
                <em>vida começa a fazer sentido.</em>
                <span className="hero-price">390.000€</span>
              </h1>

              <p className="hero-sub">
                Um T3 de 185m² com jardim privativo, a <strong>8 minutos do centro</strong> e a <strong>17 minutos das praias.</strong><br />
                Compra em planta com apoio total do banco.
              </p>

              <div className="hero-bullets">
                <span className="hero-bullet">🌿 Jardim e Estacionamento Privativos</span>
                <span className="hero-bullet">🎨 Acabamentos escolhidos por ti</span>
              </div>

              <div className="hero-cta-group">
                <a href="#formulario" className="btn btn--gold btn--lg" id="hero-cta">
                  Agendar Visita Gratuita
                  <ArrowIcon />
                </a>
                <a href="#galeria" className="btn btn--outline btn--lg">
                  Ver Fotos e Plantas
                </a>
                <a href="#simulador" className="btn btn--ghost btn--lg">
                  Simular Financiamento
                </a>
              </div>
            </RevealWrapper>

            <RevealWrapper delay={1}>
              <div className="hero-stats">
                {[
                  { val: 'T3', lbl: 'Tipologia' },
                  { val: '185 m²', lbl: 'Área Útil' },
                  { val: 'Mar 2027', lbl: 'Entrega' },
                  { val: '390.000€', lbl: 'Preço Direto' },
                ].map((s) => (
                  <Fragment key={s.lbl}>
                    <div className="stat-item">
                      <span className="stat-value">{s.val}</span>
                      <span className="stat-label">{s.lbl}</span>
                    </div>
                  </Fragment>
                ))}
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>
      
      {/* ── BANK SUPPORT BANNER ── */}
      <div className="bank-banner">
        <div className="container">
          <span className="bank-banner-icon">🏦</span>
          <p><strong>Compra em Planta com Apoio Total do Banco</strong> — o banco financia a obra directamente. Na visita explicamos tudo.  <span style={{ color: 'var(--gold)', fontWeight: 600 }}>Só resta 1 moradia disponível.</span></p>
        </div>
      </div>

      {/* ── SCARCITY BANNER ── */}
      <div className="scarcity-banner">
        <div className="container scarcity-inner">
          <div className="scarcity-left">
            <span className="scarcity-dot" />
            <strong>Apenas 1 moradia disponível</strong> (2 de 3 já reservadas).
          </div>
          <div className="scarcity-right">
            <strong>Se reservares agora, garantes os 390.000€.</strong> Mais tarde o preço subirá até aos 450.000€.
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          A CASA — PILARES EMOCIONAIS
          ══════════════════════════════════════════════════ */}
      <section className="section section--mid" id="projeto">
        <div className="container">
          <RevealWrapper>
            <div className="section-header section-header--center">
              <p className="label">A Tua Nova Casa</p>
              <h2 className="title title--center">185m² onde cabe<br />a vida toda.</h2>
              <p className="section-intro section-intro--center">
                Não é apenas uma casa. É o sítio onde vais acordar com luz natural, ouvir as crianças a brincar no jardim, e sentir que finalmente chegaste a casa — mesmo antes de entrar.
              </p>
            </div>
          </RevealWrapper>

          <div className="problem-grid">
            {[
              { num: '01', title: 'Espaço que respira', body: 'Três quartos, sala ampla e jardim privativo. Espaço suficiente para uma família a crescer, para ter um escritório em casa, ou simplesmente para respirar fundo.' },
              { num: '02', title: 'Luz todo o dia', body: 'Orientação solar estudada e vãos generosos. A luz da manhã acorda contigo. A luz da tarde acompanha o jantar. Conforto térmico natural, sem esforço.' },
              { num: '03', title: 'Tudo incluído, nada por fazer', body: 'Cozinha equipada, casas de banho completas, pavimentos e pinturas incluídos no preço. Ao receber as chaves em março de 2027, a casa já está a teu gosto — sem obras, sem surpresas.' },
              { num: '04', title: 'Feita à tua medida', body: 'Ainda em planta, com total liberdade de escolha. Podes personalizar os acabamentos e existe a possibilidade de converter para um T4 com quarto no rés-do-chão.' },
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
                <strong>Chave na mão, de verdade.</strong> Preço fechado desde o primeiro dia. Sem surpresas, sem obras por fazer, sem custos escondidos. Entras e já é teu.
              </p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          GALERIA
          ══════════════════════════════════════════════════ */}
      <section className="section section--dark" id="galeria">
        <div className="container">
          <RevealWrapper>
            <div className="section-header section-header--center">
              <p className="label">A Casa por Dentro</p>
              <h2 className="title title--center">Imagina-te aqui.</h2>
              <p className="section-intro section-intro--center">
                Renderizações e plantas do projeto. Possibilidade de personalização total e de adicionar um quarto no rés-do-chão (T4). A casa adapta-se a ti.
              </p>
            </div>
          </RevealWrapper>

          <GalleryLightbox />

          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <a href="#formulario" className="btn btn--gold btn--lg">
              Agendar Visita para Discutir Possibilidades
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PLANTAS
          ══════════════════════════════════════════════════ */}
      <section className="section section--mid" id="plantas">
        <div className="container">
          <RevealWrapper>
            <div className="section-header section-header--center">
              <p className="label">As Plantas</p>
              <h2 className="title title--center">Conhece o teu futuro espaço.</h2>
              <p className="section-intro section-intro--center">
                Visualiza a disposição na planta em 3D e analisa a distribuição detalhada das áreas na planta técnica.
              </p>
            </div>
          </RevealWrapper>

          <PlansLightbox />
          
          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <a href="#formulario" className="btn btn--gold btn--lg">
              Discutir Planta na Visita
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          LOCALIZAÇÃO
          ══════════════════════════════════════════════════ */}
      <section className="section section--mid" id="localizacao">
        <div className="container">
          <RevealWrapper>
            <div className="section-header">
              <p className="label">A Localização</p>
              <h2 className="title">Tranquilidade com a<br />Cidade a apenas 5 minutos.</h2>
              <p className="section-intro">
                O lote situa-se nas Quintãs (Rua da Capela Nova), inserido num loteamento organizado, seguro e de forte pendor familiar. O equilíbrio perfeito entre a pacatez residencial e a proximidade aos principais acessos.
              </p>
            </div>
          </RevealWrapper>

          <div className="location-highlight">
            <div className="location-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d24263.633!2d-8.6366!3d40.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0xd23986968d95697%3A0x6b1c4c1a5d6f6e8c!2zNDDCsDM1JzEzLjMiTiA4wrAzNycwNC4xIlc!3m2!1d40.587032!2d-8.617795!4m5!1s0xd2398f5b8423f71%3A0xc3f139e3f6848130!2sGlic%C3%ADnias%20Plaza!3m2!1d40.63!2d-8.64!5e0!3m2!1spt-PT!2spt!4v1714650000000!5m2!1spt-PT!2spt" 
                width="100%" 
                height="450" 
                style={{ border: 0, borderRadius: 'var(--radius)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="location-stats-large">
              <div className="loc-stat-card">
                <span className="loc-stat-time">8 min</span>
                <span className="loc-stat-desc">Do Centro da Cidade</span>
              </div>
              <div className="loc-stat-card">
                <span className="loc-stat-time">2 min</span>
                <span className="loc-stat-desc">da Autoestrada (A17)</span>
              </div>
              <div className="loc-stat-card">
                <span className="loc-stat-time">17 min</span>
                <span className="loc-stat-desc">Da Praia (Barra/Costa Nova)</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <a href="#formulario" className="btn btn--gold btn--lg">
              Agendar Visita ao Lote
              <ArrowIcon />
            </a>
          </div>
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
                <p className="label">Esta casa é para ti se...</p>
                <h2 className="title">Há momentos em que sentimos que já é hora de ter algo que é nosso.</h2>
                <p className="section-intro" style={{ marginBottom: 24 }}>
                  Seja a primeira vez, seja um novo começo — há momentos em que sentimos que já é hora. De ter espaço. De ter raízes. De ter algo que é verdadeiramente nosso.
                </p>
                <div className="check-list">
                  {[
                    'Casal a comprar a primeira casa juntos',
                    'Família a crescer que precisa de mais espaço e jardim',
                    'Quem quer sair do arrendamento de vez',
                    'Quem está numa nova fase e quer recomeçar bem',
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
                <h3 style={{ color: 'var(--gold)' }}>Um preço justo por algo real</h3>
                <p>390.000€ por um T3 de 185m² com jardim, estacionamento e tudo equipado. Avaliado em 450.000€ — a diferença fica no teu bolso, não no do intermediário.</p>
                <div className="check-list">
                  <div className="check-item" style={{ color: 'var(--white)' }}>
                    <CheckSvg /> <span>Construção nova, sem obras à chegada</span>
                  </div>
                  <div className="check-item" style={{ color: 'var(--white)' }}>
                    <CheckSvg /> <span>Jardim e estacionamento privativos incluídos</span>
                  </div>
                  <div className="check-item" style={{ color: 'var(--white)' }}>
                    <CheckSvg /> <span>Ainda podes personalizar os acabamentos</span>
                  </div>
                </div>
                <div style={{ marginTop: '24px' }}>
                  <a href="#formulario" className="btn btn--gold btn--sm btn--full">
                    Quero Conhecer Melhor
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
              <p className="label">Simples como devia ser</p>
              <h2 className="title title--center">Da conversa à chave na mão.<br />Nós tratamos do resto.</h2>
              <p className="section-intro section-intro--center">
                Compras em planta com apoio bancário — como num apartamento normal, mas numa moradia T3 com jardim. O banco financia a obra, nós gerimos tudo. Tu escolhes a casa dos teus sonhos.
              </p>
            </div>
          </RevealWrapper>

          <div className="phases-layout">
            {[
              { step: '01', badge: 'Visita', title: 'Vem ver o lote pessoalmente', body: 'Marca uma visita gratuita. Vens ao terreno, tens a planta na mão, vês a orientação solar, imaginas o jardim. Sentes se é mesmo o sítio.' },
              { step: '02', badge: 'Reserva', title: 'Reservas com segurança total', body: 'Preço fechado, projeto aprovado, prazo real. Assinas o contrato e o teu lugar fica garantido. Se o banco não financiar por razões alheias a ti, tens o sinal de volta.' },
              { step: '03', badge: 'Entrega', title: 'Em março de 2027 abres a porta', body: 'Desde o sinal que o projeto e o terreno já são teus. Em março de 2027 recebes a chave e podes mudar-te — moradia completa, equipada e personalizada, gerida por nós do início ao fim.' },
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

          <div style={{ marginTop: '48px', textAlign: 'center' }}>
            <a href="#formulario" className="btn btn--gold btn--lg">
              Marcar a Minha Visita
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          POR QUE ESTA CASA MERECE ATENÇÃO
          ══════════════════════════════════════════════════ */}
      <section className="section section--mid" id="beneficios">
        <div className="container">
          <RevealWrapper>
            <div className="section-header section-header--center">
              <p className="label">O que tens aqui</p>
              <h2 className="title title--center">Tudo o que sempre quiseste.<br />No sítio certo.</h2>
              <p className="section-intro section-intro--center">
                Não é só uma casa. É o jardim onde as crianças vão crescer, a garagem que é tua, a luz da tarde que entra pela sala, a tranquilidade de chegar a casa e sentir que chegaste mesmo.
              </p>
            </div>
          </RevealWrapper>

          <div className="lsf-layout">
            <div className="lsf-features">
              {[
                { title: 'Jardim e privacidade', body: 'Um jardim privativo onde podes tomar café de manhã, deixar os miúdos a brincar à tarde, ou simplesmente respirar fundo ao fim do dia. Espaço a mais não existe.' },
                { title: 'Luz e conforto térmico', body: 'Orientação solar otimizada e isolamento premium (tecnologia LSF). A casa mantém-se fresca no verão e quente no inverno, sem esforço e sem contas pesadas de energia.' },
                { title: 'Personalização antes da obra', body: 'Como ainda está em planta, tens a possibilidade única de escolher os acabamentos à tua medida. Pavimentos, pinturas, revestimentos — a casa não é genérica, é tua.' },
                { title: 'Localização e qualidade de vida', body: 'Zona residencial tranquila e organizada. Supermercados, escolas e serviços a minutos. O centro a 8 min, a praia a 17 min, a autoestrada a 2 min. O dia a dia simplificado.' },
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
                <h3 style={{ color: 'var(--gold)' }}>Zero riscos para a tua família</h3>
                <p>Incluimos uma cláusula no Contrato Promessa: se o banco não aprovar o financiamento por razões alheias a ti, o sinal é devolvido na íntegra.</p>
                <div style={{ marginTop: 20, fontSize: '0.95rem', color: 'var(--text-light)', lineHeight: 1.7 }}>
                  <span style={{ color: 'var(--white)' }}>Sem letras miudinhas. Sem surpresas no fim. Só a certeza de que, se avançares, estás protegido.</span>
                </div>
                <div style={{ marginTop: '24px' }}>
                  <a href="#formulario" className="btn btn--gold btn--sm btn--full">
                    Agendar uma Chamada
                  </a>
                </div>
              </div>
            </RevealWrapper>
          </div>

          <RevealWrapper delay={1}>
            <div style={{ marginTop: 48, borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
              <img src="/Sala de Jantar.png" alt="Sala de jantar" style={{ width: '100%', height: 'auto', display: 'block' }} loading="lazy" />
            </div>
            <div style={{ marginTop: '32px', textAlign: 'center' }}>
              <a href="#formulario" className="btn btn--gold btn--lg">
                Quero Conhecer esta Casa
                <ArrowIcon />
              </a>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          TECNOLOGIA LSF
          ══════════════════════════════════════════════════ */}
      <section className="section section--dark" id="tecnologia">
        <div className="container">
          <RevealWrapper>
            <div className="section-header section-header--center">
              <p className="label">10 Meses de Obra — Sem Atrasos</p>
              <h2 className="title title--center">Construção de Precisão: LSF</h2>
            </div>
          </RevealWrapper>

          <div className="benefits-grid">
            {[
              { tag: 'Precisão', title: 'Light Steel Framing', body: 'Estruturas de aço leve produzidas de forma industrial e montadas na obra sem margem para erros estéticos ou logísticos.' },
              { tag: 'Conforto', title: 'Isolamento Térmico Absoluto', body: 'A tecnologia LSF isola as paredes e teto por camadas múltiplas, erradicando humidades e oscilações desconfortáveis de clima.' },
              { tag: 'Acústica', title: 'Silêncio Garantido', body: 'Ao contrário dos reflexos e propagação do tijolo moderno, os materiais absorventes do modelo LSF atenuam ruídos externos de forma esmagadora.' },
              { tag: 'Prazo', title: 'Rapidez Previsível', body: 'Fugimos dos imponderáveis da mão-de-obra que bloqueia a maioria da construção pesada. A agilidade permite fechar chaves em Março de 2027.' },
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

          <div style={{ marginTop: '32px', textAlign: 'center' }}>
            <a href="#formulario" className="btn btn--gold btn--lg">
              Marcar Visita Gratuita
              <ArrowIcon />
            </a>
          </div>
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
                  <img src="/sign2.png" alt="Silvermont Capital" style={{ width: '100%', maxWidth: '240px', height: 'auto', display: 'block' }} loading="lazy" />
                  <img src="/freitas1.jpeg" alt="Parceria Freitas" style={{ width: '100%', maxWidth: '160px', height: 'auto', display: 'block', borderRadius: '4px' }} loading="lazy" />
                </div>
                <div className="about-body" style={{ textAlign: 'center' }}>
                  <h3>Silvermont Capital</h3>
                  <p>Somos a equipa que gere a obra do início ao fim, que respeita prazos e que acredita que comprar casa deve ser uma experiência boa — não um pesadelo burocrático. Estás em boas mãos.</p>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA TEASER ── */}
      <div className="final-cta-band">
        <RevealWrapper>
          <div className="container" style={{ textAlign: 'center' }}>
            <p className="label">Antes de te decidires</p>
            <h2 className="title title--center" style={{ marginBottom: 24 }}>Vem ver tudo.<br />Sem compromisso.</h2>
            <p style={{ color: 'var(--text-light)', maxWidth: 520, margin: '0 auto 32px', fontSize: '1.05rem', lineHeight: 1.7 }}>
              A visita é gratuita. Vens ao lote, vês a orientação solar, tens a planta na mão e ficamos a par das tuas dúvidas. Só depois decides.
            </p>
            <a href="#formulario" className="btn btn--gold btn--lg">
              Marcar a Minha Visita Gratuita
              <ArrowIcon />
            </a>
          </div>
        </RevealWrapper>
      </div>

      {/* ══════════════════════════════════════════════════
          SIMULADOR (CALCULADORA)
          ══════════════════════════════════════════════════ */}
      <section className="section section--mid" id="simulador">
        <div className="container">
          <RevealWrapper>
            <Calculadora />
          </RevealWrapper>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FORMULÁRIO
          ══════════════════════════════════════════════════ */}
      <section className="section section--mid" id="formulario">
        <div className="container container--narrow">
          <RevealWrapper>
            <div className="section-header section-header--center">
              <p className="label">Marca a tua visita — resta 1 vaga</p>
              <h2 className="title title--center">Vem ver a casa<br />antes de te decidires.</h2>
              <p className="section-intro section-intro--center">
                Deixa o teu nome e telemóvel. Entraremos em contacto em menos de 24 horas para agendar a tua visita gratuita.
              </p>
              <div className="urgency-box">
                <div className="urgency-row">
                  <span className="scarcity-dot" /> <span><strong>Apenas 1 moradia disponível</strong> das 3 construídas — as outras 2 já estão reservadas.</span>
                </div>
                <div className="urgency-row">
                  <span><strong>Se reservares agora, garantes o valor de 390.000€.</strong> Se deixares para mais tarde, o preço subirá até alcançar a avaliação de 450.000€.</span>
                </div>
              </div>
            </div>
          </RevealWrapper>

          <RevealWrapper>
            <div className="form-wrap">
              <QualForm />
            </div>
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
              <span className="footer-logo">Moradia <span>T3 Quintãs</span></span>
              <p className="footer-tagline">Quintãs, Aveiro — Entrega Março 2027</p>
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
