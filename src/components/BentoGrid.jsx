import React from 'react';
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

// --- RECICLADOS (TUS NUEVAS IMÁGENES) ---
// Asegúrate de que los nombres coincidan con los archivos en tu carpeta assets
import recicladoGuitarra1 from '../assets/reciclado1.webp'; // Foto con fondo rosa
import recicladoGuitarra2 from '../assets/reciclado2.webp'; // Close-up guitarra
import recicladoCabeza1 from '../assets/reciclado3.webp';     // Cabeza mirando abajo
import recicladoCabeza2 from '../assets/reciclado4.webp';     // Cabeza mirando frente


const BentoGrid = () => {
  const sections = [
    // ---------------------------------------------------------
    // 1. ACCESORIOS
    // ---------------------------------------------------------
    {
      id: 'accesorios',
      title: 'ACCESORIOS',
      layout: 'layout-3-cols', 
      description: "Cada pieza es un diálogo entre la crudeza del material y la precisión del diseño. Plata de ley 925, piedras en bruto y acabados que evolucionan con el uso.",
      items: [
        { type: 'video', src: videoAccesorios, alt: 'Video Taller Joyería' }, 
        { type: 'image', src: imgAnillo1, alt: 'Detalle Anillo' },
        { type: 'image', src: imgAnillo2, alt: 'Pieza en contexto' },
      ]
    },

    // ---------------------------------------------------------
    // 2. MOTOS ELÉCTRICAS
    // ---------------------------------------------------------
    {
      id: 'motos',
      title: 'MOTOS ELÉCTRICAS',
      layout: 'layout-video-left', 
      description: "Ingeniería silenciosa con estética ruidosa. Baterías de litio de alto rendimiento ocultas en chasis clásicos modificados a mano.",
      items: [
        { type: 'video', src: videoMoto, alt: 'Moto en movimiento' },
        { type: 'image', src: imgMotoHoriz1, alt: 'Moto Perfil' },
        { type: 'image', src: imgMotoHoriz2, alt: 'Detalle Motor/Tanque' },
      ]
    },

    // ---------------------------------------------------------
    // 3. ESCULTURA
    // ---------------------------------------------------------
    {
      id: 'escultura',
      title: 'ESCULTURA MONUMENTAL',
      layout: 'layout-3-cols', 
      description: "Obras de gran formato diseñadas para transformar el espacio. Estructuras de acero y bronce que desafían la estática.",
      items: [
        { type: 'video', src: videoEscultura, alt: 'Escultura en movimiento' },
        { type: 'image', src: imgEscultura1, alt: 'Detalle Soldadura' },
        { type: 'image', src: imgEscultura2, alt: 'Textura Metal' },
      ]
    },

    // ---------------------------------------------------------
    // 4. FUSTES
    // ---------------------------------------------------------
    {
      id: 'fustes',
      title: 'FUSTES & ESTRUCTURA',
      layout: 'layout-3-cols', 
      description: "La columna vertebral de la montura. Piezas estructurales convertidas en lienzos de metal, plata y oro.",
      items: [
        { type: 'image', src: fusteBasket, alt: 'Fuste detalle Jugador' },
        { type: 'image', src: fustePlata, alt: 'Fuste Plateado Cincelado' },
        { type: 'image', src: fusteBlack, alt: 'Fuste Negro con Calaveras' },
      ]
    },

    // ---------------------------------------------------------
    // 5. RECICLADOS (NUEVO LAYOUT DE 4 COLUMNAS)
    // ---------------------------------------------------------
    {
      id: 'reciclados',
      title: 'VIDA INDUSTRIAL',
      
      // Usamos el nuevo layout de 4 columnas
      layout: 'layout-4-cols', 
      
      description: "Nada se pierde, todo se transforma. Rescatamos piezas industriales y mecanismos olvidados para darles una segunda vida como arte funcional cyberpunk.",
      
      items: [
        // Las 4 fotos verticales una al lado de la otra
        { type: 'image', src: recicladoGuitarra1, alt: 'Guitarra Steampunk con modelo' },
        { type: 'image', src: recicladoCabeza1, alt: 'Casco Biomecánico Perfil' },
        { type: 'image', src: recicladoGuitarra2, alt: 'Detalle Mecanismo Guitarra' },
        { type: 'image', src: recicladoCabeza2, alt: 'Casco Biomecánico Frente' },
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