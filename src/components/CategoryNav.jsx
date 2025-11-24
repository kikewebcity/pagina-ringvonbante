import React from 'react';
import './CategoryNav.css';

// --- 1. IMPORTAR TUS ICONOS REALES ---
// (Nombres basados en tu lista de archivos)
import iconAnillo from '../assets/iconanillo.webp';
import iconMoto from '../assets/iconmoto.webp';
import iconEscultura from '../assets/iconescultura.webp';
import iconFuste from '../assets/iconfuste.webp';
import iconReciclado from '../assets/iconreciclado.webp';

const CategoryNav = () => {
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const categories = [
    { 
      id: 1, 
      title: 'ACCESORIOS', 
      img: iconAnillo, // <--- Usamos la variable importada
      targetId: 'accesorios' 
    },
    { 
      id: 2, 
      title: 'MOTOS', 
      img: iconMoto, 
      targetId: 'motos' 
    },
    { 
      id: 3, 
      title: 'ESCULTURA', 
      img: iconEscultura, 
      targetId: 'escultura' 
    },
    { 
      id: 4, 
      title: 'FUSTES', 
      img: iconFuste, 
      targetId: 'fustes' 
    },
    { 
      id: 5, 
      title: 'RECICLADOS', 
      img: iconReciclado, 
      targetId: 'reciclados' 
    },
  ];

  return (
    <section className="category-nav-section">
      <div className="category-nav-container">
        {categories.map((cat) => (
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