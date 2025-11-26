import React from 'react';
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

      <main>
        <BentoGrid />
      </main>
    </>
  );
}

export default Home;