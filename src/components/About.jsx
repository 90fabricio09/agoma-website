import '../styles/About.css';

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
      </svg>
    ),
    title: "Feito na Hora",
    description: "Todos os hambúrgueres são preparados frescos no momento do pedido"
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: "Ingredientes Premium",
    description: "Selecionamos os melhores fornecedores para garantir qualidade máxima"
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"/>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
      </svg>
    ),
    title: "Receitas Exclusivas",
    description: "Combinações únicas desenvolvidas por nossos chefs especializados"
  }
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__header">
            <h2 className="about__title">
              Sobre a Agoma
            </h2>
            <p className="about__subtitle">
              Nascemos da paixão por hambúrgueres autênticos. Nossa missão é criar 
              experiências gastronômicas memoráveis usando apenas os melhores ingredientes 
              e técnicas artesanais.
            </p>
          </div>

          <div className="about__grid">
            {features.map((feature, index) => (
              <div key={index} className="about__feature">
                <div className="about__feature-icon">
                  {feature.icon}
                </div>
                <h3 className="about__feature-title">
                  {feature.title}
                </h3>
                <p className="about__feature-description">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

