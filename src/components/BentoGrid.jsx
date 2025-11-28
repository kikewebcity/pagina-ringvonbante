import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BentoGrid.css';

// ==========================================
// 1. IMPORTACIÓN DE ASSETS
// ==========================================

// --- ACCESORIOS ---
import videoAccesorios from '../assets/videovenado.mp4'; 
import imgAnillo1 from '../assets/venadito1.webp'; 
import imgAnillo2 from '../assets/venadito2.webp'; 

// --- MOTOS ---
import videoMoto from '../assets/videomoto2.mp4'; 
import imgMotoHoriz1 from '../assets/fotomoto.webp'; 
import imgMotoHoriz2 from '../assets/fotomoto2.webp'; 

// --- ESCULTURA ---
import videoEscultura from  '../assets/videoescultura.mp4'; 
import imgEscultura1 from '../assets/fotoescultura.webp'; 
import imgEscultura2 from '../assets/escultura.webp'; 

// --- FUSTES ---
import fusteBasket from '../assets/fuste1.webp'; 
import fustePlata from '../assets/fuste2.webp';   
import fusteBlack from '../assets/fuste3.webp';   

// --- RECICLADOS ---
import recicladoGuitarra1 from '../assets/reciclado1.webp'; 
import recicladoGuitarra2 from '../assets/reciclado2.webp'; 
import recicladoCabeza1 from '../assets/reciclado3.webp';     
import recicladoCabeza2 from '../assets/reciclado4.webp';     

const BentoGrid = () => {
  
  const navigate = useNavigate(); 

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0); 
  };

  const sections = [
    // 1. ACCESORIOS
    {
      id: 'accesorios',
      title: 'ACCESORIOS',
      path: '/accesorios',
      layout: 'layout-3-cols',
      description: "Plata de ley 925, piedras en bruto y acabados que evolucionan.",
      items: [
        { type: 'video', src: videoAccesorios, alt: 'Video Taller' }, 
        { type: 'image', src: imgAnillo1, alt: 'Detalle' },
        { type: 'image', src: imgAnillo2, alt: 'Contexto' },
      ]
    },

    // 2. MOTOS
    {
      id: 'motos',
      title: 'MOTOS ELÉCTRICAS',
      path: '/motos',
      layout: 'layout-video-left',
      description: "Ingeniería silenciosa con estética ruidosa.",
      items: [
         { type: 'video', src: videoMoto, alt: 'Moto' },
         { type: 'image', src: imgMotoHoriz1, alt: 'Perfil' },
         { type: 'image', src: imgMotoHoriz2, alt: 'Tanque' },
      ]
    },

    // 3. ESCULTURA
    {
      id: 'escultura',
      title: 'ESCULTURA MONUMENTAL',
      path: '/escultura',
      layout: 'layout-3-cols', 
      description: "Obras de gran formato que desafían la estática.",
      items: [
         { type: 'video', src: videoEscultura, alt: 'Video' },
         { type: 'image', src: imgEscultura1, alt: 'Foto 1' },
         { type: 'image', src: imgEscultura2, alt: 'Foto 2' },
      ]
    },

    // 4. FUSTES
    {
      id: 'fustes',
      title: 'FUSTES & ESTRUCTURA',
      path: '/fustes',
      layout: 'layout-3-cols', 
      description: "La columna vertebral del diseño arquitectónico.",
      items: [
         { type: 'image', src: fusteBasket, alt: 'Fuste 1' },
         { type: 'image', src: fustePlata, alt: 'Fuste 2' },
         { type: 'image', src: fusteBlack, alt: 'Fuste 3' },
      ]
    },

    // 5. RECICLADOS (AQUÍ ESTABA EL ERROR)
    {
      id: 'reciclados',
      title: 'VIDA INDUSTRIAL',
      path: '/reciclados',
      layout: 'layout-4-cols', // Usamos 4 columnas para tus 4 fotos
      description: "Rescatamos piezas industriales para darles una segunda vida.",
      items: [
         // Corregido: Usamos las variables que sí importaste arriba
         { type: 'image', src: recicladoGuitarra1, alt: 'Guitarra 1' },
         { type: 'image', src: recicladoCabeza1, alt: 'Cabeza 1' },
         { type: 'image', src: recicladoGuitarra2, alt: 'Guitarra 2' },
         { type: 'image', src: recicladoCabeza2, alt: 'Cabeza 2' },
      ]
    }
  ];

  return (
    <div className="bento-wrapper">
      {sections.map((section) => (
        <section id={section.id} key={section.id} className="bento-section">
          
          <div className="bento-header">
             <h2 
                className="bento-title" 
                onClick={() => handleNavigate(section.path)}
                style={{cursor: 'pointer'}}
             >
                {section.title}
             </h2>
          </div>
          
          <div className={`bento-grid ${section.layout}`}>
            {section.items.map((item, index) => (
              <div 
                key={index} 
                className={`bento-item item-${index + 1}`}
                onClick={() => handleNavigate(section.path)}
              >
                {item.type === 'video' ? (
                  <video 
                    src={item.src} 
                    autoPlay muted loop playsInline 
                    className="bento-media video-always-color"
                  />
                ) : (
                  <img src={item.src} alt={item.alt} className="bento-media" />
                )}
                
                <div className="bento-overlay">
                    <span style={{fontSize: '1.5rem', letterSpacing: '2px'}}>VER COLECCIÓN</span>
                </div>
              </div>
            ))}
          </div>

          {section.description && (
            <div className="bento-description-box">
                <p>{section.description}</p>
                <button 
                    className="slide-btn" 
                    style={{marginTop: '20px', fontSize: '0.9rem'}}
                    onClick={() => handleNavigate(section.path)}
                >
                    EXPLORAR {section.title}
                </button>
            </div>
          )}

        </section>
      ))}
    </div>
  );
};

export default BentoGrid;