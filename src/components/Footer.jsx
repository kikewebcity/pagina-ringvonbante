import React from 'react';
// IMPORTA TU LOGO
import logoImg from '../assets/logoring.jpg'; 
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        {/* 1. COLUMNA LOGO Y DESCRIPCIÓN */}
        <div className="footer-brand">
          <img src={logoImg} alt="Ringvonbante" className="footer-logo" />
          <p>El espíritu indomable hecho joya. Diseño industrial aplicado al arte personal.</p>
        </div>

        {/* 2. COLUMNA ENLACES RÁPIDOS */}
        <div className="footer-links">
          <h4>EXPLORAR</h4>
          <ul>
            <li><a href="/accesorios">Accesorios</a></li>
            <li><a href="/motos">Motos</a></li>
            <li><a href="/escultura">Escultura</a></li>
            <li><a href="/reciclados">Reciclados</a></li>
          </ul>
        </div>

        {/* 3. COLUMNA CONTACTO Y REDES */}
        <div className="footer-contact">
          <h4>CONTACTO</h4>
          <a href="https://wa.me/5215512345678" target="_blank" className="btn-contact-footer">
            CONTACTAR AL AUTOR
          </a>
          
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank"><FaFacebookF /></a>
            <a href="https://tiktok.com" target="_blank"><FaTiktok /></a>
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