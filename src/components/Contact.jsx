import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__wrapper">
          <div className="contact__header">
            <h2 className="contact__title">
              Visite-nos
            </h2>
            <p className="contact__subtitle">
              Venha experimentar o melhor hambúrguer da região
            </p>
          </div>

          <div className="contact__grid">
            <div className="contact__card">
              <div className="contact__icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3 className="contact__card-title">
                Endereço
              </h3>
              <p className="contact__card-text">
                Rua Botupuca, 140<br />
                Cambuci, São Paulo - SP,<br />
                01536-010
              </p>
            </div>

            <div className="contact__card">
              <div className="contact__icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3 className="contact__card-title">
                Telefone
              </h3>
              <p className="contact__card-text">
                (11) 94352-1512<br />
                iFood disponível<br />
                para pedidos
              </p>
            </div>

            <div className="contact__card">
              <div className="contact__icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3 className="contact__card-title">
                Horário
              </h3>
              <p className="contact__card-text">
                Seg-Ter: 18h-22h<br />
                Qua-Sex: 12h-23h<br />
                Sáb-Dom: 18h-23h
              </p>
            </div>
          </div>

          <div className="contact__footer">
            <a 
              href="https://www.ifood.com.br/delivery/sao-paulo-sp/agoma---street-food-cambuci/22e35849-fa00-4cbb-b379-924490e7d564?utm_medium=share" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact__button"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              Fazer Pedido no iFood
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

