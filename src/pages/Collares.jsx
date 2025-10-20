import React from 'react';
import ProductDisplay from '../components/ProductDisplay.jsx';

// Asegúrate de tener estas imágenes en tu carpeta src/assets
import collar1_view1 from '../assets/collar1_view1.webp';
import collar1_view2 from '../assets/collar1_view2.webp';
import collar2_view1 from '../assets/collar2_view1.webp';
import collar2_view2 from '../assets/collar2_view2.webp';
import collar3_view1 from '../assets/collar3_view1.webp';
import collar3_view2 from '../assets/collar3_view2.webp';
import collar4_view1 from '../assets/collar4_view1.webp';
import collar4_view2 from '../assets/collar4_view2.webp';

function Collares() {
    return (
        <div className="page-container">
            <h1 className="page-title">COLLARES</h1>

            <ProductDisplay
                image1={collar1_view1}
                image2={collar1_view2}
                title="COLECCIÓN"
                description="Equilibrio de luz y sombra. Este talismán te recordará la dualidad de la naturaleza y la belleza en la imperfección."
            />

            <ProductDisplay
                image1={collar2_view1}
                image2={collar2_view2}
                title="COLECCIÓN"
                description="Forjado en el corazón de un volcán, este collar es un símbolo de fuerza y resiliencia. Un recordatorio de que puedes superar cualquier adversidad."
            />

            <ProductDisplay
                image1={collar3_view1}
                image2={collar3_view2}
                title="COLECCIÓN"
                description="Inspirado en la armadura de los antiguos guerreros, este collar es un emblema de coraje y protección en tu viaje."
            />

            <ProductDisplay
                image1={collar4_view1}
                image2={collar4_view2}
                title="COLECCIÓN"
                description="Un fragmento del cosmos en tu mano. Sus gemas reflejan la inmensidad del universo y tu conexión con las estrellas."
            />
        </div>
    );
}

export default Collares;