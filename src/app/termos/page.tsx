export default function TermosPage() {
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
          <h1 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Termos e Condições</h1>
          <div style={{ lineHeight: 1.8, color: 'var(--text-light)' }}>
            <p style={{ marginBottom: '16px' }}><strong>Última atualização:</strong> 20 de Maio de 2026</p>
            <p style={{ marginBottom: '16px' }}>
              Bem-vindo ao website da Moradia T3 Quintãs, gerido pela Silvermont Capital. Ao aceder e utilizar este website, concorda em cumprir e ficar vinculado aos seguintes termos e condições. Se não concordar com alguma parte destes termos, por favor, não utilize o nosso website.
            </p>
            
            <h2 style={{ fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px', color: 'var(--text)' }}>1. Informação do Projeto</h2>
            <p style={{ marginBottom: '16px' }}>
              Todas as informações, imagens, plantas e renderizações 3D apresentadas neste website são de caráter puramente ilustrativo e indicativo. Podem ocorrer alterações durante a fase de licenciamento, desenvolvimento e construção. As imagens não têm valor contratual.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px', color: 'var(--text)' }}>2. Propriedade Intelectual</h2>
            <p style={{ marginBottom: '16px' }}>
              Todo o conteúdo deste website (textos, gráficos, logótipos, ícones, imagens, clips de áudio, downloads digitais e compilações de dados) é propriedade da Silvermont Capital ou dos seus fornecedores de conteúdo e está protegido pelas leis de direitos de autor portuguesas e internacionais.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px', color: 'var(--text)' }}>3. Limitação de Responsabilidade</h2>
            <p style={{ marginBottom: '16px' }}>
              A Silvermont Capital não será responsável por quaisquer danos diretos, indiretos, incidentais, consequenciais ou punitivos resultantes do acesso, uso ou incapacidade de usar este website, ou por quaisquer erros ou omissões no seu conteúdo.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px', color: 'var(--text)' }}>4. Alterações aos Termos</h2>
            <p style={{ marginBottom: '16px' }}>
              A Silvermont Capital reserva-se o direito de modificar estes Termos e Condições a qualquer momento. Quaisquer alterações entrarão em vigor imediatamente após a sua publicação no website.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px', color: 'var(--text)' }}>5. Lei Aplicável</h2>
            <p style={{ marginBottom: '16px' }}>
              Estes termos são regidos e interpretados de acordo com a lei portuguesa. Qualquer litígio relacionado com a utilização deste website será submetido à jurisdição exclusiva dos tribunais portugueses.
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
