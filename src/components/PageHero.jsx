import React from 'react';
import './PageHero.css';

const PageHero = ({ title, subtitle, bgImage }) => {
  return (
    <div 
      className="page-hero" 
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="page-hero-overlay">
        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHero;