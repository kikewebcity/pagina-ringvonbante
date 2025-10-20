import React from 'react';
import heroImage from '../assets/hero-background.webp'; // Asegúrate de tener una imagen de fondo

function Hero() {
    return (
        <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
            <h1>RINGVONBANTE</h1>
            <p>El Espiritu Indomable Hecho Joya </p>
            <button className="btn-light">Conócenos</button>
        </section>
    );
}

export default Hero;
