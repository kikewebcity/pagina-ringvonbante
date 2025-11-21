import React from 'react';

// --- COMPONENTES ---
import HeroSlider from '../components/HeroSlider';
import CategoryNav from '../components/CategoryNav'; // <--- El nuevo submenú
import FeaturedCard from '../components/FeaturedCard';

// --- IMÁGENES ---
// (Asegúrate de que estos nombres coincidan con los archivos en tu carpeta assets)
import producto1 from '../assets/producto1.webp';
import producto2 from '../assets/producto2.webp';
import producto3 from '../assets/producto3.webp';
// Si usas las versiones hover (si no las tienes, borra estas 3 líneas):
import producto1Hover from '../assets/producto1-hover.webp';
import producto2Hover from '../assets/producto2-hover.webp';
import producto3Hover from '../assets/producto3-hover.webp';
import quienesSomosImg from '../assets/quienes-somos.jpg';

function Home() {
  return (
    <>
      {/* 1. SLIDER PRINCIPAL (Portada) */}
      <HeroSlider />

      {/* 2. SUBMENÚ DE NAVEGACIÓN RÁPIDA (Tira negra) */}
      <CategoryNav />

      {/* 3. SECCIÓN DE INTRODUCCIÓN / MANIFIESTO */}
      <section className="intro-section">
        <p>
          Ringbonvante, concebido por Alfredo Rodríguez, es una marca de joyería de
          autor que redefine el concepto de adorno personal.
        </p>
      </section>

      {/* 4. CONTENIDO PRINCIPAL */}
      <main>
        <h2 className="section-title">COLECCIÓN</h2>

        {/* Grilla de productos destacados */}
        {/* Nota: Agregué un estilo inline simple para asegurar que se pongan uno al lado del otro */}
        <div className="products-grid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
            
            {/* Tarjeta 1 */}
            <FeaturedCard 
              imageSrc={producto1}
              hoverImageSrc={producto1Hover} 
              title="COTA DE LUNA"
              description="Captura la luz de la noche en tu mano. Este talismán te ayudará a encontrar la paz."
            />

            {/* Tarjeta 2 (Ejemplo) */}
            <FeaturedCard 
              imageSrc={producto2}
              hoverImageSrc={producto2Hover}
              title="ANILLO ETERNO"
              description="Forjado en fuego y tiempo, un símbolo de resistencia y elegancia bruta."
            />

            {/* Tarjeta 3 (Ejemplo) */}
            <FeaturedCard 
              imageSrc={producto3}
              hoverImageSrc={producto3Hover}
              title="PULSERA INDUSTRIAL"
              description="Eslabones de historia reciclada. La belleza de lo imperfecto."
            />
        </div>

        {/* SECCIÓN QUIENES SOMOS / EL TALLER */}
        <div className="quienes-somos-section">
            <div className="image-container">
                {/* Si no tienes la imagen aún, esto mostrará un cuadro vacío pero no romperá la página */}
                {quienesSomosImg && <img src={quienesSomosImg} alt="Taller Ringbonvante" />}
            </div>
            <div className="text-container">
                <h2>EL TALLER</h2>
                <p>
                    En el corazón del ruido y el metal, forjamos piezas que no solo adornan,
                    sino que protegen. Cada golpe de martillo es una declaración de intenciones.
                    Utilizamos materiales recuperados y plata de ley para crear obras que cuentan historias.
                </p>
            </div>
        </div>

      </main>
    </>
  );
}

export default Home;