import '../styles/Footer.css';
import logo from '../assets/Logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__content">
            <div className="footer__brand">
              <img src={logo} alt="Agoma" className="footer__logo" />
              <p className="footer__brand-text">
                Hambúrgueres artesanais que vão além do sabor. 
                Uma experiência gastronômica única.
              </p>
            </div>

            <div className="footer__social">
              <h4 className="footer__social-title">Encontre-nos</h4>
              <div className="footer__social-links">
                <a 
                  href="https://instagram.com/agoma.sp" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="Instagram"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a 
                  href="https://maps.app.goo.gl/M5NjKCeLxMHcxJdt8" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label="Google Maps"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <p>&copy; 2025 Agoma. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

