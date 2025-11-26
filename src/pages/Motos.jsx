import React from 'react';
import PageHero from '../components/PageHero';
import './Pages.css'; // Reusa los mismos estilos

// Imágenes
import bannerMoto from '../assets/bannermoto.webp'; // Asegúrate de tener este banner
import fotoMoto1 from '../assets/motog.jpg'; 
import fotoMoto2 from '../assets/tanque.webp';

const Motos = () => {
  const motos = [
    { id: 1, nombre: "Modelo Café Racer 01", precio: "$85,000 MXN", img: fotoMoto1 },
    { id: 2, nombre: "E-Chopper Custom", precio: "$120,000 MXN", img: fotoMoto2 },
    { id: 3, nombre: "Proyecto Scrambler", precio: "Consultar", img: fotoMoto1 },
  ];

  return (
    <div className="page-container">
      <PageHero 
        title="MOTOS ELÉCTRICAS" 
        subtitle="Ingeniería silenciosa, estética ruidosa."
        bgImage={bannerMoto} 
      />

      <section className="page-intro">
        <p>
          Fusionamos chasis clásicos recuperados con tecnología de litio de última generación. 
          Cada moto es una pieza de arte funcional, única en el mundo.
        </p>
      </section>

      <main className="catalog-grid">
        {motos.map((item) => (
          <div key={item.id} className="product-card">
            <div className="card-image">
              <img src={item.img} alt={item.nombre} />
            </div>
            <div className="card-info">
              <h3>{item.nombre}</h3>
              <span className="price">{item.precio}</span>
              <button className="btn-buy">VER DETALLES</button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Motos;