import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css'; 

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="glitch-wrapper">
        <h1 className="error-title">404</h1>
        <h2 className="error-subtitle">OBJETO NO IDENTIFICADO</h2>
        <p className="error-text">
          La ruta que buscas no ha sido forjada o ha sido eliminada del sistema.
          Regresa al taller antes de que te pierdas en el vacío.
        </p>
        
        <Link to="/" className="btn-buy" style={{display: 'inline-block', marginTop: '30px'}}>
          VOLVER AL INICIO
        </Link>
      </div>
    </div>
  );
};

export default NotFound;