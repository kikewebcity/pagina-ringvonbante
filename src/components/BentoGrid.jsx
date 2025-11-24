import React from 'react';
import './BentoGrid.css';

const BentoGrid = () => {
  const sections = [
    {
      id: 'accesorios',
      title: 'ACCESORIOS',
      layout: 'layout-3-cols', 
      description: "Cada pieza es un diálogo entre la crudeza del material y la precisión del diseño. Plata de ley 925, piedras en bruto y acabados que evolucionan con el uso.",
      
      items: [
        // El Video (Item 1)
        { 
            type: 'video', 
            src: 'src/assets/videovenado.mp4', 
            alt: 'Video Taller' 
        }, 
        // Las Fotos (Items 2 y 3)
        { type: 'image', src: 'src/assets/venadito1.webp', alt: 'Anillo Detalle' },
        { type: 'image', src: 'src/assets/venadito2.webp', alt: 'Pieza Puesta' },
      ]
    },
    // ... (Tus otras secciones MOTOS, ESCULTURA, ETC. déjalas igual) ...
    {
      id: 'motos',
      title: 'MOTOS ELÉCTRICAS',
      layout: 'layout-split', 
      // Puedes poner descripción o dejarlo vacío
      items: [
        { type: 'image', src: 'https://images.unsplash.com/photo-1558981403-c5f9890a337f?w=800', alt: 'Moto Perfil' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1591635566278-10dca0ca76e6?w=800', alt: 'Moto Detalle' },
      ]
    },
    // ... Resto de secciones ...
  ];

  return (
    <div className="bento-wrapper">
      {sections.map((section) => (
        <section id={section.id} key={section.id} className="bento-section">
          
          {/* Header centrado para el título */}
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
                    // AQUÍ ESTÁ EL TRUCO: Agregamos la clase 'video-always-color'
                    className="bento-media video-always-color"
                  />
                ) : (
                  // Las imágenes siguen usando la clase normal (con efecto gris)
                  <img src={item.src} alt={item.alt} className="bento-media" />
                )}
                
                {/* Overlay solo para imágenes (opcional, o quítalo si quieres) */}
                {item.type !== 'video' && (
                    <div className="bento-overlay"><span>+</span></div>
                )}
              </div>
            ))}
          </div>

          {/* Renderizado del Texto de Abajo (Si existe) */}
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