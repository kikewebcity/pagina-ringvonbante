import React from 'react';
import PageHero from '../components/PageHero'; 
import './Pages.css'; 

// ==========================================
// 1. IMPORTACIÓN DE IMÁGENES
// ==========================================
// Asegúrate de que los archivos en 'assets' tengan estos nombres exactos:

import banner from '../assets/banner-bitacora.webp';   // La calavera en la mesa
import fotoTaller from '../assets/foto-taller.webp';   // El grupo trabajando
import fotoFilosofia from '../assets/reciclado2.webp'; // La modelo con guitarra

const Bitacora = () => {
  return (
    <div className="page-container">
      
      {/* HEADER */}
      <PageHero 
        title="BITÁCORA" 
        subtitle="Más que una marca, un movimiento de resistencia estética."
        bgImage={banner} 
      />

      <div className="bitacora-wrapper">
        
        {/* SECCIÓN 1: MANIFIESTO */}
        <section className="bitacora-section split-section">
          <div className="text-col">
            <h2>EL MANIFIESTO</h2>
            <p>
              Ringvonbante nace de la necesidad de ir en contra de la producción masiva. 
              En un mundo de plástico y obsolescencia programada, apostamos por lo eterno: 
              <strong>Plata, Bronce, Cuero y Acero.</strong>
            </p>
            <p>
              Cada pieza es una cicatriz de diseño. No buscamos la perfección de la máquina, 
              sino la perfección del carácter. Nuestras joyas y esculturas están hechas para 
              sobrevivirnos.
            </p>
          </div>
          <div className="image-col">
            <img src={fotoFilosofia} alt="Filosofía Cyberpunk - Guitarra Steampunk" />
          </div>
        </section>

        {/* SECCIÓN 2: EL TALLER */}
        <section className="bitacora-section full-section">
          <h2>EL CALOR DEL TALLER</h2>
          <div className="big-image-container">
            <img src={fotoTaller} alt="Equipo trabajando en el taller" />
          </div>
          <p className="caption-text">
            "Aquí no hay líneas de ensamblaje. Cada golpe de martillo, cada fundición y cada pulido 
            pasa por manos humanas que entienden el lenguaje del metal."
          </p>
        </section>

        {/* SECCIÓN 3: CIERRE */}
        <section className="bitacora-section text-center-section">
          <h3>DISEÑO INDUSTRIAL APLICADO AL ARTE</h3>
          <p>
            Alfredo Rodríguez, fundador y director creativo, fusiona la ingeniería de las 
            motos custom con la delicadeza de la alta joyería. El resultado es un estilo 
            inconfundible que llamamos <em>Industrial Barroco</em>.
          </p>
        </section>

      </div>
    </div>
  );
};

export default Bitacora;