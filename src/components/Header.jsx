// src/components/Header.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Iconos de menú y cerrar
import logo from '/home/kikewebcity/pagina-ringvonbante/src/assets/logo-ringvonbante.png'; // Asegúrate de tener tu logo o usa texto

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="main-header">
      <div className="header-container">
        
        {/* --- LOGO (Visible siempre) --- */}
        <div className="logo-container">
            {/* Si no tienes la imagen del logo aún, usa este h1: */}
            <Link to="/" className="brand-name">RINGBONVANTE</Link>
            
            {/* Si usas imagen, descomenta esto y comenta la línea de arriba:
            <Link to="/">
              <img src={logo} alt="Ringbonvante Logo" className="brand-logo" />
            </Link> 
            */}
        </div>

        {/* --- BOTÓN HAMBURGUESA (Solo Móvil) --- */}
        <div className="mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>

        {/* --- NAVEGACIÓN (Escritorio y Menú Móvil desplegado) --- */}
        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/accesorios" onClick={toggleMenu}>Accesorios</Link></li>
            <li><Link to="/reciclados" onClick={toggleMenu}>Reciclados</Link></li>
            <li><Link to="/escultura" onClick={toggleMenu}>Escultura</Link></li>
            <li><Link to="/motos" onClick={toggleMenu}>Motos Eléctricas</Link></li>
            <li><Link to="/cursos" onClick={toggleMenu}>Cursos</Link></li>
            <li><Link to="/bitacora" onClick={toggleMenu} className="blog-link">Bitácora</Link></li>
            <li><Link to="/contacto" onClick={toggleMenu} className="contact-btn">Contacto</Link></li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;