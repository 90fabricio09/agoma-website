import '../styles/Hero.css';
import heroImage from '../assets/IMG_1686.jpg';
import cardapioPdf from '../assets/cardapio.pdf';
import logo from '../assets/Logo.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__background" style={{
        backgroundImage: `url(${heroImage})`
      }}>
        <div className="hero__overlay"></div>
      </div>
      
      <div className="container hero__content">
        <div className="hero__text-wrapper">
          <div className="hero__logo-wrapper animate-slide-in">
            <img src={logo} alt="Agoma" className="hero__logo" />
          </div>
          <p className="hero__subtitle">
            Hambúrgueres artesanais feitos com paixão e ingredientes premium. 
            Cada mordida é uma experiência única.
          </p>
          <div className="hero__buttons">
            <a 
              href={cardapioPdf} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero__button hero__button--primary"
            >
              Ver Cardápio
              <svg className="hero__button-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a
              href="https://www.ifood.com.br/delivery/sao-paulo-sp/agoma---street-food-cambuci/22e35849-fa00-4cbb-b379-924490e7d564?utm_medium=share"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__button hero__button--secondary"
            >
              <svg className="hero__button-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              Faça seu Pedido no iFood
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

