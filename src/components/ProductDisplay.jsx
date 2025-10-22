// src/components/ProductDisplay.jsx

import React from 'react';
// 1. Importa el archivo CSS Module. ¡El nombre DEBE terminar en .module.css!
import styles from './ProductDisplay.module.css';

// Recibimos las props que ya estás pasando desde Collares.jsx
function ProductDisplay({ image1, image2, title, description }) {
    return (
        // 2. En lugar de className="product-display", usamos {styles.productDisplay}
        <article className={styles.productDisplay}>

            <div className={styles.productDisplayImages}>
                <div className={styles.imageWrapper}>
                    <img src={image1} alt={title} />
                </div>
                <div className={styles.imageWrapper}>
                    <img src={image2} alt={`${title} (vista 2)`} />
                </div>
            </div>

            <div className={styles.productDisplayInfo}>
                <h3>{title}</h3>
                <p>{description}</p>
                {/* Este botón no estaba en tu código, pero sí en tu prototipo.
            Puedes añadirlo aquí. */}
                <button className={styles.btnDark}>VER DETALLES</button>
            </div>

        </article>
    );
}

export default ProductDisplay;