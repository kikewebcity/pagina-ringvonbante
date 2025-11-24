import React from 'react';

// --- IMPORTACIÓN DE COMPONENTES ---
import HeroSlider from '../components/HeroSlider';
import CategoryNav from '../components/CategoryNav';
import BentoGrid from '../components/BentoGrid'; 

function Home() {
  return (
    <>
      {/* --- A. PORTADA PRINCIPAL --- */}
      <HeroSlider />

      {/* --- B. MENÚ DE NAVEGACIÓN RÁPIDA (Scroll) --- */}
      <CategoryNav />

      {/* --- C. MANIFIESTO / INTRO --- */}
      <section className="intro-section">
        <p>
          Ringbonvante, concebido por Alfredo Rodríguez, es una marca de joyería de
          autor que redefine el concepto de adorno personal. Diseño Industrial aplicado al arte.
        </p>
      </section>

      {/* --- D. GRILLA DE PRODUCTOS (ACCESORIOS, MOTOS, FUSTES, ETC.) --- */}
      <main>
        <BentoGrid />
      </main>
    </>
  );
}

export default Home;