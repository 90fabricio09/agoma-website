import '../styles/NotFound.css';
import { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    // Scroll para o topo quando a página carregar
    window.scrollTo(0, 0);
  }, []);

  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="notfound">
      <div className="notfound__container">
        <div className="notfound__content">
          <div className="notfound__animation">
            <div className="notfound__burger">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <circle cx="60" cy="60" r="50" fill="var(--color-accent)" opacity="0.1"/>
                <path d="M35 45C35 42 37 40 40 40H80C83 40 85 42 85 45V47H35V45Z" fill="var(--color-accent)"/>
                <rect x="30" y="47" width="60" height="8" rx="2" fill="var(--color-primary)"/>
                <rect x="32" y="55" width="56" height="3" rx="1.5" fill="#FFB84D"/>
                <rect x="33" y="58" width="54" height="10" rx="2" fill="var(--color-accent)"/>
                <rect x="34" y="68" width="52" height="3" rx="1.5" fill="#E8F5E9"/>
                <rect x="30" y="71" width="60" height="8" rx="4" fill="var(--color-primary)"/>
              </svg>
            </div>
          </div>

          <h1 className="notfound__title">
            404
          </h1>
          
          <h2 className="notfound__subtitle">
            Ops! Página não encontrada
          </h2>
          
          <p className="notfound__description">
            Parece que você se perdeu no caminho até o melhor hambúrguer da cidade. 
            A página que você procura não existe ou foi movida.
          </p>

          <div className="notfound__actions">
            <button 
              onClick={handleGoHome}
              className="notfound__button notfound__button--primary"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              Voltar para o Início
            </button>
            
            <a 
              href="https://www.ifood.com.br/delivery/sao-paulo-sp/agoma---street-food-cambuci/22e35849-fa00-4cbb-b379-924490e7d564?utm_medium=share"
              target="_blank"
              rel="noopener noreferrer"
              className="notfound__button notfound__button--secondary"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"/>
                <path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"/>
                <path d="m2.1 21.8 6.4-6.3"/>
                <path d="m19 5-7 7"/>
              </svg>
              Fazer um Pedido
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

