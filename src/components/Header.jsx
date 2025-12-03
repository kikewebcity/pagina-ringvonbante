import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; 
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa'; 
import logoNav from '../assets/logoblanco.png'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => { setIsOpen(!isOpen); };
  const closeMenu = () => { setIsOpen(false); };

  return (
    <header className="main-header">
      <div className="header-container">
        
        {/* --- LOGO --- */}
        <div className="logo-container">
            <Link to="/" className="brand-logo-link" onClick={closeMenu}>
              <img src={logoNav} alt="Ringvonbante" className="nav-logo-img" />
            </Link>
        </div>

        {/* --- HAMBURGUESA (Móvil) --- */}
        <div className="mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>

        {/* --- NAVEGACIÓN --- */}
        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            
            <li><Link to="/accesorios" onClick={closeMenu}>Accesorios</Link></li>
            <li><Link to="/escultura" onClick={closeMenu}>Escultura</Link></li>
            <li><Link to="/fustes" onClick={closeMenu}>Fustes</Link></li>
            
            {/* AQUÍ ESTÁ EL CAMBIO: Fusionamos el nombre y quitamos el de Motos */}
            <li><Link to="/reciclados" onClick={closeMenu}>Reciclados & Motos</Link></li>
            
            <li><Link to="/cursos" onClick={closeMenu}>Cursos</Link></li>
            <li><Link to="/bitacora" onClick={closeMenu} className="blog-link">Bitácora</Link></li>
            <li><Link to="/contacto" onClick={closeMenu} className="contact-btn">Contacto</Link></li>
          </ul>
          
          <div className="mobile-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer"><FaTiktok /></a>
          </div>
        </nav>

      </div>
    </header>
  );
};

export default Header;