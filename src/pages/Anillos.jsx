// src/pages/Anillos.jsx

import React from 'react';
// 1. IMPORTAMOS EL COMPONENTE CORRECTO
import FeaturedCard from '../components/FeaturedCard.jsx';

// --- Importa todas las imágenes ---
// (Asegúrate de tener estas imágenes en tu carpeta src/assets)
import anillosHeroImg from '../assets/anillos-hero.webp';
import anillo1 from '../assets/anillo1.webp';
import anillo2 from '../assets/anillo2.webp';
import anillo3 from '../assets/anillo3.webp';
import anillo4 from '../assets/anillo4.webp';
import anillo5 from '../assets/anillo5.webp';

// (Y sus respectivas imágenes para el hover si las tienes)
// import anillo1Hover from '../assets/anillo1-hover.webp';

// 2. DEFINIMOS LOS DATOS EN UN ARRAY
// (Esto hace que tu código sea mucho más limpio)
const anillosData = [
    {
        id: 1,
        image: anillo1,
        // hoverImage: anillo1Hover, // Opcional
        title: "COLECCIÓN DUALIDAD",
        description: "Equilibrio de luz y sombra. Este talismán te recordará la dualidad de la naturaleza y la belleza en la imperfección."
    },
    {
        id: 2,
        image: anillo2,
        title: "COLECCIÓN VOLCÁNICA",
        description: "Forjado en el corazón de un volcán, este anillo es un símbolo de fuerza y resiliencia. Un recordatorio de que puedes superar cualquier adversidad."
    },
    {
        id: 3,
        image: anillo3,
        title: "COLECCIÓN GUERRERO",
        description: "Inspirado en la armadura de los antiguos guerreros, este anillo es un emblema de coraje y protección en tu viaje."
    },
    {
        id: 4,
        image: anillo4,
        title: "COLECCIÓN COSMOS",
        description: "Un fragmento del cosmos en tu mano. Sus gemas reflejan la inmensidad del universo y tu conexión con las estrellas."
    },
    {
        id: 5,
        image: anillo5,
        title: "COLECCIÓN TESORO",
        description: "Este anillo captura la esencia de un tesoro encontrado. Un recordatorio de que la verdadera belleza a menudo se encuentra en lo inesperado."
    }
];

function Anillos() {
    return (
        <>
            {/* --- Sección de Hero (esto queda igual) --- */}
            <section
                className="page-hero"
                style={{ backgroundImage: `url(${anillosHeroImg})` }}
            >
                <h1>RINGVONBANTE</h1>
            </section>

            {/* --- Contenido de la página --- */}
            <div className="page-container">
                <h2 className="page-title">ANILLOS</h2>

                {/* 3. MAPEAMOS LOS DATOS Y RENDERIZAMOS LAS TARJETAS */}
                {anillosData.map((anillo, index) => (
                    <FeaturedCard
                        key={anillo.id}
                        imageSrc={anillo.image}         // <-- Prop actualizada
                        hoverImageSrc={anillo.hoverImage} // <-- Prop actualizada
                        title={anillo.title}
                        description={anillo.description}
                        // Esto alterna la tarjeta automáticamente (par/impar)
                        reverse={index % 2 === 1}
                    />
                ))}

            </div>
        </>
    );
}

export default Anillos;