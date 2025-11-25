import React from 'react';
import './BentoGrid.css';

// ==========================================
// 1. IMPORTACIÓN DE ASSETS
// ==========================================

// --- ACCESORIOS (1 Video Vertical + 2 Fotos Verticales) ---
import videoAccesorios from '../assets/videovenado.mp4'; 
import imgAnillo1 from '../assets/venadito1.webp'; 
import imgAnillo2 from '../assets/venadito2.webp'; 

// --- MOTOS (1 Video Vertical + 2 Fotos Horizontales) ---
import videoMoto from '../assets/videomotos2.mp4'; 
import imgMotoHoriz1 from '../assets/fotomoto.webp'; 
import imgMotoHoriz2 from '../assets/fotomoto2.webp'; 

// --- ESCULTURA (1 Video Vertical + 2 Fotos Verticales) ---
// NOTA: Como no pasaste un video específico para escultura, 
// estoy reusando 'videovenado.mp4' para que el código no falle.
// Cuando tengas el video de escultura, impórtalo aquí.
import videoEscultura from  '../assets/videoescultura.mp4'; 
import imgEscultura1 from '../assets/fotoescultura.webp'; // Reusando venaditos como pediste
import imgEscultura2 from '../assets/escultura.webp'; 

// --- FUSTES Y RECICLADOS ---
import imgFustes from '../assets/bannerfuste.webp';
import imgReciclados from '../assets/reciclados.webp'; 


const BentoGrid = () => {
  const sections = [
    // ---------------------------------------------------------
    // 1. ACCESORIOS (Tríptico Vertical)
    // ---------------------------------------------------------
    {
      id: 'accesorios',
      title: 'ACCESORIOS',
      layout: 'layout-3-cols', 
      description: "Cada pieza es un diálogo entre la crudeza del material y la precisión del diseño. Plata de ley 925, piedras en bruto y acabados que evolucionan con el uso.",
      items: [
        { 
            type: 'video', 
            src: videoAccesorios, 
            alt: 'Video Taller Joyería' 
        }, 
        { type: 'image', src: imgAnillo1, alt: 'Detalle Anillo' },
        { type: 'image', src: imgAnillo2, alt: 'Pieza en contexto' },
      ]
    },

    // ---------------------------------------------------------
    // 2. MOTOS ELÉCTRICAS (Video Izq + 2 Horizontales Der)
    // ---------------------------------------------------------
    {
      id: 'motos',
      title: 'MOTOS ELÉCTRICAS',
      layout: 'layout-video-left', 
      description: "Ingeniería silenciosa con estética ruidosa. Baterías de litio de alto rendimiento ocultas en chasis clásicos modificados a mano.",
      items: [
        { 
            type: 'video', 
            src: videoMoto, 
            alt: 'Moto en movimiento' 
        },
        { type: 'image', src: imgMotoHoriz1, alt: 'Moto Perfil' },
        { type: 'image', src: imgMotoHoriz2, alt: 'Detalle Motor/Tanque' },
      ]
    },

    // ---------------------------------------------------------
    // 3. ESCULTURA (Tríptico Vertical)
    // ---------------------------------------------------------
    {
      id: 'escultura',
      title: 'ESCULTURA MONUMENTAL',
      
      // Layout de 3 columnas verticales (Video + Foto + Foto)
      layout: 'layout-3-cols', 
      
      description: "Obras de gran formato diseñadas para transformar el espacio. Estructuras de acero y bronce que desafían la estática.",
      items: [
        // Columna 1: Video Vertical
        { 
            type: 'video', 
            src: videoEscultura, // Aquí usa el video que definimos arriba
            alt: 'Escultura en movimiento' 
        },
        // Columna 2: Foto Vertical
        { type: 'image', src: imgEscultura1, alt: 'Detalle Soldadura' },
        // Columna 3: Foto Vertical
        { type: 'image', src: imgEscultura2, alt: 'Textura Metal' },
      ]
    },

    // ---------------------------------------------------------
    // 4. FUSTES
    // ---------------------------------------------------------
    {
      id: 'fustes',
      title: 'FUSTES & ESTRUCTURA',
      layout: 'layout-split', 
      description: "La columna vertebral del diseño arquitectónico. Piezas estructurales con carácter artístico.",
      items: [
        { type: 'image', src: imgFustes, alt: 'Columna detalle' },
        { type: 'image', src: imgFustes, alt: 'Estructura soporte' },
      ]
    },

    // ---------------------------------------------------------
    // 5. RECICLADOS
    // ---------------------------------------------------------
    {
      id: 'reciclados',
      title: 'VIDA INDUSTRIAL',
      layout: 'layout-1-2', 
      description: "Nada se pierde, todo se transforma. Rescatamos piezas industriales olvidadas para darles una segunda vida de lujo.",
      items: [
        { type: 'image', src: imgReciclados, alt: 'Pieza Reciclada Principal' },
        { type: 'image', src: imgReciclados, alt: 'Detalle Mecanismo' },
        { type: 'image', src: imgReciclados, alt: 'Proceso de Restauración' },
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