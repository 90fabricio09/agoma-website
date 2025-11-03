import '../styles/Index.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import About from '../components/About';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import ifoodLogo from '../assets/ifood-43.svg';

const Index = () => {
  return (
    <div className="page">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="menu">
        <Menu />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="reviews">
        <Reviews />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      
      {/* Botão Voltar ao Topo */}
      <ScrollToTop />
      
      {/* Botão fixo do iFood */}
      <a
        href="https://www.ifood.com.br/delivery/sao-paulo-sp/agoma---street-food-cambuci/22e35849-fa00-4cbb-b379-924490e7d564?utm_medium=share"
        target="_blank"
        rel="noopener noreferrer"
        className="ifood-button"
        aria-label="Pedir no iFood"
      >
        <img 
          src={ifoodLogo} 
          alt="iFood" 
          className="ifood-button__logo"
        />
      </a>
    </div>
  );
};

export default Index;

