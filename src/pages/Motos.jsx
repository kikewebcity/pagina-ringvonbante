import React from 'react';
import PageHero from '../components/PageHero'; 
import './Pages.css'; 

// ==========================================
// 1. IMPORTACIÓN DE TUS 16 ARCHIVOS
// ==========================================
import banner from '../assets/tanque.webp'; 

// --- TUS 4 VIDEOS ---
import video1 from '../assets/videomotos2.mp4'; 
import video2 from '../assets/videovenado.mp4'; // (Cambia por tus videos reales)
import video3 from '../assets/videomotos2.mp4'; 
import video4 from '../assets/videovenado.mp4'; 

// --- TUS 12 FOTOS ---
import foto1 from '../assets/motog.jpg';
import foto2 from '../assets/tanque.webp';
import foto3 from '../assets/fotomoto.webp';
import foto4 from '../assets/fotomoto2.webp';
// ... importa las otras 8 fotos aquí ...
import foto5 from '../assets/motog.jpg'; 
import foto6 from '../assets/tanque.webp';
import foto7 from '../assets/fotomoto.webp';
import foto8 from '../assets/fotomoto2.webp';
import foto9 from '../assets/motog.jpg';
import foto10 from '../assets/tanque.webp';
import foto11 from '../assets/fotomoto.webp';
import foto12 from '../assets/fotomoto2.webp';

const Motos = () => {
  
  const myNumber = "5215512345678"; 

  const handleQuote = (projectName) => {
    const message = `Hola Ringvonbante, vi el proyecto "${projectName}" y me gustaría cotizar.`;
    const url = `https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // ==========================================
  // 2. LISTA MEZCLADA (VIDEOS ESTRATÉGICOS)
  // ==========================================
  // Estrategia: Ponemos un video cada 3 o 4 fotos para dar ritmo.
  
  const galeriaMotos = [
    // --- FILA 1 ---
    { id: 1, type: 'video', src: video1, title: "CONVERSIÓN 3000W", desc: "Potencia silenciosa." },
    { id: 2, type: 'photo', src: foto1, title: "TANQUE CUSTOM", desc: "Pintura electrostática." },
    { id: 3, type: 'photo', src: foto2, title: "ASIENTO CUERO", desc: "Trabajo artesanal." },
    { id: 4, type: 'photo', src: foto3, title: "MANUBRIO BRONCE", desc: "Fundición a mano." },

    // --- FILA 2 ---
    { id: 5, type: 'photo', src: foto4, title: "CHASIS CAFE RACER", desc: "Modificación estructural." },
    { id: 6, type: 'video', src: video2, title: "PRUEBA DE RODAJE", desc: "Test de suspensión." },
    { id: 7, type: 'photo', src: foto5, title: "FARO LED RETRO", desc: "Iluminación moderna." },
    { id: 8, type: 'photo', src: foto6, title: "BATERÍA OCULTA", desc: "Diseño limpio." },

    // --- FILA 3 ---
    { id: 9, type: 'photo', src: foto7, title: "DETALLE MOTOR", desc: "Estética industrial." },
    { id: 10, type: 'photo', src: foto8, title: "RUEDAS CUSTOM", desc: "Radios reforzados." },
    { id: 11, type: 'video', src: video3, title: "SOLDADURA TIG", desc: "Proceso de unión." },
    { id: 12, type: 'photo', src: foto9, title: "ACABADO ÓXIDO", desc: "Pátina controlada." },

    // --- FILA 4 ---
    { id: 13, type: 'photo', src: foto10, title: "SUSPENSIÓN", desc: "Amortiguación ajustada." },
    { id: 14, type: 'photo', src: foto11, title: "FRENOS ABS", desc: "Seguridad integrada." },
    { id: 15, type: 'photo', src: foto12, title: "CADENA DORADA", desc: "Transmisión final." },
    { id: 16, type: 'video', src: video4, title: "RESULTADO FINAL", desc: "Listo para rodar." },
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
        </p>
      </section>

      <main className="catalog-grid">
        {galeriaMotos.map((item) => (
          <div key={item.id} className="project-card">
            
            {/* MEDIA (Video o Foto) */}
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