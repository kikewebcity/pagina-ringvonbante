import React from 'react';
import './CategoryNav.css';

// --- IMPORTACIÓN DE ICONOS (Verificados con tu lista de archivos) ---
import iconAnillo from '../assets/iconoanillo.webp';
import iconMoto from '../assets/iconmoto.webp';
import iconEscultura from '../assets/iconescultura.webp';
import iconFuste from '../assets/iconfuste.webp';
import iconReciclado from '../assets/iconreciclado.webp';

const CategoryNav = () => {
  
  // Función de Scroll Suave
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const categories = [
    { 
      id: 1, 
      title: 'ACCESORIOS', 
      img: iconAnillo, // Variable importada arriba
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
              {/* Si la imagen no carga, mostramos un cuadro gris de respaldo */}
              {cat.img ? (
                <img src={cat.img} alt={cat.title} />
              ) : (
                <div style={{width:'100%', height:'100%', background:'#333'}}></div>
              )}
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