import { Fragment } from 'react';
import Image from 'next/image';
import Nav from '@/components/Nav';
import FloatingCTA from '@/components/FloatingCTA';
import RevealWrapper from '@/components/RevealWrapper';
import QualForm from '@/components/QualForm';

/* ============================================================
   ICON SNIPPETS
   ============================================================ */
const CheckIcon = () => (
  <svg width="9" height="9" viewBox="0 0 20 20" fill="currentColor">
    <path d="M16.7 5.3a1 1 0 00-1.4 0L8 12.6 4.7 9.3a1 1 0 00-1.4 1.4l4 4a1 1 0 001.4 0l8-8a1 1 0 000-1.4z" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="btn-arrow" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
);

/* ============================================================
   HERO PILLS DATA
   ============================================================ */
const pills = [
  'Projeto Aprovado',
  'Entrega Prevista 2026',
  'Arquitetura Contemporânea',
];

/* ============================================================
   FEATURES DATA
   ============================================================ */
const features = [
  {
    num: '01',
    title: 'Arquitetura Contemporânea',
    body: 'Linhas limpas, fachada moderna e intemporal. Design que comunica qualidade antes de entrar.',
  },
  {
    num: '02',
    title: 'Layout Funcional para Famílias',
    body: 'Tipologia T3 com áreas bem distribuídas para o ritmo real de uma família moderna.',
  },
  {
    num: '03',
    title: 'Luminosidade Natural',
    body: 'Orientação e vãos estudados para maximizar entrada de luz natural ao longo do dia.',
  },
  {
    num: '04',
    title: 'Conforto Térmico e Acústico',
    body: 'Materiais atuais, isolamentos adequados e caixilharia de qualidade. Conforto o ano todo.',
  },
  {
    num: '05',
    title: 'Espaço Exterior Privativo',
    body: 'Jardim e logradouro privados. Ar livre em casa — cada vez mais difícil de encontrar.',
  },
  {
    num: '06',
    title: 'Zona Residencial Calma',
    body: 'Ambiente habitacional tranquilo, sem a densidade dos centros urbanos.',
  },
];

/* ============================================================
   LOCATION DATA
   ============================================================ */
const locationCards = [
  { icon: '🏫', title: 'Educação e Família', body: 'Estabelecimentos de ensino de vários níveis num raio de acesso fácil para o dia a dia.' },
  { icon: '🛒', title: 'Comércio e Serviços', body: 'Comércio local e grandes superfícies para as compras do dia a dia. Serviços essenciais próximos.' },
  { icon: '🚗', title: 'Acessos e Mobilidade', body: 'Boa ligação a vias rápidas e itinerários principais para os centros urbanos da região.' },
  { icon: '🌳', title: 'Ambiente Residencial', body: 'Zona predominantemente habitacional, baixa densidade e ambiente calmo com segurança de bairro.' },
];

/* ============================================================
   WHY LIST DATA
   ============================================================ */
const whyItems = [
  {
    num: '1',
    title: 'Avaliar procura real antes de avançar',
    body: 'Antes de assumir compromissos adicionais com fornecedores e financiadores, queremos confirmar que existe procura genuína e qualificada neste momento.',
  },
  {
    num: '2',
    title: 'Selecionar compradores prioritários',
    body: 'Com a lista privada identificamos antecipadamente quem está financeiramente preparado, garantindo que o tempo de todos é usado de forma eficiente.',
  },
  {
    num: '3',
    title: 'Oferecer condições de acesso antecipado',
    body: 'Quem entra na lista privada nesta fase tem acesso a condições que não estarão disponíveis após lançamento oficial.',
  },
  {
    num: '4',
    title: 'Garantir alinhamento entre projeto e mercado',
    body: 'Esta fase de validação ajuda-nos a confirmar ou ajustar detalhes do projeto antes de qualquer decisão irreversível.',
  },
];

/* ============================================================
   PAGE COMPONENT
   ============================================================ */
