import { Fragment } from 'react';
import FloatingCTA from '@/components/FloatingCTA';
import RevealWrapper from '@/components/RevealWrapper';
import QualForm from '@/components/QualForm';

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
            Moradia <span>295K</span>
          </a>
          <div className="nav-actions">
            <a href="#projeto" className="nav-link">A Moradia</a>
            <a href="#modelo" className="nav-link">O Modelo</a>
            <a href="#formulario" className="btn btn--gold btn--sm">Acesso Exclusivo</a>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════
          HERO
          ══════════════════════════════════════════════════ */}
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero-inner">
            <RevealWrapper>
              <div className="hero-eyebrow">Lista Privada — Acesso Antecipado</div>

              <h1 className="hero-title">
                Moradia T3 Moderna<br />
                <em>nas Quintãs.</em>
                <span className="hero-price">295.000€</span>
              </h1>

              <p className="hero-sub" style={{ fontSize: '1.2rem', color: 'var(--white)' }}>
                Entregue <strong>Chave na Mão em Janeiro de 2027.</strong>
              </p>

              <div className="hero-bullets">
                <span className="hero-bullet">📍 Localização de Ouro</span>
                <span className="hero-bullet">⏳ Entrega em 10 Meses</span>
                <span className="hero-bullet">💡 Financeiramente Inteligente</span>
              </div>

              <a href="#formulario" className="btn btn--gold btn--lg" id="hero-cta">
                Solicitar Apresentação e Plantas
                <ArrowIcon />
              </a>

              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-45px', marginBottom: '-90px', pointerEvents: 'none' }}>
                <img src="/sign2.png" alt="Silvermont Signature" style={{ width: '100%', maxWidth: '220px', height: 'auto', display: 'block' }} loading="lazy" />
              </div>
            </RevealWrapper>

            <RevealWrapper delay={1}>
              <div className="hero-stats">
                {[
                  { val: 'T3', lbl: 'Tipologia' },
                  { val: '145 m²', lbl: 'Área Útil' },
                  { val: 'Jan 2027', lbl: 'Entrega' },
                  { val: '295k€', lbl: 'Preço Final' },
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

      {/* ══════════════════════════════════════════════════
          A MORADIA — CARACTERÍSTICAS
          ══════════════════════════════════════════════════ */}
      <section className="section section--mid" id="projeto">
        <div className="container">
          <RevealWrapper>
            <div className="section-header section-header--center">
              <p className="label">O Produto</p>
              <h2 className="title title--center">Arquitetura Contemporânea<br />e Inteligente.</h2>
              <p className="section-intro section-intro--center">
                Uma moradia pensada para proporcionar conforto e estética no dia a dia. Com uma distribuição inteligente e excelente exposição solar, desenhada à medida das necessidades de uma família moderna.
              </p>
            </div>
          </RevealWrapper>

          <div className="problem-grid">
            {[
              { num: '01', title: 'Distribuição Inteligente', body: 'Tipologia T3 com espaços bem proporcionados. Cada divisão foi planeada para maximizar o conforto, a organização e o aproveitamento do espaço.' },
              { num: '02', title: 'Exposição Solar', body: 'Luminosidade garantida. Orientação estudada e vãos generosos para assegurar luz natural em toda a habitação ao longo do dia.' },
              { num: '03', title: '100% Equipada', body: 'Pronta a habitar. Cozinha com eletrodomésticos de gama alta e casas de banho premium (loiças e torneiras incluídas).' },
              { num: '04', title: 'Acabamentos à sua Medida', body: 'Pavimentos, revestimentos e pinturas incluídos no orçamento, com a opção de personalização dos materiais interiores.' },
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
                <strong>O nosso compromisso:</strong> Chave na mão. O preço fechado reflete uma casa pronta a habitar, sem adjudicações extras ou surpresas no fim da obra.
              </p>
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          LOCALIZAÇÃO
          ══════════════════════════════════════════════════ */}
      <section className="section section--dark" id="localizacao">
        <div className="container">
          <RevealWrapper>
            <div className="section-header">
              <p className="label">A Localização</p>
              <h2 className="title">Tranquilidade com<br />o centro a 10 minutos.</h2>
              <p className="section-intro">
                O lote situa-se nas Quintãs (Rua da Capela Nova), inserido num loteamento organizado, seguro e de forte pendor familiar. O equilíbrio perfeito entre a pacatez residencial e a proximidade aos principais acessos.
              </p>
            </div>
          </RevealWrapper>

          <div className="benefits-grid">
            {[
              { tag: 'Distância', title: 'Centro de Aveiro', body: 'Apenas 8 a 10 minutos de carro da cidade, garantindo proximidade a comércio, escolas e transportes.' },
              { tag: 'Conveniência', title: 'Autoestrada a 2 min', body: 'Acesso quase imediato às vias rápidas, facilitando qualquer deslocação diária ou profissional.' },
              { tag: 'Ambiente', title: 'Zona Residencial', body: 'Vizinhança consolidada e pacífica, longe da confusão urbana mas dotada de boas infraestruturas locais.' },
              { tag: 'O Lote', title: 'Espaço Exterior Otimizado', body: 'Terreno de aproximadamente 194m² desenhado para ser prático e de baixa manutenção, complementando a área útil de habitação.' },
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

          <RevealWrapper delay={1}>
            <div style={{ marginTop: 48, borderRadius: 'var(--radius)', overflow: 'hidden' }}>
              <img src="/aveiro1.webp" alt="Visão de Aveiro" style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block' }} loading="lazy" />
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          O PROBLEMA DO MERCADO
          ══════════════════════════════════════════════════ */}
      <section className="section section--mid" id="contexto">
        <div className="container">
          <div className="lsf-layout">
            <RevealWrapper>
              <div>
                <p className="label">O Desafio Atual</p>
                <h2 className="title">O mercado imobiliário falhou o comprador.</h2>
                <p className="section-intro" style={{ marginBottom: 24 }}>
                  Comprar casa nova tornou-se um desafio. Preços inflexíveis, escassez de opções de qualidade e apartamentos banais a ultrapassarem os 355.000€ na região.
                </p>
                <div className="check-list">
                  {[
                    'Concorrência inflacionada entre compradores',
                    'Falta de transparência e prazos de entrega incertos',
                    'Casas usadas a pedir obras de atualização dispendiosas',
                    'Relação qualidade/preço completamente desequilibrada',
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
                <h3 style={{ color: 'var(--gold)' }}>A Nossa Solução</h3>
                <p>Criámos de raiz um projeto desenhado para oferecer qualidade de vida sem abdicar da inteligência financeira.</p>
                <div className="check-list">
                  <div className="check-item" style={{ color: 'var(--white)' }}>
                    <CheckSvg /> <span>Construção de ponta, completamente nova</span>
                  </div>
                  <div className="check-item" style={{ color: 'var(--white)' }}>
                    <CheckSvg /> <span>Entrada em fase inicial com vantagens reais</span>
                  </div>
                  <div className="check-item" style={{ color: 'var(--white)' }}>
                    <CheckSvg /> <span>Posicionamento de preço abaixo da média</span>
                  </div>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          O MODELO SILVERMONT E FASES
          ══════════════════════════════════════════════════ */}
      <section className="section section--dark" id="modelo">
        <div className="container">
          <RevealWrapper>
            <div className="section-header section-header--center">
              <p className="label">O Modelo Silvermont</p>
              <h2 className="title title--center">Autoconstrução Assistida.</h2>
              <p className="section-intro section-intro--center">
                A junção perfeita: as enormes vantagens fiscais e financeiras da autoconstrução, totalmente geridas por nós para garantir a simplicidade de um produto 'Chave na Mão'.
              </p>
            </div>
          </RevealWrapper>

          <div className="phases-layout">
            {[
              { step: '01', badge: 'Terreno', title: 'Proprietário no Dia 1', body: 'A escritura do lote (com projeto aprovado) passa imediatamente para si. Tem a segurança máxima sobre o investimento.' },
              { step: '02', badge: 'Financiamento', title: 'Construção por Tranches', body: 'O banco aprova a operação total e só liberta fundos à medida que a casa é construída. Controlo e transparência absolutos.' },
              { step: '03', badge: 'Chave na Mão', title: 'Gestão 100% Silvermont', body: 'Sem dores de cabeça. Coordenamos as equipas, tratamos das burocracias e entregamos-lhe a casa concluída.' },
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
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          INTELIGÊNCIA FINANCEIRA & BENEFÍCIOS
          ══════════════════════════════════════════════════ */}
      <section className="section section--mid" id="beneficios">
        <div className="container">
          <RevealWrapper>
            <div className="section-header section-header--center">
              <p className="label">Inteligência Financeira</p>
              <h2 className="title title--center">Razões que a matemática aprova.</h2>
              <p className="section-intro section-intro--center">
                Não maximizamos apenas a arquitetura. Maximizamos ativamente a eficácia do seu capital através de uma engenharia processual inovadora.
              </p>
            </div>
          </RevealWrapper>

          <div className="lsf-layout">
            <div className="lsf-features">
              {[
                { title: 'Otimização Fiscal Brutal', body: 'Enquanto a maioria paga IMT sobre o valor total do imóvel pronto (295k€), aqui apenas tributa o lote. Poupança superior a 10.000€ euros perfeitamente legais.' },
                { title: 'Sem Dupla Prestação', body: 'O pesadelo de pagar aluguer e crédito ao mesmo tempo desaparece. Paga apenas juros sobre a fração do dinheiro que for utilizada durante os curtos meses da obra.' },
                { title: 'Crédito Tratado Gratuitamente', body: 'Trabalhamos com parceiros intermediários registados no Banco de Portugal que analisam a sua viabilidade de forma transparente, rápida e isenta de custos.' },
                { title: 'Valorização Imediata', body: 'O mercado negoceia moradias novas desta dimensão muito acima dos 350.000€. Quem reserva na lista privada e escrituras a 295.000€ solidifica património instantaneamente.' },
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
              <div className="lsf-highlight-box" style={{ borderColor: 'rgba(239, 68, 68, 0.4)' }}>
                <h3 style={{ color: '#f87171' }}>Segurança Jurídica Total</h3>
                <p>Introduzimos a 'Cláusula de Confiança Total' no Contrato Promessa.</p>
                <div style={{ marginTop: 20, fontSize: '0.95rem', color: 'var(--text-light)', lineHeight: 1.7 }}>
                  Se assinar o contrato connosco e o banco rejeitar inesperadamente o financiamento essencial à sua operação — ou a avaliação divergir fatalmente — <strong>o sinal depositado ser-lhe-á devolvido na íntegra.</strong>
                  <br /><br />
                  <span style={{ color: 'var(--white)' }}>Sem penalizações obscuras. Sem riscos para a sua família. Risco zero para fechar negócio.</span>
                </div>
              </div>
            </RevealWrapper>
          </div>
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
              { tag: 'Prazo', title: 'Rapidez Previsível', body: 'Fugimos dos imponderáveis da mão-de-obra que bloqueia a maioria da construção pesada. A agilidade permite fechar chaves em Janeiro de 2027.' },
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
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          COMPARATIVO FINAL
          ══════════════════════════════════════════════════ */}
      <section className="section section--mid" id="comparativo">
        <div className="container">
          <RevealWrapper>
            <div className="section-header section-header--center">
              <p className="label">Posicionamento</p>
              <h2 className="title title--center">A transparência da Venda Direta.</h2>
              <p className="section-intro section-intro--center">
                Ignoramos a intermediação imobiliária para reinvestir os 10% nas suas poupanças. Como os números confirmam:
              </p>
            </div>
          </RevealWrapper>

          <div className="comparison-grid">
            <RevealWrapper delay={0}>
              <div className="comparison-card comparison-card--default">
                <span className="comparison-card-label">Mercado Normal (T2 Médio)</span>
                <h3>Apartamento T2 em Aveiro / Gafanhas</h3>
                <p>
                  Sujeito aos caprichos de mercado: cerca de 355.000€. Tributará o IMT global e o Imposto de Selo resultando num encargo extra enorme. Faltarão personalizações, sem cozinha totalmente assegurada, para espaço mais restrito.
                </p>
              </div>
            </RevealWrapper>
            <RevealWrapper delay={1}>
              <div className="comparison-card comparison-card--featured">
                <span className="comparison-card-label"> Silvermont Capital</span>
                <h3>Lista Privada nas Quintãs (T3)</h3>
                <p>
                  Fecho do processo aos <strong>295.000€</strong> redondos. O seu IMT foca-se cirurgicamente no valor restrito do lote inicial. Todo o equipamento é topo de gama e incluído na planta sem um centímetro cedido na flexibilidade.
                </p>
              </div>
            </RevealWrapper>
          </div>

          <RevealWrapper delay={1}>
            <div style={{ marginTop: 48, borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--border-dark)' }}>
              <img src="/precos1.png" alt="Comparativo de Preços na Região" style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block' }} loading="lazy" />
            </div>
          </RevealWrapper>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          QUEM SOMOS E CTA
          ══════════════════════════════════════════════════ */}
      <section className="section section--dark" id="autoridade">
        <div className="container">
          <div className="about-grid" style={{ gridTemplateColumns: '1fr', maxWidth: 640, margin: '48px auto 0' }}>
            <RevealWrapper delay={0}>
              <div className="about-card">
                <div style={{ background: '#fff', padding: '32px 24px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 'var(--radius) var(--radius) 0 0' }}>
                  <img src="/sign2.png" alt="Silvermont Capital" style={{ width: '100%', maxWidth: '300px', height: 'auto', display: 'block' }} loading="lazy" />
                </div>
                <div className="about-body" style={{ textAlign: 'center' }}>
                  <h3>Silvermont Capital</h3>
                  <p>A força administrativa que não tem medo das datas nem da complexidade logística. Transformando a promessa de obra na verdadeira definição de 'Chave na Mão'. Parceiros com mediação de crédito imobiliário à disposição, a custo zero.</p>
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FORMULÁRIO
          ══════════════════════════════════════════════════ */}
      <section className="section section--mid" id="formulario">
        <div className="container container--narrow">
          <RevealWrapper>
            <div className="section-header section-header--center">
              <p className="label">Reserva Antecipada</p>
              <h2 className="title title--center">Garanta a sua informação.</h2>
              <p className="section-intro section-intro--center">
                Apenas 3 unidades estão sob este teto de condições da Lista Privada.
                Preencha os dados e receberá todo o compêndio de plantas arquitetónicas e pormenores cruciais da obra.
              </p>
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
              <span className="footer-logo">Moradia <span>295K</span></span>
              <p className="footer-tagline">Lista Privada — Quintãs, 2026</p>
            </div>
            <p className="footer-disclaimer">
              Material indicativo sujeito a afinações em fase de desenvolvimento. Valores perspetivados de modo indicial e a proposta documentada pode carecer de verificação por meios legais. Não consubstancia a compra final em si sem prévia autorização das partes intervenientes.
            </p>
          </div>
          <div className="footer-bottom">
            <span>&copy; 2026 Silvermont Capital. Todos os direitos reservados.</span>
            <span>Venda Exclusiva.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
