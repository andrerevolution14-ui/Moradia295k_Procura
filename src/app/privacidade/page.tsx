export default function PrivacidadePage() {
  return (
    <>
      <nav className="nav" aria-label="Navegação principal">
        <div className="container nav-container">
          <a href="/" className="nav-logo" aria-label="Voltar à página inicial">
            Moradia <span>T3 Quintãs</span>
          </a>
          <div className="nav-actions">
            <a href="/" className="btn btn--gold btn--sm">Voltar ao Início</a>
          </div>
        </div>
      </nav>

      <section className="section" style={{ paddingTop: '160px', paddingBottom: '80px', minHeight: '80vh' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Política de Privacidade</h1>
          <div style={{ lineHeight: 1.8, color: 'var(--text-light)' }}>
            <p style={{ marginBottom: '16px' }}><strong>Última atualização:</strong> 20 de Maio de 2026</p>
            <p style={{ marginBottom: '16px' }}>
              A Silvermont Capital compromete-se a proteger e respeitar a sua privacidade. Esta Política de Privacidade explica como recolhemos, utilizamos, partilhamos e protegemos os seus dados pessoais quando utiliza o nosso website e os nossos serviços.
            </p>
            
            <h2 style={{ fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px', color: 'var(--text)' }}>1. Informação que Recolhemos</h2>
            <p style={{ marginBottom: '16px' }}>
              Podemos recolher e processar os seguintes dados sobre si:
              <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
                <li>Informações fornecidas através do preenchimento de formulários no nosso site (ex: nome, número de telefone).</li>
                <li>Detalhes das suas visitas ao nosso site e dos recursos que acede.</li>
              </ul>
            </p>

            <h2 style={{ fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px', color: 'var(--text)' }}>2. Como Utilizamos a sua Informação</h2>
            <p style={{ marginBottom: '16px' }}>
              Utilizamos a informação detida sobre si das seguintes formas:
              <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
                <li>Para lhe fornecer informações, produtos ou serviços que nos solicite.</li>
                <li>Para o contactar a propósito de agendamentos ou do seu interesse no projeto Moradia T3 Quintãs.</li>
                <li>Para garantir que o conteúdo do nosso site é apresentado da forma mais eficaz para si e para o seu computador.</li>
              </ul>
            </p>

            <h2 style={{ fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px', color: 'var(--text)' }}>3. Partilha de Dados</h2>
            <p style={{ marginBottom: '16px' }}>
              Não vendemos, alugamos ou trocamos os seus dados pessoais com terceiros. Podemos partilhar a sua informação com prestadores de serviços de confiança que nos auxiliam a operar o nosso website ou a conduzir o nosso negócio, desde que essas partes concordem em manter esta informação confidencial.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px', color: 'var(--text)' }}>4. Segurança dos seus Dados</h2>
            <p style={{ marginBottom: '16px' }}>
              Implementamos medidas de segurança apropriadas para evitar que os seus dados pessoais sejam acidentalmente perdidos, usados ou acedidos de forma não autorizada, alterados ou divulgados.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px', color: 'var(--text)' }}>5. Os seus Direitos</h2>
            <p style={{ marginBottom: '16px' }}>
              Nos termos da lei aplicável (incluindo o RGPD), tem o direito de solicitar o acesso, retificação, apagamento, limitação do tratamento, portabilidade dos seus dados pessoais, e o direito de se opor ao tratamento. Para exercer estes direitos, por favor, contacte-nos diretamente.
            </p>
          </div>
        </div>
      </section>

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
