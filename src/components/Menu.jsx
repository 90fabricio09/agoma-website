import '../styles/Menu.css';
import classicBurger from '../assets/cheddar.avif';
import baconBurger from '../assets/caprese.avif';
import veggieBurger from '../assets/gallus.avif';
import cardapioPdf from '../assets/cardapio.pdf';

const menuItems = [
  {
    name: "Cheddar D`agoma",
    description: "Arrestável cheddar D`agoma com Pão, Blend D'Agoma, cheddar e cebola crispy ou farofa de bacon.",
    price: "R$ 30,00",
    image: classicBurger,
  },
  {
    name: "Ciabatta Caprese",
    description: "Delicioso Pão, molho de tomate artesanal, queijo gratinado, rúcula, tomate e mayo manjericão.",
    price: "R$ 24,00",
    image: baconBurger,
  },
  {
    name: "Wrap Gallus",
    description: "Pão folha, alface, tomate, mayo manjericão, requeijão cremoso e o Nosso Frango.",
    price: "R$ 26,00",
    image: veggieBurger,
  },
];

const Menu = () => {
  return (
    <section id="menu" className="menu">
      <div className="container">
        <div className="menu__header">
          <h2 className="menu__title">
            Nosso Cardápio
          </h2>
          <p className="menu__subtitle">
            Cada hambúrguer é cuidadosamente preparado com ingredientes selecionados
          </p>
        </div>

        <div className="menu__grid">
          {menuItems.map((item, index) => (
            <div key={index} className="menu__card">
              <div className="menu__card-image-wrapper">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="menu__card-image"
                />
              </div>
              <div className="menu__card-content">
                <div className="menu__card-header">
                  <h3 className="menu__card-name">
                    {item.name}
                  </h3>
                  <span className="menu__card-price">
                    {item.price}
                  </span>
                </div>
                <p className="menu__card-description">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="menu__footer">
          <a 
            href={cardapioPdf} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="menu__button"
          >
            <svg className="menu__button-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            Ver Cardápio Completo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;

