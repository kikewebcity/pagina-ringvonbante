import React from 'react';
import PageHero from '../components/PageHero'; 
import './Pages.css'; 

// ==========================================
// 1. IMPORTACIÓN DE IMÁGENES
// ==========================================

// Banner
import banner from '../assets/banneranillo.webp'; 

// Productos (1 al 15)
import img1 from '../assets/acce1.webp';
import img2 from '../assets/acce2.webp';
import img3 from '../assets/acce3.webp';
import img4 from '../assets/acce4.webp';
import img5 from '../assets/acce5.webp';
import img6 from '../assets/acce6.webp';
import img7 from '../assets/acce7.webp';
import img8 from '../assets/acce8.webp';
import img9 from '../assets/acce9.webp';
import img10 from '../assets/acce10.webp';
import img11 from '../assets/acce11.webp';
import img12 from '../assets/acce12.webp';
import img13 from '../assets/acce13.webp';
import img14 from '../assets/acce14.webp';
import img15 from '../assets/acce15.webp';

// FOTOS DE PROCESO (Intercaladas)
// Usa fotos de tu taller, fuego, herramientas o bocetos.
import imgProceso1 from '../assets/videovenado.mp4'; // Puedes usar video o foto
import imgProceso2 from '../assets/reciclado1.webp'; // Ejemplo de foto artística

const Accesorios = () => {
  
  const myNumber = "5215512345678"; 

  const handleBuy = (productName) => {
    const message = `Hola Ringvonbante, estoy interesado en: ${productName}.`;
    const url = `https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // ==========================================
  // 2. LISTA HÍBRIDA (PRODUCTOS + PROCESO)
  // ==========================================
  // type: 'product' -> Muestra precio y botón
  // type: 'process' -> Muestra foto completa y frase
  
  const itemsGaleria = [
    // --- FILA 1 ---
    { id: 1, type: 'product', nombre: "Anillo Cota de Luna", precio: "$2,500 MXN", img: img1 },
    { id: 2, type: 'product', nombre: "Colgante Venado", precio: "$3,200 MXN", img: img2 },
    { id: 3, type: 'product', nombre: "Brazalete Industrial", precio: "$1,800 MXN", img: img3 },

    // --- FILA 2 (Con Proceso insertado) ---
    { id: 100, type: 'process', text: "FUEGO Y METAL: EL ORIGEN.", img: imgProceso1, isVideo: true }, // Ejemplo con video
    { id: 4, type: 'product', nombre: "Anillo Crudo", precio: "$2,100 MXN", img: img4 },
    { id: 5, type: 'product', nombre: "Collar Estructura", precio: "$4,500 MXN", img: img5 },
    
    // --- FILA 3 ---
    { id: 6, type: 'product', nombre: "Aretes Fusión", precio: "$900 MXN", img: img6 },
    { id: 7, type: 'product', nombre: "Anillo Negro Mate", precio: "$2,300 MXN", img: img7 },
    { id: 8, type: 'product', nombre: "Dije Mecánico", precio: "$1,500 MXN", img: img8 },

    // --- FILA 4 (Con Proceso insertado) ---
    { id: 9, type: 'product', nombre: "Pulsera Eslabones", precio: "$2,800 MXN", img: img9 },
    { id: 101, type: 'process', text: "NO HAY MOLDES. SOLO MÚSCULO Y PLATA.", img: imgProceso2, isVideo: false },
    { id: 10, type: 'product', nombre: "Anillo Solitario", precio: "$3,100 MXN", img: img10 },

    // --- RESTO DE PRODUCTOS ---
    { id: 11, type: 'product', nombre: "Collar Minimalista", precio: "$1,200 MXN", img: img11 },
    { id: 12, type: 'product', nombre: "Brazalete Óxido", precio: "$1,950 MXN", img: img12 },
    { id: 13, type: 'product', nombre: "Aretes Geométricos", precio: "$850 MXN", img: img13 },
    { id: 14, type: 'product', nombre: "Anillo Doble", precio: "$2,600 MXN", img: img14 },
    { id: 15, type: 'product', nombre: "Colgante Raw", precio: "$3,400 MXN", img: img15 },
  ];

  return (
    <div className="page-container">
      
      <PageHero 
        title="ACCESORIOS" 
        subtitle="Plata de ley, texturas orgánicas y diseño industrial."
        bgImage={banner} 
      />

      <section className="page-intro">
        <p>
          Cada pieza de Ringvonbante es única. No utilizamos moldes industriales masivos.
          Nuestras joyas son cicatrices de plata que cuentan una historia de resistencia y elegancia.
        </p>
      </section>

      <main className="catalog-grid">
        {itemsGaleria.map((item) => {
          
          // --- RENDERIZADO CONDICIONAL ---

          // CASO A: TARJETA DE PROCESO
          if (item.type === 'process') {
            return (
              <div key={item.id} className="process-card">
                {item.isVideo ? (
                   <video src={item.img} autoPlay muted loop playsInline />
                ) : (
                   <img src={item.img} alt="Proceso creativo" />
                )}
                <div className="process-overlay">
                  <span>{item.text}</span>
                </div>
              </div>
            );
          }

          // CASO B: TARJETA DE PRODUCTO (Default)
          return (
            <div key={item.id} className="product-card">
              <div className="card-image">
                <img src={item.img} alt={item.nombre} />
              </div>
              <div className="card-info">
                <h3>{item.nombre}</h3>
                <span className="price">{item.precio}</span>
                <button 
                  className="btn-buy" 
                  onClick={() => handleBuy(item.nombre)}
                >
                  LO QUIERO
                </button>
              </div>
            </div>
          );
        })}
      </main>

    </div>
  );
};

export default Accesorios;