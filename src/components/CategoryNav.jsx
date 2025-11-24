import React from 'react';
// Ya no necesitamos 'Link' de react-router-dom porque nos quedamos en la misma página
import './CategoryNav.css';

// --- TUS IMÁGENES ---
const imgAccesorios = "src/assets/iconanillowebp.webp"; 
const imgMotos = "src/assets/iconmoto.webp";
const imgEscultura = "src/assets/iconescultura.webp";
const imgFustes = "src/assets/iconfuste.webp";
const imgReciclados = "src/assets/iconreciclado.webp";

const CategoryNav = () => {
  
  // Función para hacer scroll suave
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn(`No se encontró la sección: ${sectionId}`);
    }
  };

  const categories = [
    { 
      id: 1, 
      title: 'ACCESORIOS', 
      img: imgAccesorios, 
      targetId: 'accesorios' // Esto debe coincidir con el ID en BentoGrid
    },
    { 
      id: 2, 
      title: 'MOTOS', 
      img: imgMotos, 
      targetId: 'motos' 
    },
    { 
      id: 3, 
      title: 'ESCULTURA', 
      img: imgEscultura, 
      targetId: 'escultura' 
    },
    { 
      id: 4, 
      title: 'FUSTES', 
      img: imgFustes, 
      targetId: 'fustes' 
    },
    { 
      id: 5, 
      title: 'RECICLADOS', 
      img: imgReciclados, 
      targetId: 'reciclados' 
    },
  ];

  return (
    <section className="category-nav-section">
      <div className="category-nav-container">
        {categories.map((cat) => (
          // Cambiamos Link por un div con onClick
          <div 
            key={cat.id} 
            className="category-item" 
            onClick={() => scrollToSection(cat.targetId)}
          >
            <div className="cat-image-wrapper">
              <img src={cat.img} alt={cat.title} />
            </div>
            <span className="cat-title">{cat.title}</span>
            <span className="cat-arrow">ir a sección &darr;</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryNav;