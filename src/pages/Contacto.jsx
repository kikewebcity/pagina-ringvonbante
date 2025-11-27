import React, { useState } from 'react';
import PageHero from '../components/PageHero'; 
import { FaWhatsapp, FaInstagram, FaFacebookF, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Pages.css'; 

// Banner para el encabezado (Reusa uno que tengas o sube uno de "taller")
import bannerContact from '../assets/bannerescultura.webp'; 

const Contacto = () => {
  
  // Estado para guardar lo que escribe el usuario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Función que envía el formulario a WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();
    const myNumber = "5215512345678"; // TU NÚMERO
    
    // Construimos el mensaje
    const text = `
*NUEVO CONTACTO WEB*
-----------------------
👤 *Nombre:* ${formData.nombre}
📧 *Email:* ${formData.email}
📝 *Asunto:* ${formData.asunto}
-----------------------
💬 *Mensaje:* ${formData.mensaje}
    `;

    const url = `https://wa.me/${myNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="page-container">
      
      <PageHero 
        title="CONTACTO" 
        subtitle="Inicia tu proyecto. Hablemos de metal y arte."
        bgImage={bannerContact} 
      />

      <div className="contact-wrapper">
        
        {/* COLUMNA 1: INFORMACIÓN */}
        <div className="contact-info-col">
          <h2>VISITA EL TALLER</h2>
          <p className="contact-desc">
            Trabajamos bajo cita previa para ofrecerte una atención personalizada. 
            Cada pieza requiere tiempo y dedicación. Si tienes una idea, nosotros tenemos el fuego.
          </p>

          <div className="info-item">
            <FaMapMarkerAltClass className="icon-gold" />
            <div>
              <h4>UBICACIÓN</h4>
              <p>Ciudad de México / Texcoco</p>
            </div>
          </div>

          <div className="info-item">
            <FaEnvelope className="icon-gold" />
            <div>
              <h4>CORREO</h4>
              <p>contacto@ringvonbante.com</p>
            </div>
          </div>

          <div className="info-item">
            <FaWhatsapp className="icon-gold" />
            <div>
              <h4>WHATSAPP</h4>
              <p>+52 1 55 1234 5678</p>
            </div>
          </div>

          <div className="social-row">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          </div>
        </div>

        {/* COLUMNA 2: FORMULARIO */}
        <div className="contact-form-col">
          <form onSubmit={handleSubmit} className="cyber-form">
            
            <div className="form-group">
              <label>NOMBRE COMPLETO</label>
              <input 
                type="text" 
                name="nombre" 
                required 
                onChange={handleChange}
                placeholder="Tu nombre aquí"
              />
            </div>

            <div className="form-group">
              <label>CORREO ELECTRÓNICO</label>
              <input 
                type="email" 
                name="email" 
                required 
                onChange={handleChange}
                placeholder="ejemplo@correo.com"
              />
            </div>

            <div className="form-group">
              <label>ASUNTO / INTERÉS</label>
              <select name="asunto" onChange={handleChange} required>
                <option value="">Selecciona una opción...</option>
                <option value="Cotización Joyería">Cotización Joyería</option>
                <option value="Proyecto Moto Custom">Proyecto Moto Custom</option>
                <option value="Escultura Monumental">Escultura Monumental</option>
                <option value="Colaboración">Colaboración / Otro</option>
              </select>
            </div>

            <div className="form-group">
              <label>MENSAJE</label>
              <textarea 
                name="mensaje" 
                rows="5" 
                required 
                onChange={handleChange}
                placeholder="Cuéntanos sobre tu idea..."
              ></textarea>
            </div>

            <button type="submit" className="btn-send">ENVIAR MENSAJE</button>

          </form>
        </div>

      </div>
    </div>
  );
};

// Componente auxiliar pequeño para icono
const FaMapMarkerAltClass = ({className}) => <FaMapMarkerAlt className={className} />;

export default Contacto;