export default function HomePage() {
  return (
    <>
      <Nav />
      <FloatingCTA />

      {/* ==================== HERO ==================== */}
      <section className="hero" id="hero">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-grid" />

        <div className="hero-content">
          <div className="animate-fadeUp hero-badge">
            <span className="hero-badge-dot" />
            Lista Privada &mdash; Acesso Antecipado
          </div>

          <h1 className="hero-title animate-fadeUp delay-1">
            Nova Moradia<br />
            T3 Moderna<br />
            <span className="gold">a 10 Minutos de</span><br />
            <span className="gold">Aveiro</span><br />
            <span className="hero-price">295.000€</span>
          </h1>

          <p className="hero-sub animate-fadeUp delay-2">
            Projeto aprovado em fase inicial, com acesso antecipado para compradores selecionados.{' '}
            <strong>Entrega prevista 2026.</strong> As informações completas são partilhadas apenas após qualificação.
          </p>

          <div className="hero-actions animate-fadeUp delay-3">
            <a href="#formulario" className="btn btn--primary btn--lg">
              Solicitar Informação Completa
              <ArrowIcon />
            </a>
            <a href="#conceito" className="btn btn--outline">
              Conhecer o Projeto
            </a>
          </div>

          <div className="hero-pills animate-fadeUp delay-4">
            {pills.map((p) => (
              <span key={p} className="hero-pill">
                <span className="hero-pill-check">
                  <CheckIcon />
                </span>
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="hero-scroll-line" />
        </div>
      </section>

      {/* ==================== STATS ROW ==================== */}
      <div className="stats-row">
        <div className="container">
          <div className="stats-inner">
            {[
              { val: 'T3', lbl: 'Tipologia' },
              { val: '295k€', lbl: 'Preço Lista Privada' },
              { val: '114 m²', lbl: 'Área de Construção' },
              { val: '2026', lbl: 'Entrega Prevista' },
            ].map((s) => (
              <div key={s.lbl} className="stat-item">
                <span className="stat-value">{s.val}</span>
                <span className="stat-label">{s.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ==================== PROBLEM ==================== */}
      <section className="section problem-section" id="mercado">
        <div className="container">
          <RevealWrapper>
            <div className="section-header">
              <div className="tag">O Contexto Atual</div>
              <div style={{ height: 20 }} />
              <h2 className="section-title">
                Encontrar uma casa nova<br />a preço justo ficou difícil.
              </h2>
              <p className="section-sub">
                O mercado imobiliário em Portugal mudou significativamente. Para quem está genuinamente à procura de habitação própria, a realidade é desafiante.
              </p>
            </div>
          </RevealWrapper>

          <div className="problem-grid">
            {[
              { emoji: '📈', title: 'Preços inflacionados', body: 'Os preços subiram consideravelmente enquanto a qualidade de construção nem sempre acompanhou. É comum pagar muito por pouco.' },
              { emoji: '🔨', title: 'Obras nas usadas', body: 'A maioria das casas usadas exige obras de atualização — canalização, elétrica, isolamento. Custos imprevistos que pesam no orçamento.' },
              { emoji: '⚡', title: 'Baixa eficiência energética', body: 'Grande parte do parque habitacional tem classificações energéticas baixas. Faturas elevadas durante décadas têm um impacto financeiro real.' },
              { emoji: '🔍', title: 'Dificuldade em encontrar qualidade', body: 'Encontrar moradia nova, com arquitetura cuidada e preço justo em zona tranquila tornou-se um exercício de paciência.' },
            ].map((card, i) => (
              <RevealWrapper key={card.title} delay={i % 4 as 0 | 1 | 2 | 3}>
                <div className="problem-card">
                  <span className="problem-emoji">{card.emoji}</span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>

          <RevealWrapper>
            <div className="solution-callout">
              <p>
                Este projeto foi pensado como resposta direta a esta realidade: uma moradia{' '}
                <strong>nova, a 10 minutos de Aveiro</strong>, com <strong>eficiência energética</strong>,{' '}
                <strong>arquitetura contemporânea</strong> e um preço que reflete o momento de lançamento —
                não o mercado daqui a dois anos.
              </p>
            </div>
          </RevealWrapper>

          <RevealWrapper>
            <div style={{ textAlign: 'center', marginTop: 48 }}>
              <a href="#formulario" className="btn btn--primary btn--lg">
                Quero Saber Mais
                <ArrowIcon />
              </a>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ==================== MARKET CONTEXT ==================== */}
      <section className="section market-context-section" id="mercado-comparativo">
        <div className="container">
          <RevealWrapper>
            <div className="section-header section-header--center">
              <div className="tag">Contexto de Mercado</div>
              <div style={{ height: 20 }} />
              <h2 className="section-title" style={{ textAlign: 'center' }}>
                Oportunidade real de mercado.<br />Veja o comparativo na zona.
              </h2>
              <p className="section-sub" style={{ textAlign: 'center' }}>
                Ao contrário da oferta atual em Aradas e arredores de Aveiro, este projeto oferece uma moradia
                <strong> nova e moderna</strong> abaixo do preço médio das casas usadas na região.
              </p>
            </div>
          </RevealWrapper>

          <RevealWrapper>
            <div className="market-map-container">
              <a href="/market-map.png" target="_blank" rel="noopener noreferrer" className="market-map-link">
                <Image
                  src="/market-map.png"
                  alt="Mapa comparativo de preços em Aveiro"
                  width={1200}
                  height={800}
                  className="market-map-image"
                />
                <div className="market-map-zoom-hint">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                  <span>Clique para ampliar</span>
                </div>
              </a>
              <div className="market-map-overlay">
                <div className="market-map-legend">
                  <span className="legend-dot legend-dot--ours" />
                  <span>Este Projeto (295k€)</span>
                  <span className="legend-dot legend-dot--other" />
                  <span>Oferta Mercado na Zona</span>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ==================== CONCEPT ==================== */}
      <section className="section concept-section" id="conceito">
        <div className="concept-bg-orb" />
        <div className="container">
          <RevealWrapper>
            <div className="section-header">
              <div className="tag tag--light">O Projeto</div>
              <div style={{ height: 20 }} />
              <h2 className="section-title section-title--white">
                Uma moradia pensada para<br />quem valoriza o essencial.
              </h2>
              <p className="section-sub section-sub--white">
                Não se trata apenas de metros quadrados. É sobre a forma como a casa funciona no quotidiano.
              </p>
            </div>
          </RevealWrapper>

          <div className="features-grid">
            {features.map((f, i) => (
              <RevealWrapper key={f.num} delay={(i % 3) as 0 | 1 | 2}>
                <div className="feature-cell">
                  <div className="feature-num">{f.num}</div>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>

          <RevealWrapper>
            <div className="specs-strip">
              {[
                { val: 'T3', lbl: 'Tipologia' },
                { val: '114 m²', lbl: 'Área de Construção' },
                { val: '2026', lbl: 'Entrega Prevista' },
                { val: '295k€', lbl: 'Preço Lista Privada' },
              ].map((s, i) => (
                <Fragment key={s.lbl}>
                  <div className="spec">
                    <span className="spec-val">{s.val}</span>
                    <span className="spec-lbl">{s.lbl}</span>
                  </div>
                  {i < 3 && <div className="spec-sep" />}
                </Fragment>
              ))}
            </div>
          </RevealWrapper>

          <RevealWrapper>
            <div style={{ textAlign: 'center', marginTop: 48 }}>
              <a href="#formulario" className="btn btn--primary btn--lg">
                Solicitar Acesso Antecipado
                <ArrowIcon />
              </a>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ==================== PROFILE ==================== */}
      <section className="section profile-section" id="perfil">
        <div className="container">
          <RevealWrapper>
            <div className="section-header">
              <div className="tag">Para Quem É</div>
              <div style={{ height: 20 }} />
              <h2 className="section-title">
                Esta moradia foi pensada<br />para um perfil específico.
              </h2>
              <p className="section-sub">
                Preferimos ser claros desde o início — sobre quem vai beneficiar verdadeiramente deste projeto.
              </p>
            </div>
          </RevealWrapper>

          <div className="profile-cols">
            <RevealWrapper delay={1}>
              <div className="profile-col profile-col--yes">
                <div className="profile-col-header">
                  <span className="profile-icon profile-icon--yes">✔</span>
                  <h3>Este projeto é para si se…</h3>
                </div>
                <ul className="profile-list">
                  <li>É um <strong>casal ou família</strong> que quer sair do apartamento para moradia com exterior</li>
                  <li>Valoriza <strong>qualidade de construção nova</strong> acima de preço baixo em imóvel degradado</li>
                  <li>Quer <strong>eficiência energética</strong> e zero obras futuras</li>
                  <li>Está disposto a esperar pela <strong>conclusão em 2026</strong></li>
                  <li>Quer comprar em <strong>fase inicial</strong> para melhor posicionamento e condições</li>
                  <li>Tem capacidade de financiamento <strong>alinhada com 295.000€</strong></li>
                </ul>
              </div>
            </RevealWrapper>
            <RevealWrapper delay={2}>
              <div className="profile-col profile-col--no">
                <div className="profile-col-header">
                  <span className="profile-icon profile-icon--no">✖</span>
                  <h3>Este projeto não é para si se…</h3>
                </div>
                <ul className="profile-list">
                  <li>Precisa de <strong>entrega imediata</strong></li>
                  <li>Está apenas a <strong>comparar preços</strong> sem intenção de compra</li>
                  <li>Procura <strong>especulação de curto prazo</strong></li>
                  <li>Não tem <strong>pré-aprovação bancária</strong> nem está a tratar disso</li>
                </ul>
                <p className="profile-note">
                  Esta clareza não é exclusão — é respeito mútuo pelo tempo de todos.
                </p>
              </div>
            </RevealWrapper>
          </div>

          <RevealWrapper>
            <div style={{ textAlign: 'center', marginTop: 48 }}>
              <a href="#formulario" className="btn btn--primary btn--lg">
                Fazer Parte da Lista Privada
                <ArrowIcon />
              </a>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ==================== LOCATION ==================== */}
      <section className="section location-section" id="localizacao">
        <div className="container">
          <RevealWrapper>
            <div className="section-header">
              <div className="tag tag--light">Localização</div>
              <div style={{ height: 20 }} />
              <h2 className="section-title section-title--white">
                A 10 minutos de Aveiro.<br />Com toda a tranquilidade de zona residencial.
              </h2>
              <p className="section-sub section-sub--white">
                A morada exata será partilhada após qualificação. O que podemos adiantar sobre o contexto:
              </p>
            </div>
          </RevealWrapper>

          <div className="location-cards">
            {locationCards.map((c, i) => (
              <RevealWrapper key={c.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div className="loc-card">
                  <div className="loc-icon">{c.icon}</div>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>

          <RevealWrapper>
            <div className="location-lock-note">
              <LockIcon />
              A morada exata e detalhes específicos da localização são partilhados na apresentação completa, disponível após submissão e qualificação.
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ==================== WHY LIST ==================== */}
      <section className="section why-section" id="lista-privada">
        <div className="container container--mid">
          <RevealWrapper>
            <div className="section-header">
              <div className="tag">O Nosso Processo</div>
              <div style={{ height: 20 }} />
              <h2 className="section-title">
                Porque estamos a abrir<br />uma lista privada.
              </h2>
              <p className="section-sub">
                Esta não é uma estratégia de marketing. É a forma mais responsável de gerir um projeto imobiliário.
              </p>
            </div>
          </RevealWrapper>

          <div className="why-list">
            {whyItems.map((item) => (
              <RevealWrapper key={item.num}>
                <div className="why-item">
                  <span className="why-num">{item.num}</span>
                  <div className="why-body">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>

          <RevealWrapper>
            <div style={{ textAlign: 'center', marginTop: 48 }}>
              <a href="#formulario" className="btn btn--primary btn--lg">
                Entrar na Lista Privada
                <ArrowIcon />
              </a>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ==================== FINANCE ==================== */}
      <section className="section finance-section" id="financeiro">
        <div className="container">
          <RevealWrapper>
            <div className="section-header">
              <div className="tag tag--light">Transparência</div>
              <div style={{ height: 20 }} />
              <h2 className="section-title section-title--white">
                O que sabemos neste momento<br />— e o que seria especulação.
              </h2>
            </div>
          </RevealWrapper>

          <div className="finance-grid">
            <RevealWrapper delay={1}>
              <div className="finance-card finance-card--yes">
                <div className="finance-card-label">O que é confirmado</div>
                <div className="finance-items">
                  {[
                    { bold: 'Projeto aprovado', text: 'Licenciamento concluído. O projeto tem aprovação camarária.' },
                    { bold: 'Construção iniciada', text: 'As obras já tiveram início. O cronograma está em curso.' },
                    { bold: 'Preço de acesso: 295.000€', text: 'Valor válido para compradores que entram nesta fase de lista privada.' },
                    { bold: 'Possibilidade de reserva formal', text: 'Após validação mútua, com documentação adequada e condições definidas.' },
                  ].map((fi) => (
                    <div key={fi.bold} className="finance-item">
                      <span className="finance-item-dot" />
                      <div>
                        <strong>{fi.bold}</strong>
                        {fi.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealWrapper>

            <RevealWrapper delay={2}>
              <div className="finance-card finance-card--no">
                <div className="finance-card-label">O que não garantimos</div>
                <div className="finance-items">
                  {[
                    { bold: 'Disponibilidade imediata', text: 'O número de unidades é limitado. A lista privada pode ser encerrada a qualquer momento e as condições desta fase não estarão disponíveis após lançamento oficial.' },
                  ].map((fi) => (
                    <div key={fi.bold} className="finance-item">
                      <span className="finance-item-dot" />
                      <div>
                        <strong>{fi.bold}</strong>
                        {fi.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealWrapper>
          </div>

          <RevealWrapper>
            <div className="price-callout">
              <div className="price-block">
                <span className="price-tag-label">Preço de Acesso — Lista Privada</span>
                <span className="price-big">295.000€</span>
                <span className="price-sub">
                  Disponível nesta fase. Preço de mercado após lançamento oficial: 345.000€.
                </span>
              </div>
              <div className="price-saving">
                <span className="saving-label">Diferença potencial</span>
                <span className="saving-big">50.000€</span>
                <span className="saving-label">face ao preço após lançamento</span>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </section>



      {/* ==================== STEPS ==================== */}
      <section className="section steps-section" id="processo">
        <div className="container">
          <RevealWrapper>
            <div className="section-header section-header--center">
              <div className="tag">Próximos Passos</div>
              <div style={{ height: 20 }} />
              <h2 className="section-title" style={{ textAlign: 'center' }}>
                O que acontece depois<br />de submeter o formulário.
              </h2>
            </div>
          </RevealWrapper>

          <div className="steps-container">
            {[
              { n: '1', title: 'Submete o formulário', body: 'Campos simples sobre o que procura e a sua situação financeira.' },
              { n: '2', title: 'Entramos em contacto', body: 'Por telefone ou WhatsApp dentro de 24–48 horas úteis, sem pressão.' },
              { n: '3', title: 'Recebe a apresentação', body: 'Localização, plantas, cronograma e condições desta fase.' },
              { n: '4', title: 'Visita ou reunião', body: 'Se fizer sentido, agenda uma visita ao local sem qualquer compromisso.' },
            ].map((s, i) => (
              <RevealWrapper key={s.n} delay={(i as 0 | 1 | 2 | 3)}>
                <div className="step">
                  <div className="step-bubble">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== AUTHORITY ==================== */}
      <section className="section authority-section" id="autoridade">
        <div className="container">
          <RevealWrapper>
            <div className="section-header">
              <div className="tag">Sobre o Desenvolvimento</div>
              <div style={{ height: 20 }} />
              <h2 className="section-title">
                Um projeto gerido<br />com rigor e responsabilidade.
              </h2>
            </div>
          </RevealWrapper>

          <div className="authority-grid">
            {[
              { icon: '📋', title: 'Projeto Estruturado', body: 'Inclui projeto de arquitetura, engenharia estrutural, instalações e conformidade legal. Nada é improvisado.' },
              { icon: '✅', title: 'Aprovação em Curso', body: 'Processo de licenciamento em fase avançada, com relacionamento transparente com as entidades competentes.' },
              { icon: '💼', title: 'Planeamento Financeiro Responsável', body: 'Modelo financeiro definido e adequado ao dimensionamento do projeto. Condições baseadas em estrutura de custo real.' },
              { icon: '🏗️', title: 'Foco em Qualidade de Construção', body: 'Seleção de materiais e subempreiteiros com critério. O objetivo é entregar um imóvel que resista bem ao tempo.' },
            ].map((a, i) => (
              <RevealWrapper key={a.title} delay={(i % 4 as 0 | 1 | 2 | 3)}>
                <div className="authority-card">
                  <span className="authority-icon">{a.icon}</span>
                  <div>
                    <h3>{a.title}</h3>
                    <p>{a.body}</p>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>

          <RevealWrapper>
            <div style={{ textAlign: 'center', marginTop: 48 }}>
              <a href="#formulario" className="btn btn--primary btn--lg">
                Solicitar Apresentação Completa
                <ArrowIcon />
              </a>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ==================== SCARCITY ==================== */}
      <section className="section scarcity-section" id="disponibilidade">
        <div className="container container--mid">
          <RevealWrapper>
            <div className="section-header section-header--center">
              <div className="tag tag--light">Disponibilidade</div>
              <div style={{ height: 20 }} />
              <h2 className="section-title section-title--white" style={{ textAlign: 'center' }}>
                Uma unidade. Uma lista.<br />Um processo organizado.
              </h2>
            </div>
          </RevealWrapper>

          <div className="scarcity-items">
            {[
              { emoji: '🏠', text: 'Número limitado de unidades disponíveis nesta fase de lista privada' },
              { emoji: '📋', text: 'Contacto por ordem de submissão, após análise de qualificação' },
              { emoji: '🔒', text: 'As condições desta fase não estarão disponíveis após lançamento oficial' },
            ].map((s, i) => (
              <RevealWrapper key={s.emoji} delay={(i as 0 | 1 | 2)}>
                <div className="scarcity-item">
                  <div className="scarcity-emoji">{s.emoji}</div>
                  <p>{s.text}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>

          <RevealWrapper>
            <p className="scarcity-note">
              Não usamos contadores a fazer contagem decrescente nem linguagem de pressão artificial. Se está genuinamente interessado, o momento certo é quando estiver preparado — e as condições ainda estiverem disponíveis.
            </p>
            <div style={{ textAlign: 'center' }}>
              <a href="#formulario" className="btn btn--primary btn--lg">
                Solicitar Informação Completa
                <ArrowIcon />
              </a>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ==================== FORM ==================== */}
      <section className="section form-section" id="formulario">
        <div className="container container--narrow">
          <RevealWrapper>
            <div className="form-header">
              <div className="tag tag--light" style={{ margin: '0 auto 20px' }}>Qualificação</div>
              <h2 className="section-title section-title--white" style={{ textAlign: 'center' }}>
                Solicitar Apresentação Completa
              </h2>
              <p>Preencha o formulário. Entraremos em contacto dentro de 24–48 horas úteis.</p>
            </div>
          </RevealWrapper>

          <RevealWrapper>
            <QualForm />
          </RevealWrapper>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <span className="footer-logo">Moradia T3 — Lista Privada</span>
              <p>Projeto em fase inicial de desenvolvimento.<br />Informações detalhadas disponíveis após qualificação.</p>
            </div>
            <div className="footer-disclaimer">
              <p>
                As informações desta página são de carácter indicativo e referem-se a um projeto em desenvolvimento. Valores, datas e especificações técnicas estão sujeitos a alterações no decurso normal do processo construtivo e de licenciamento. Este material não constitui uma proposta vinculativa de venda.
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <span>&copy; 2025 — Todos os direitos reservados.</span>
            <span>Informação disponível mediante qualificação prévia</span>
          </div>
        </div>
      </footer>
    </>
  );
}
