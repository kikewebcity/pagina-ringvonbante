// src/pages/Collares.jsx

import React from 'react';
import ProductDisplay from '../components/ProductDisplay.jsx';

// Importa tus imágenes
import collar1_view1 from '../assets/collar1_view1.webp';
import collar1_view2 from '../assets/collar1_view2.webp';
import collar2_view1 from '../assets/collar2_view1.webp';
import collar2_view2 from '../assets/collar2_view2.webp';
import collar3_view1 from '../assets/collar3_view1.webp';
import collar3_view2 from '../assets/collar3_view2.webp';
import collar4_view1 from '../assets/collar4_view1.webp';
import collar4_view2 from '../assets/collar4_view2.webp';

// 1. Define tus datos en un array de objetos
const collaresData = [
    {
        id: 1,
        image1: collar1_view1,
        image2: collar1_view2,
        title: "COLECCIÓN DUALIDAD", // <-- Títulos más descriptivos
        description: "Equilibrio de luz y sombra. Este talismán te recordará la dualidad de la naturaleza y la belleza en la imperfección."
    },
    {
        id: 2,
        image1: collar2_view1,
        image2: collar2_view2,
        title: "COLECCIÓN VOLCÁNICA",
        description: "Forjado en el corazón de un volcán, este collar es un símbolo de fuerza y resiliencia. Un recordatorio de que puedes superar cualquier adversidad."
    },
    {
        id: 3,
        image1: collar3_view1,
        image2: collar3_view2,
        title: "COLECCIÓN GUERRERO",
        description: "Inspirado en la armadura de los antiguos guerreros, este collar es un emblema de coraje y protección en tu viaje."
    },
    {
        id: 4,
        image1: collar4_view1,
        image2: collar4_view2,
        title: "COLECCIÓN COSMOS",
        description: "Un fragmento del cosmos en tu mano. Sus gemas reflejan la inmensidad del universo y tu conexión con las estrellas."
    }
];

function Collares() {
    return (
        // Las clases 'page-container' y 'page-title' están bien en App.css
        // porque son clases "globales" de layout.
        <div className="page-container">
            <h1 className="page-title">COLLARES</h1>

            {/* 2. Mapea el array y renderiza un ProductDisplay por cada item */}
            {collaresData.map(collar => (
                <ProductDisplay
                    key={collar.id}
                    image1={collar.image1}
                    image2={collar.image2}
                    title={collar.title}
                    description={collar.description}
                />
            ))}
        </div>
    );
}

export default Collares;