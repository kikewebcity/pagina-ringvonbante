import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Usamos Link para cambiar de página
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logoring.jpg'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="main-header">
      <div className="header-container">
        
        {/* --- LOGO --- */}
        <div className="logo-container">
            {/* Al dar clic al logo, regresamos al Home */}
            <Link to="/" className="brand-name">RINGBONVANTE</Link>
        </div>

        {/* --- HAMBURGUESA (Móvil) --- */}
        <div className="mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>
        {/* --- NAVEGACIÓN (Escritorio y Menú Móvil) --- */}
        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            
            {/* Orden sugerido por importancia visual */}
            <li><Link to="/accesorios" onClick={toggleMenu}>Accesorios</Link></li>
            <li><Link to="/fustes" onClick={toggleMenu}>Fustes</Link></li> {/* ¡NUEVO! */}
            <li><Link to="/escultura" onClick={toggleMenu}>Escultura</Link></li>
            <li><Link to="/reciclados" onClick={toggleMenu}>Reciclados & Motos</Link></li>
            
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