import React from 'react';
import './BentoGrid.css';

// ==========================================
// 1. IMPORTAR TUS FOTOS Y VIDEO REALES
// ==========================================

// ACCESORIOS
import videoAccesorios from '../assets/videovenado.mp4'; // <--- TU VIDEO REAL
import imgAnilloGuante from '../assets/venadito2.webp';
import imgVenadito1 from '../assets/venadito1.webp'; // Usando lo que tienes

// MOTOS
import imgMotoG from '../assets/motog.jpg';
import imgTanque from '../assets/tanque.webp';

// ESCULTURA
import imgEsculturaBanner from '../assets/bannerescultura.webp';
import imgVenadito2 from '../assets/venadito2.webp';

// FUSTES Y RECICLADOS (Usamos los banners por ahora si no hay fotos detalle)
import imgFustes from '../assets/bannerfuste.webp';
import imgReciclados from '../assets/reciclados.webp'; 


const BentoGrid = () => {
  const sections = [
    // --- 1. ACCESORIOS ---
    {
      id: 'accesorios',
      title: 'ACCESORIOS',
      layout: 'layout-3-cols', 
      description: "Cada pieza es un diálogo entre la crudeza del material y la precisión del diseño. Plata de ley 925, piedras en bruto y acabados que evolucionan con el uso.",
      items: [
        // VIDEO
        { 
            type: 'video', 
            src: videoAccesorios, // Variable importada
            alt: 'Video Taller' 
        }, 
        // FOTOS
        { type: 'image', src: imgAnilloGuante, alt: 'Anillo Detalle' },
        { type: 'image', src: imgVenadito1, alt: 'Pieza Puesta' },
      ]
    },

    // --- 2. MOTOS ---
    {
      id: 'motos',
      title: 'MOTOS ELÉCTRICAS',
      layout: 'layout-split', 
      items: [
        { type: 'image', src: imgMotoG, alt: 'Moto Perfil' },
        { type: 'image', src: imgTanque, alt: 'Moto Detalle' },
      ]
    },

    // --- 3. ESCULTURA ---
    {
      id: 'escultura',
      title: 'ESCULTURA MONUMENTAL',
      layout: 'layout-1-row-2-col', 
      items: [
        { type: 'image', src: imgEsculturaBanner, alt: 'Escultura Completa' },
        { type: 'image', src: imgVenadito2, alt: 'Detalle 1' }, 
        { type: 'image', src: imgVenadito1, alt: 'Detalle 2' }, // Reusada por ejemplo
      ]
    },

    // --- 4. FUSTES ---
    {
      id: 'fustes',
      title: 'FUSTES & ESTRUCTURA',
      layout: 'layout-split', 
      items: [
        { type: 'image', src: imgFustes, alt: 'Columna detalle' },
        { type: 'image', src: imgFustes, alt: 'Estructura' }, // Repetida por ahora
      ]
    },

    // --- 5. RECICLADOS ---
    {
      id: 'reciclados',
      title: 'VIDA INDUSTRIAL',
      layout: 'layout-1-2', 
      items: [
        { type: 'image', src: imgReciclados, alt: 'Pieza Reciclada' },
        { type: 'image', src: imgReciclados, alt: 'Detalle Tuercas' },
        { type: 'image', src: imgReciclados, alt: 'Taller' },
      ]
    }
  ];

  return (
    <div className="bento-wrapper">
      {sections.map((section) => (
        <section id={section.id} key={section.id} className="bento-section">
          
          <div className="bento-header">
             <h2 className="bento-title">{section.title}</h2>
          </div>
          
          <div className={`bento-grid ${section.layout}`}>
            {section.items.map((item, index) => (
              <div key={index} className={`bento-item item-${index + 1}`}>
                {item.type === 'video' ? (
                  <video 
                    src={item.src} 
                    autoPlay muted loop playsInline 
                    className="bento-media video-always-color"
                  />
                ) : (
                  <img src={item.src} alt={item.alt} className="bento-media" />
                )}
                
                {item.type !== 'video' && (
                    <div className="bento-overlay"><span>+</span></div>
                )}
              </div>
            ))}
          </div>

          {section.description && (
            <div className="bento-description-box">
                <p>{section.description}</p>
            </div>
          )}

        </section>
      ))}
    </div>
  );
};

export default BentoGrid;