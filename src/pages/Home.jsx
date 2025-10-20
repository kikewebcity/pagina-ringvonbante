// src/pages/Home.jsx (CORREGIDO)
import React from 'react';

// Importa los componentes y las imágenes
import Hero from '../components/Hero.jsx';
import ProductCard from '../components/ProductCard.jsx';
import producto1 from '../assets/producto1.webp';
import producto2 from '../assets/producto2.webp';
import producto3 from '../assets/producto3.webp';
import producto1Hover from '../assets/producto1-hover.webp';
import producto2Hover from '../assets/producto2-hover.webp';
import producto3Hover from '../assets/producto3-hover.webp'; // <-- ESTA LÍNEA FALTABA
import quienesSomosImg from '../assets/quienes-somos.jpg';

function Home() {
    return (
        <>
            {/* Estas secciones son de ANCHO COMPLETO y quedan FUERA de <main> */}
            <Hero />
            <section className="intro-section">
                <p>
                    Ringvonbante, concebido por Alfredo Rodriguez, es una marca de Joyería de
                    autor que redefine el concepto de adorno personal.
                </p>
            </section>

            {/* Este es el contenedor principal para el contenido CENTRADO */}
            <main>
                <h2 className="section-title">COLECCIÓN</h2>

                <ProductCard
                    image={producto1}
                    hoverImage={producto1Hover}
                    title="COTA DE LUNA"
                    description="Captura la luz de la noche en tu mano. Este talismán te ayudará a encontrar la paz en tiempos de caos, recordándote la calma y el misterio de la luna llena."
                />
                <ProductCard
                    image={producto2}
                    hoverImage={producto2Hover}
                    title="COTA DE LUNA"
                    description="Captura la luz de la noche en tu mano. Este talismán te ayudará a encontrar la paz en tiempos de caos, recordándote la calma y el misterio de la luna llena."
                    reverse={true}
                />
                <div className="quienes-somos-section">
                    <div className="image-container">
                        <img src={quienesSomosImg} alt="Nuestro taller de joyería" />
                    </div>
                    <div className="text-container">
                        <h2>QUIENES SOMOS</h2>
                        <p>Aquí, en el corazón de nuestro taller, nace el alma de RINGVONBANTE...</p>
                    </div>
                </div>
                <ProductCard
                    image={producto3}
                    hoverImage={producto3Hover} // <-- AHORA ESTA VARIABLE SÍ EXISTE
                    title="CONSTELACIÓN GUARDIANA"
                    description="Lleva un fragmento del cosmos contigo..."
                />
            </main>
        </>
    );
}

export default Home;