import { useState } from 'react';
import '../styles/Navbar.css';

const menuItems = [
  { 
    label: "Início", 
    href: "#hero",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    )
  },
  { 
    label: "Cardápio", 
    href: "#menu",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"/>
        <path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"/>
        <path d="m2.1 21.8 6.4-6.3"/>
        <path d="m19 5-7 7"/>
      </svg>
    )
  },
  { 
    label: "Sobre Nós", 
    href: "#about",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="16" x2="12" y2="12"/>
        <line x1="12" y1="8" x2="12.01" y2="8"/>
      </svg>
    )
  },
  { 
    label: "Avaliações", 
    href: "#reviews",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    )
  },
  { 
    label: "Contato", 
    href: "#contact",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    )
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Botão Menu Hamburger Flutuante */}
      <button
        onClick={toggleMenu}
        className="navbar__toggle"
        aria-label="Menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="12" x2="20" y2="12"/>
          <line x1="4" y1="6" x2="20" y2="6"/>
          <line x1="4" y1="18" x2="20" y2="18"/>
        </svg>
      </button>

      {/* Overlay escuro */}
      {isOpen && (
        <div
          className="navbar__overlay"
          onClick={closeMenu}
        />
      )}

      {/* Mini Sidebar */}
      <div className={`navbar__sidebar ${isOpen ? 'navbar__sidebar--open' : ''}`}>
        <div className="navbar__sidebar-content">
          {/* Header da sidebar */}
          <div className="navbar__sidebar-header">
            <h2 className="navbar__sidebar-title">Agoma.</h2>
            <button
              onClick={closeMenu}
              className="navbar__close"
              aria-label="Fechar menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          {/* Links de navegação */}
          <nav className="navbar__nav">
            <ul className="navbar__nav-list">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="navbar__nav-link"
                  >
                    <span className="navbar__nav-icon">
                      {item.icon}
                    </span>
                    <span className="navbar__nav-label">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer da sidebar */}
          <div className="navbar__sidebar-footer">
            <a
              href="https://www.ifood.com.br/delivery/sao-paulo-sp/agoma---street-food-cambuci/22e35849-fa00-4cbb-b379-924490e7d564?utm_medium=share"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="navbar__ifood-button"
            >
              Pedir no iFood
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

