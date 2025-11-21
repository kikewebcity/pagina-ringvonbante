import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryNav.css';

// Imágenes de ejemplo (luego cámbialas por las tuyas pequeñas)
const imgAccesorios = "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=150&h=150&fit=crop";
const imgMotos = "https://images.unsplash.com/photo-1558981403-c5f9890a337f?w=150&h=150&fit=crop";
const imgEscultura = "https://images.unsplash.com/photo-1561839561-b13bcfe95249?w=150&h=150&fit=crop";
const imgReciclados = "https://images.unsplash.com/photo-1535063406830-18939935b62f?w=150&h=150&fit=crop";

const CategoryNav = () => {
  const categories = [
    { id: 1, title: 'ACCESORIOS', img: imgAccesorios, link: '/accesorios' },
    { id: 2, title: 'MOTOS', img: imgMotos, link: '/motos' },
    { id: 3, title: 'ESCULTURA', img: imgEscultura, link: '/escultura' },
    { id: 4, title: 'RECICLADOS', img: imgReciclados, link: '/reciclados' },
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