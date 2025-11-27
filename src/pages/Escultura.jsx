import React from 'react';
import PageHero from '../components/PageHero'; 
import './Pages.css'; 

// ==========================================
// 1. IMPORTACIÓN DE TUS 14 ARCHIVOS
// ==========================================

// Banner Principal
import banner from '../assets/bannerescultura.webp'; 
import video1 from '../assets/videoescu1.mp4'; 
import video2 from '../assets/videoescu2.mp4'; // (Usa tus videos reales aquí)
import video3 from '../assets/videoescu3.mp4'; 
import video4 from '../assets/videoescu4.mp4'; 

// --- TUS 10 IMÁGENES ---
import img1 from '../assets/escu1.webp';
import img2 from '../assets/escu2.webp';
import img3 from '../assets/escu3.webp';
import img4 from '../assets/escu4.webp';
import img5 from '../assets/escu5.webp'; 
import img6 from '../assets/escu6.webp';
import img7 from '../assets/escu7.webp';
import img8 from '../assets/escu8.webp';
import img9 from '../assets/escu9.webp';
import img10 from '../assets/escu10.webp';

const Escultura = () => {
  
  const myNumber = "5215512345678"; 

  const handleConsult = (pieceName) => {
    const message = `Hola Ringvonbante, estoy interesado en la escultura "${pieceName}". Quisiera saber dimensiones y precio.`;
    const url = `https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // ==========================================
  // 2. GALERÍA CURADA (14 ELEMENTOS)
  // ==========================================
  // Estrategia: Mezclar videos para dar ritmo visual.
  
  const galeriaEscultura = [
    // --- FILA 1 (Video de impacto + 2 fotos) ---
    { id: 1, type: 'video', src: video1, title: "CRÁNEO MECÁNICO", desc: "Bronce y acero. Escala 1:1." },
    { id: 2, type: 'photo', src: img1, title: "VENADO IMPERIAL", desc: "Fusión de naturaleza y máquina." },
    { id: 3, type: 'photo', src: img2, title: "DETALLE TEXTURA", desc: "Cincelado a mano sobre plata." },
    
    // --- FILA 2 (3 fotos) ---
    { id: 4, type: 'photo', src: img3, title: "ESTRUCTURA ÓSEA", desc: "Estudio anatómico en metal." },
    { id: 5, type: 'photo', src: img4, title: "MONUMENTO VIVO", desc: "Pieza de gran formato." },
    { id: 6, type: 'photo', src: img5, title: "ENSAMBLE", desc: "Unión de piezas sin soldadura visible." },
    
    // --- FILA 3 (Video al centro + 2 fotos) ---
    { id: 7, type: 'photo', src: img6, title: "CORAZÓN DE HIERRO", desc: "Mecanismo interno expuesto." },
    { id: 8, type: 'video', src: video2, title: "VISTA 360°", desc: "Apreciación volumétrica." },
    { id: 9, type: 'photo', src: img7, title: "GUARDIÁN", desc: "Escultura de mesa." },
    
    // --- FILA 4 (3 fotos) ---
    { id: 10, type: 'photo', src: img8, title: "FRAGMENTOS", desc: "Serie de estudios parciales." },
    { id: 11, type: 'photo', src: img9, title: "ÓXIDO CONTROLADO", desc: "Acabados químicos." },
    { id: 12, type: 'photo', src: img10, title: "SILUETA", desc: "Contraste y forma." },
    
    // --- FILA 5 (Cierre con Video + Video) ---
    { id: 13, type: 'video', src: video3, title: "PROCESO DE FUNDICIÓN", desc: "El nacimiento de la forma." },
    { id: 14, type: 'video', src: video4, title: "INSTALACIÓN FINAL", desc: "La obra en su entorno." },
  ];

  return (
    <div className="page-container">
      
      <PageHero 
        title="ESCULTURA" 
        subtitle="Metal en tensión. Obras que desafían la gravedad y la norma."
        bgImage={banner} 
      />

      <section className="page-intro">
        <p>
          Nuestras esculturas no son decorativas; son presencias. 
          Utilizamos técnicas de joyería llevadas a la escala monumental, creando seres de metal 
          que parecen haber evolucionado de la tecnología y la biología.
        </p>
      </section>

      <main className="catalog-grid">
        {galeriaEscultura.map((item) => (
          <div key={item.id} className="project-card">
            
            {/* MEDIA */}
            <div className="project-media">
              {item.type === 'video' ? (
                <video src={item.src} autoPlay muted loop playsInline />
              ) : (
                <img src={item.src} alt={item.title} />
              )}
            </div>

            {/* INFO */}
            <div className="project-info">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <button 
                className="btn-quote" 
                onClick={() => handleConsult(item.title)}
              >
                CONSULTAR PIEZA
              </button>
            </div>

          </div>
        ))}
      </main>

    </div>
  );
};

export default Escultura;