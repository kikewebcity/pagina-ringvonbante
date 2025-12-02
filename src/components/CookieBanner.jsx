import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Revisamos si el usuario ya aceptó antes
    const accepted = localStorage.getItem('cookiesAccepted');
    if (!accepted) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    // Guardamos que ya aceptó para no volver a mostrarlo
    localStorage.setItem('cookiesAccepted', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div style={styles.banner}>
      <p style={styles.text}>
        Usamos cookies para mejorar tu experiencia en <strong>Ringvonbante</strong>. 
        Al continuar navegando, aceptas nuestra política.
      </p>
      <button onClick={handleAccept} style={styles.button}>
        ACEPTAR
      </button>
    </div>
  );
};

// Estilos rápidos en línea (o pásalos al CSS si prefieres)
const styles = {
  banner: {
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
    backgroundColor: 'rgba(10, 10, 10, 0.95)',
    borderTop: '1px solid #333',
    padding: '15px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    zIndex: '2000',
    flexWrap: 'wrap',
  },
  text: {
    color: '#ccc',
    fontSize: '0.9rem',
    margin: 0,
    fontFamily: 'sans-serif',
  },
  button: {
    backgroundColor: '#daa520',
    color: '#000',
    border: 'none',
    padding: '8px 20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontFamily: 'Impact, sans-serif',
    letterSpacing: '1px',
  }
};

export default CookieBanner;