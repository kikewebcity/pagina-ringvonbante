// src/pages/Anillos.jsx

import React from 'react';
import ProductCard from '../components/ProductCard.jsx';

// --- PASO 1: Importa todas las imágenes que usarás ---
// Asegúrate de tener estas imágenes en tu carpeta src/assets
import anillosHeroImg from '../assets/anillos-hero.webp';
import anillo1 from '../assets/anillo1.webp';
import anillo2 from '../assets/anillo2.webp';
import anillo3 from '../assets/anillo3.webp';
import anillo4 from '../assets/anillo4.webp';
import anillo5 from '../assets/anillo5.webp';

// (Y sus respectivas imágenes para el hover si las tienes)
// import anillo1Hover from '../assets/anillo1-hover.webp';

function Anillos() {
    return (
        <>
            {/* --- PASO 2: La nueva sección de Hero para esta página --- */}
            <section
                className="page-hero"
                style={{ backgroundImage: `url(${anillosHeroImg})` }}
            >
                <h1>RINGVONBANTE</h1>
            </section>

            {/* --- PASO 3: El contenido de la página de Anillos --- */}
            <div className="page-container">
                <h2 className="page-title">ANILLOS</h2>

                {/* Aquí reutilizas tu componente ProductCard para cada anillo */}
                <ProductCard
                    image={anillo1}
                    // hoverImage={anillo1Hover} // Opcional
                    title="COLECCIÓN"
                    description="Equilibrio de luz y sombra. Este talismán te recordará la dualidad de la naturaleza y la belleza en la imperfección."
                />

                <ProductCard
                    image={anillo2}
                    title="COLECCIÓN"
                    description="Forjado en el corazón de un volcán, este anillo es un símbolo de fuerza y resiliencia. Un recordatorio de que puedes superar cualquier adversidad."
                    reverse={true}
                />

                <ProductCard
                    image={anillo3}
                    title="COLECCIÓN"
                    description="Inspirado en la armadura de los antiguos guerreros, este anillo es un emblema de coraje y protección en tu viaje."
                />

                <ProductCard
                    image={anillo4}
                    title="COLECCIÓN"
                    description="Un fragmento del cosmos en tu mano. Sus gemas reflejan la inmensidad del universo y tu conexión con las estrellas."
                    reverse={true}
                />

                <ProductCard
                    image={anillo5}
                    title="COLECCIÓN"
                    description="Este anillo captura la esencia de un tesoro encontrado. Un recordatorio de que la verdadera belleza a menudo se encuentra en lo inesperado."
                />
            </div>
        </>
    );
}

export default Anillos;