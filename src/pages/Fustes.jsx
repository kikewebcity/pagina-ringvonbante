import React from 'react';
import PageHero from '../components/PageHero'; 
import './Pages.css'; 

// --- IMPORTACIÓN DE TUS FUSTES ---
// Asegúrate de que estos nombres coincidan con los de tu carpeta assets
import banner from '../assets/bannerfuste.webp'; // O usa uno de los fustes como banner

import img1 from '../assets/fuste1.webp'; // Basket
import img2 from '../assets/fuste2.webp'; // Plata
import img3 from '../assets/fuste3.webp'; // Negro Calaveras
import img4 from '../assets/fuste4.webp'; // El de letras OE (si lo tienes)

const Fustes = () => {
  
  const myNumber = "5215512345678"; 

  const handleConsult = (pieceName) => {
    const message = `Hola Ringvonbante, me interesa el fuste "${pieceName}".`;
    const url = `https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const galeriaFustes = [
    { 
      id: 1, 
      type: 'photo', 
      src: img1, 
      title: "LEGADO 24", 
      desc: "Homenaje en oro y plata con incrustaciones de diamante." 
    },
    { 
      id: 2, 
      type: 'photo', 
      src: img2, 
      title: "BARROCO IMPERIAL", 
      desc: "Cincelado profundo en plata de ley sobre base de madera." 
    },
    { 
      id: 3, 
      type: 'photo', 
      src: img3, 
      title: "SANTA MUERTE", 
      desc: "Acabado negro piano con calaveras en relieve y cristales." 
    },
    { 
      id: 4, 
      type: 'photo', 
      src: img4, 
      title: "MONOGRAMA OE", 
      desc: "Personalización tipográfica con filigrana de oro." 
    }
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

      <main className="catalog-grid">
        {galeriaFustes.map((item) => (
          <div key={item.id} className="project-card">
            <div className="project-media">
               <img src={item.src} alt={item.title} />
            </div>
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