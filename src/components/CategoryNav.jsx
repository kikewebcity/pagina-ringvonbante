import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryNav.css';

// --- IMPORTA AQUÍ TUS IMÁGENES ---
// Puedes usar las mismas variables que en HeroSlider para probar
// import motoImg from '../assets/moto_banner.jpg';

// --- IMÁGENES TEMPORALES (Reemplázalas con tus imports o URLs) ---
const imgAccesorios = "src/assets/iconanillowebp.webp"; 
const imgMotos = "src/assets/iconmoto.webp";
const imgEscultura = "src/assets/iconescultura.webp";
const imgFustes = "src/assets/iconfuste.webp";
const imgReciclados = "src/assets/iconreciclado.webp";

const CategoryNav = () => {
  const categories = [
    { 
      id: 1, 
      title: 'ACCESORIOS', 
      img: imgAccesorios, // <-- Aquí iría tu variable importada
      link: '/accesorios' 
    },
    { 
      id: 2, 
      title: 'MOTOS', 
      img: imgMotos, 
      link: '/motos' 
    },
    { 
      id: 3, 
      title: 'ESCULTURA', 
      img: imgEscultura, 
      link: '/escultura' 
    },
    { 
      id: 4, 
      title: 'FUSTES', 
      img: imgFustes, 
      link: '/fustes' 
    },
    { 
      id: 5, 
      title: 'RECICLADOS', 
      img: imgReciclados, 
      link: '/reciclados' 
    },
  ];

  return (
    <section className="category-nav-section">
      <div className="category-nav-container">
        {categories.map((cat) => (
          <Link to={cat.link} key={cat.id} className="category-item">
            <div className="cat-image-wrapper">
              <img src={cat.img} alt={cat.title} />
            </div>
            <span className="cat-title">{cat.title}</span>
            <span className="cat-arrow">ver más &rarr;</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryNav;