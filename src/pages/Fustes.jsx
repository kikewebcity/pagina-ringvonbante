import React from 'react';
import PageHero from '../components/PageHero'; 
import './Pages.css'; 

// ==========================================
// 1. IMPORTACIÓN DE LAS 10 IMÁGENES
// ==========================================
// Ajusta los nombres de archivo según los tengas en tu carpeta 'assets'

import banner from '../assets/bannerfuste.webp'; 

import img1 from '../assets/fuste1.webp'; // Basket / Kobe
import img2 from '../assets/fuste2.webp'; // Plata Cincelado
import img3 from '../assets/fuste3.webp'; // Negro Calaveras SG
import img4 from '../assets/fuste4.webp'; // Azul Oro OE
import img5 from '../assets/fuste5.webp'; // (Asegúrate de tener este archivo)
import img6 from '../assets/fuste6.webp'; // (Asegúrate de tener este archivo)
import img7 from '../assets/fuste7.webp'; // (Asegúrate de tener este archivo)
import img8 from '../assets/fuste8.webp'; // (Asegúrate de tener este archivo)
import img9 from '../assets/fuste9.webp'; // (Asegúrate de tener este archivo)
import img10 from '../assets/fuste10.webp'; // (Asegúrate de tener este archivo)

const Fustes = () => {
  
  const myNumber = "5215512345678"; 

  const handleConsult = (pieceName) => {
    const message = `Hola Ringvonbante, me interesa el diseño del fuste "${pieceName}". Quisiera cotizar algo similar.`;
    const url = `https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // ==========================================
  // 2. GALERÍA DE 10 PIEZAS
  // ==========================================
  
  const galeriaFustes = [
    { 
      id: 1, 
      src: img1, 
      title: "LEGADO 24", 
      desc: "Homenaje en oro y plata con incrustaciones de diamante." 
    },
    { 
      id: 2, 
      src: img2, 
      title: "BARROCO IMPERIAL", 
      desc: "Cincelado profundo en plata de ley sobre base de madera." 
    },
    { 
      id: 3, 
      src: img3, 
      title: "SANTA MUERTE", 
      desc: "Acabado negro piano con calaveras en relieve y cristales." 
    },
    { 
      id: 4, 
      src: img4, 
      title: "MONOGRAMA OE", 
      desc: "Personalización tipográfica con filigrana de oro." 
    },
    // --- NUEVAS PIEZAS (5 a 10) ---
    { 
      id: 5, 
      src: img5, 
      title: "DISEÑO CHARRO", 
      desc: "Tradición y vanguardia en plata quemada." 
    },
    { 
      id: 6, 
      src: img6, 
      title: "TEXTURA ESCAMAS", 
      desc: "Grabado a mano pieza por pieza." 
    },
    { 
      id: 7, 
      src: img7, 
      title: "FUSTE DE COMPETENCIA", 
      desc: "Estructura reforzada con detalles en tumbaga." 
    },
    { 
      id: 8, 
      src: img8, 
      title: "PERSONALIZADO", 
      desc: "Tus iniciales convertidas en joya." 
    },
    { 
      id: 9, 
      src: img9, 
      title: "ORO ROSA", 
      desc: "Aleación especial con incrustaciones de rubí." 
    },
    { 
      id: 10, 
      src: img10, 
      title: "OBRA MAESTRA", 
      desc: "Más de 200 horas de trabajo artesanal." 
    },
  ];

  return (
    <div className="page-container">
      
      <PageHero 
        title="FUSTES" 
        subtitle="La columna vertebral. Estructura convertida en lienzo."
        bgImage={banner} 
      />

      <section className="page-intro">
        <p>
          Transformamos la pieza estructural más importante de la charrería en una obra de arte.
          Cada fuste es intervenido con técnicas de joyería, incrustaciones preciosas y 
          grabados que cuentan la historia del jinete.
        </p>
      </section>

      {/* GRILLA AUTOMÁTICA (Se adapta sola) */}
      <main className="catalog-grid">
        {galeriaFustes.map((item) => (
          <div key={item.id} className="project-card">
            
            {/* FOTO DEL FUSTE */}
            <div className="project-media">
               <img src={item.src} alt={item.title} />
            </div>
            
            {/* INFORMACIÓN Y BOTÓN */}
            <div className="project-info">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <button 
                className="btn-quote" 
                onClick={() => handleConsult(item.title)}
              >
                COTIZAR DISEÑO
              </button>
            </div>
            
          </div>
        ))}
      </main>

    </div>
  );
};

export default Fustes;