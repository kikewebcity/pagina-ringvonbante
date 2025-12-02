import React, { useState } from 'react';
import PageHero from '../components/PageHero'; 
import './Pages.css'; 

// ==========================================
// 1. IMPORTACIÓN DE IMÁGENES
// ==========================================
import banner from '../assets/banneranillo.webp'; 

// Productos (1-15)
// Asegúrate de que estos nombres coincidan con tu carpeta assets
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

// Proceso (Visuales artísticos)
import imgProceso1 from '../assets/videovenado.mp4'; 
import imgProceso2 from '../assets/reciclado1.webp'; 

const Accesorios = () => {
  
  const myNumber = "5215512345678"; // TU NÚMERO DE WHATSAPP
  
  // ESTADO PARA EL FILTRO (Por defecto muestra todo)
  const [filtro, setFiltro] = useState('TODOS');

  const handleBuy = (productName) => {
    const message = `Hola Ringvonbante, estoy interesado en: ${productName}.`;
    const url = `https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // ==========================================
  // 2. LISTA DE PRODUCTOS CON CATEGORÍAS
  // ==========================================
  
  const itemsGaleria = [
    // --- FILA 1 ---
    { id: 1, type: 'product', category: 'ANILLOS', nombre: "Anillo Cota de Luna", precio: "$2,500 MXN", img: img1 },
    { id: 2, type: 'product', category: 'COLLARES', nombre: "Colgante Venado", precio: "$3,200 MXN", img: img2 },
    { id: 3, type: 'product', category: 'PULSERAS', nombre: "Brazalete Industrial", precio: "$1,800 MXN", img: img3 },

    // --- FILA 2 (Con Proceso) ---
    { id: 100, type: 'process', category: 'PROCESO', text: "FUEGO Y METAL: EL ORIGEN.", img: imgProceso1, isVideo: true },
    { id: 4, type: 'product', category: 'ANILLOS', nombre: "Anillo Crudo", precio: "$2,100 MXN", img: img4 },
    { id: 5, type: 'product', category: 'COLLARES', nombre: "Collar Estructura", precio: "$4,500 MXN", img: img5 },
    
    // --- FILA 3 ---
    { id: 6, type: 'product', category: 'ARETES', nombre: "Aretes Fusión", precio: "$900 MXN", img: img6 },
    { id: 7, type: 'product', category: 'ANILLOS', nombre: "Anillo Negro Mate", precio: "$2,300 MXN", img: img7 },
    { id: 8, type: 'product', category: 'COLLARES', nombre: "Dije Mecánico", precio: "$1,500 MXN", img: img8 },

    // --- FILA 4 (Con Proceso) ---
    { id: 9, type: 'product', category: 'PULSERAS', nombre: "Pulsera Eslabones", precio: "$2,800 MXN", img: img9 },
    { id: 101, type: 'process', category: 'PROCESO', text: "NO HAY MOLDES. SOLO MÚSCULO Y PLATA.", img: imgProceso2, isVideo: false },
    { id: 10, type: 'product', category: 'ANILLOS', nombre: "Anillo Solitario", precio: "$3,100 MXN", img: img10 },

    // --- FILA 5 ---
    { id: 11, type: 'product', category: 'COLLARES', nombre: "Collar Minimalista", precio: "$1,200 MXN", img: img11 },
    { id: 12, type: 'product', category: 'PULSERAS', nombre: "Brazalete Óxido", precio: "$1,950 MXN", img: img12 },
    { id: 13, type: 'product', category: 'ARETES', nombre: "Aretes Geométricos", precio: "$850 MXN", img: img13 },
    
    // --- EXTRAS ---
    { id: 14, type: 'product', category: 'ANILLOS', nombre: "Anillo Doble", precio: "$2,600 MXN", img: img14 },
    { id: 15, type: 'product', category: 'COLLARES', nombre: "Colgante Raw", precio: "$3,400 MXN", img: img15 },
  ];

  // Lógica de Filtrado
  const productosVisibles = filtro === 'TODOS' 
    ? itemsGaleria 
    : itemsGaleria.filter(item => item.category === filtro);

  return (
    <div className="page-container">
      
      <PageHero 
        title="ACCESORIOS" 
        subtitle="Plata de ley, texturas orgánicas y diseño industrial."
        bgImage={banner} 
      />

      {/* --- BARRA DE FILTROS --- */}
      <div className="filter-bar">
        {['TODOS', 'ANILLOS', 'COLLARES', 'PULSERAS', 'ARETES'].map((cat) => (
          <button 
            key={cat}
            className={`filter-btn ${filtro === cat ? 'active' : ''}`}
            onClick={() => setFiltro(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <section className="page-intro">
        <p>
          Cada pieza de Ringvonbante es única. No utilizamos moldes industriales masivos.
          Nuestras joyas son cicatrices de plata que cuentan una historia de resistencia.
        </p>
      </section>

      <main className="catalog-grid">
        {productosVisibles.map((item) => {
          
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

          // CASO B: TARJETA DE PRODUCTO
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

export default Accesorios; // <--- ESTO ES LO QUE TE FALTABA