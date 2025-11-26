import React from 'react';
import PageHero from '../components/PageHero'; 
import './Pages.css'; 

// --- IMÁGENES ---
// Asegúrate de que estos archivos existan en tu carpeta assets
import banner from '../assets/acce1.webp'; 
import img1 from '../assets/acce1.webp';
import img2 from '../assets/acce2.webp';
import img3 from '../assets/acce3.webp';
import img4 from '../assets/acce4.webp';
import img5 from '../assets/acce7.webp'; // Importamos acce7 como "img5"

const Accesorios = () => {
  
  // Datos de productos
  const productos = [
    // CORRECCIÓN: Todos deben tener la propiedad "img" (no img3, img5, etc.)
    { id: 1, nombre: "Anillo Cota de Luna", precio: "$2,500 MXN", img: img1 },
    { id: 2, nombre: "Colgante Venado", precio: "$3,200 MXN", img: img2 },
    
    // AQUÍ ESTABA EL ERROR 1: Cambié 'img3:' por 'img:'
    { id: 3, nombre: "Brazalete Industrial", precio: "$1,800 MXN", img: img3 },
    
    { id: 4, nombre: "Anillo Crudo", precio: "$2,100 MXN", img: img4 },
    
    // AQUÍ ESTABA EL ERROR 2: Usabas 'img7' que no existía. Usamos 'img5'
    { id: 5, nombre: "Collar Estructura", precio: "$4,500 MXN", img: img5 },
    
    { id: 6, nombre: "Aretes Fusión", precio: "$900 MXN", img: img3 }, // Reuso img3
  ];

  return (
    <div className="page-container">
      
      {/* 1. HERO SECTION */}
      <PageHero 
        title="ACCESORIOS" 
        subtitle="Plata de ley, texturas orgánicas y diseño industrial."
        bgImage={banner} 
      />

      {/* 2. INTRODUCCIÓN */}
      <section className="page-intro">
        <p>
          Cada pieza de Ringvonbante es única. No utilizamos moldes industriales masivos.
          Nuestras joyas son cicatrices de plata que cuentan una historia de resistencia y elegancia.
        </p>
      </section>

      {/* 3. CATÁLOGO (GRILLA) */}
      <main className="catalog-grid">
        {productos.map((item) => (
          <div key={item.id} className="product-card">
            <div className="card-image">
              <img src={item.img} alt={item.nombre} />
            </div>
            <div className="card-info">
              <h3>{item.nombre}</h3>
              <span className="price">{item.precio}</span>
              <button className="btn-buy">VER DETALLE</button>
            </div>
          </div>
        ))}
      </main>

    </div>
  );
};

export default Accesorios;