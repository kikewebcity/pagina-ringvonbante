import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Asegúrate de tener react-icons instalado

const WhatsAppBtn = () => {
  return (
    <a 
      href="https://wa.me/5215512345678?text=Hola,%20me%20interesa%20una%20pieza%20de%20Ringvonbante" 
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <FaWhatsapp size={35} />
    </a>
  );
};

// Estilos integrados para rápido uso
const styles = `
.whatsapp-float {
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 30px;
    right: 30px;
    background-color: #25d366;
    color: #FFF;
    border-radius: 50px;
    text-align: center;
    font-size: 30px;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.5);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s;
}
.whatsapp-float:hover {
    transform: scale(1.1);
    background-color: #1ebc57;
}
`;

// Inyectamos estilo al documento
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default WhatsAppBtn;