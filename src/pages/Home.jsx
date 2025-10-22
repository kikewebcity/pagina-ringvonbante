import React from 'react';

// 1. CAMBIO: Importamos el NUEVO componente
import FeaturedCard from '../components/FeaturedCard.jsx';
import Hero from '../components/Hero.jsx';

// Importa tus imágenes (esto queda igual)
import producto1 from '../assets/producto1.webp';
import producto2 from '../assets/producto2.webp';
import producto3 from '../assets/producto3.webp';
import producto1Hover from '../assets/producto1-hover.webp';
import producto2Hover from '../assets/producto2-hover.webp';
import producto3Hover from '../assets/producto3-hover.webp';
import quienesSomosImg from '../assets/quienes-somos.jpg';

function Home() {
    return (
        <>
            <Hero />
            <section className="intro-section">
                <p>
                    Ringvonbante, concebido por Alfredo Rodriguez, es una marca de Joyería de
                    autor que redefine el concepto de adorno personal.
                </p>
            </section>

            {/* Usamos <main> centrado, esto está perfecto */}
            <main>
                <h2 className="section-title">COLECCIÓN</h2>

                {/* 2. CAMBIO: Usamos <FeaturedCard /> */}
                <FeaturedCard
                    imageSrc={producto1}         // <-- 'image' ahora es 'imageSrc'
                    hoverImageSrc={producto1Hover} // <-- 'hoverImage' ahora es 'hoverImageSrc'
                    title="GOTA DE LUNA"
                    description="Captura la luz de la noche en tu mano. Este talismán te ayudará a encontrar la paz en tiempos de caos, recordándote la calma y el misterio de la luna llena."
                />

                {/* 3. CAMBIO: Usamos <FeaturedCard /> */}
                <FeaturedCard
                    imageSrc={producto2}
                    hoverImageSrc={producto2Hover}
                    title="COTA DE LUNA"
                    description="Captura la luz de la noche en tu mano. Este talismán te ayudará a encontrar la paz en tiempos de caos, recordándote la calma y el misterio de la luna llena."
                    reverse={true} // <-- La prop 'reverse' funciona igual
                />

                <div className="quienes-somos-section">
                    {/* ... tu sección de "Quiénes Somos" queda igual ... */}
                </div>

                {/* 4. CAMBIO: Usamos <FeaturedCard /> */}
                <FeaturedCard
                    imageSrc={producto3}
                    hoverImageSrc={producto3Hover}
                    title="CONSTELACIÓN GUARDIANA"
                    description="Lleva un fragmento del cosmos contigo..."
                />
            </main>
        </>
    );
}

export default Home;