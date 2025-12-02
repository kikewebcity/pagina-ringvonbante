import React from 'react';
import { Link } from 'react-router-dom'; // <--- 1. IMPORTANTE: Usamos Link para navegar
import logoImg from '../assets/logoring.jpg'; 
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  
  // Tu número para el botón de contacto
  const myNumber = "5215512345678"; 

  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        {/* 1. COLUMNA LOGO */}
        <div className="footer-brand">
          <Link to="/"> {/* El logo te lleva al Home */}
            <img src={logoImg} alt="Ringvonbante" className="footer-logo" />
          </Link>
          <p>El espíritu indomable hecho joya. Diseño industrial aplicado al arte personal.</p>
        </div>

        {/* 2. COLUMNA ENLACES (AQUÍ ESTÁN LOS VÍNCULOS CORREGIDOS) */}
        <div className="footer-links">
          <h4>EXPLORAR</h4>
          <ul>
            {/* Usamos el componente Link con la ruta correcta */}
            <li><Link to="/accesorios">Accesorios</Link></li>
            <li><Link to="/motos">Motos Eléctricas</Link></li>
            <li><Link to="/fustes">Fustes & Estructura</Link></li>
            <li><Link to="/escultura">Escultura</Link></li>
            <li><Link to="/reciclados">Vida Industrial</Link></li>
          </ul>
        </div>

        {/* 3. COLUMNA CONTACTO */}
        <div className="footer-contact">
          <h4>CONTACTO</h4>
          
          {/* Botón directo a WhatsApp */}
          <a 
            href={`https://wa.me/${myNumber}?text=Hola,%20quisiera%20más%20información`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-contact-footer"
          >
            CONTACTAR AL AUTOR
          </a>
          
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer"><FaTiktok /></a>
          </div>
        </div>

      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 RINGVONBANTE. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;