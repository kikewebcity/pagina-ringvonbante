// src/pages/PiezasUnicas.jsx

import React from 'react';

// 1. Importa TODOS los componentes que usarás
import FeaturedCard from '../components/FeaturedCard.jsx';
import ImageBanner from '../components/ImageBanner.jsx';
import TextBanner from '../components/TextBanner.jsx';

// 2. Importa TODAS las imágenes para esta página
// (¡Asegúrate de tener estas imágenes en tu carpeta /assets!)
import bannerMotoDesert from '../assets/banner-moto-desert.webp';
import bannerMotoBW from '../assets/banner-moto-bw.webp';
import bannerMotoBlack from '../assets/banner-moto-black.webp';
import bannerBici from '../assets/banner-bici-original.webp';
import piezaGato from '../assets/tanque.webp'; // La del gato en el tanque
import piezaGuante from '../assets/anillo-guante.webp'; // La del anillo en el guante

function PiezasUnicas() {
    return (
        // Usamos 'main' pero sin 'page-container' para que sea de ancho completo
        <main className="piezas-unicas-page">

            {/* --- Sección 1: Moto Desierto --- */}
            <ImageBanner src={bannerMotoDesert} alt="Moto en el desierto" />

            {/* --- Sección 2: Texto --- */}
            <TextBanner>
                Inspiración en la ruta, el polvo del desierto y el rugido del motor.
            </TextBanner>

            {/* --- Sección 3: Moto B&W --- */}
            <ImageBanner src={bannerMotoBW} alt="Detalles de motor" />

            {/* --- Sección 4: Texto --- */}
            <TextBanner>
                Piezas forjadas con la misma dedicación y atención al detalle que una máquina Kustom.
            </TextBanner>

            {/* --- Sección 5: PIEZA 1 (Gato/Tanque) --- */}
            <FeaturedCard
                imageSrc={piezaGato} // <-- IMAGEN CORRECTA
                title="ANILLO TALISMÁN"
                description="Forjado a mano en plata .925, este anillo captura la esencia protectora del felino. Una pieza única con ojos de obsidiana."
            />

            {/* --- Sección 6: Moto Black --- */}
            <ImageBanner src={bannerMotoBlack} alt="Moto Kustom negra" />

            {/* --- Sección 7: Texto --- */}
            <TextBanner>
                El legado no se hereda, se construye. Cada marca en el metal cuenta una historia de resistencia.
            </TextBanner>

            {/* --- Sección 8: PIEZA 2 (Guante) --- */}
            <FeaturedCard
                imageSrc={piezaGuante} // <-- IMAGEN CORRECTA
                title="ANILLO LEGADO"
                description="Inspirado en los guantes de trabajo, un símbolo de la herencia y el esfuerzo. Oro de 18k con incrustaciones de turquesa."
                reverse={true} // <-- Con el reverse
            />

            {/* --- Sección 9: Bici --- */}
            <ImageBanner src={bannerBici} alt="Bicicleta antigua" />

        </main>
    );
}

export default PiezasUnicas;