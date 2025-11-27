import React from 'react';
import PageHero from '../components/PageHero'; 
import './Pages.css'; 

// ==========================================
// 1. IMPORTACIÓN DE TU MATERIAL NUEVO
// ==========================================
// Usamos el banner que ya tenías, o puedes cambiarlo por una de las nuevas fotos horizontales
import banner from '../assets/tanque.webp'; 

// --- TUS 3 VIDEOS NUEVOS ---
import video1 from '../assets/videomoto1.mp4'; 
import video2 from '../assets/videomoto2.mp4';
import video3 from '../assets/videomoto3.mp4';

// --- TUS 8 FOTOS NUEVAS (Serie mate) ---
import foto1 from '../assets/moto1.webp';
import foto2 from '../assets/moto2.webp';
import foto3 from '../assets/moto3.webp';
import foto4 from '../assets/moto4.webp';
import foto5 from '../assets/moto5.webp';
import foto6 from '../assets/moto6.webp';
import foto7 from '../assets/moto7.webp';
import foto8 from '../assets/moto8.webp';


const Motos = () => {
  
  const myNumber = "5215512345678"; // Tu número

  const handleQuote = (projectName) => {
    const message = `Hola Ringvonbante, vi el proyecto "${projectName}" y me gustaría cotizar algo similar.`;
    const url = `https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // ==========================================
  // 2. GALERÍA MIXTA (11 ELEMENTOS)
  // ==========================================
  // Estrategia: Videos en posiciones 1, 6 y 11 para mantener el interés.
  
  const galeriaMotos = [
    // --- BLOQUE 1: Video de entrada + Fotos ---
    { id: 1, type: 'video', src: video1, title: "GÉNESIS DEL PROYECTO", desc: "El inicio de la transformación en el taller." },
    { id: 2, type: 'photo', src: foto1, title: "ASIENTO ARTESANAL", desc: "Restauración y estética industrial." },
    { id: 3, type: 'photo', src: foto2, title: "TANQUE PERSONALIZADO", desc: "Pintura y acabados únicos." },
    { id: 4, type: 'photo', src: foto3, title: "FARO DELANTERO ", desc: "Iluminación con caracter retro." },
    { id: 5, type: 'photo', src: foto4, title: "SISTEMA ELÉCTRICO", desc: "Integración de la nueva tecnología." },

    // --- BLOQUE 2: Video intermedio + Fotos ---
    { id: 6, type: 'video', src: video3, title: "PRUEBAS DE FUNCIONAMIENTO", desc: "Primer encendido y ajustes." },
    { id: 7, type: 'photo', src: foto5, title: "FARO DELANTERO", desc: "Iluminación con carácter retro." },
    { id: 8, type: 'photo', src: foto6, title: "CONTROLES Y MANUBRIO", desc: "Ergonomía y diseño limpio." },
    { id: 9, type: 'photo', src: foto7, title: "RUEDAS Y FRENOS", desc: "Seguridad con estilo clásico." },
    { id: 10, type: 'photo', src: foto8, title: "VISTA LATERAL", desc: "La silueta final tomando forma." },

    // --- BLOQUE 3: Video final ---
    { id: 11, type: 'video', src: video2, title: "RESULTADO FINAL", desc: "Lista para rodar. Una pieza única." },
  ];

  return (
    <div className="page-container">
      
      <PageHero 
        title="MOTOS ELÉCTRICAS" 
        subtitle="Ingeniería silenciosa. Estética ruidosa. Proyectos a medida."
        bgImage={banner} 
      />

      <section className="page-intro">
        <p>
          No vendemos motos en serie. Creamos piezas únicas a partir de chasis recuperados, 
          integrando tecnología eléctrica de vanguardia con acabados de joyería industrial.
          Esta es una bitácora de nuestro proceso.
        </p>
      </section>

      <main className="catalog-grid">
        {galeriaMotos.map((item) => (
          <div key={item.id} className="project-card">
            
            {/* MEDIA (Video o Foto) */}
            <div className="project-media">
              {item.type === 'video' ? (
                // Videos en autoplay mudo para dar vida
                <video src={item.src} autoPlay muted loop playsInline />
              ) : (
                // Fotos (las horizontales se centrarán automáticamente)
                <img src={item.src} alt={item.title} />
              )}
            </div>

            {/* INFO */}
            <div className="project-info">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <button 
                className="btn-quote" 
                onClick={() => handleQuote(item.title)}
              >
                COTIZAR PROYECTO
              </button>
            </div>

          </div>
        ))}
      </main>

    </div>
  );
};

export default Motos;