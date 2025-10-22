import React, { useState } from 'react'; // 1. Importa useState
import styles from './FeaturedCard.module.css';

/**
 * Tarjeta para piezas destacadas, AHORA CON HOVER
 * @param {object} props
 * @param {string} props.imageSrc - Imagen principal
 * @param {string} [props.hoverImageSrc] - Imagen que se muestra al hacer hover (opcional)
 * @param {string} props.title - Título
 * @param {string} props.description - Descripción
 * @param {boolean} [props.reverse=false] - Invierte el orden (imagen a la derecha)
 */
function FeaturedCard({ imageSrc, hoverImageSrc, title, description, reverse = false }) {

    // 2. Añade el estado para controlar el hover
    const [isHovered, setIsHovered] = useState(false);

    // Construye las clases CSS
    const cardClasses = `${styles.card} ${reverse ? styles.reverse : ''}`;

    return (
        <article
            className={cardClasses}
            // 3. Añade los eventos para actualizar el estado
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

            <div className={styles.imageContainer}>
                {/* 4. Lógica para cambiar la imagen */}
                <img
                    src={isHovered && hoverImageSrc ? hoverImageSrc : imageSrc}
                    alt={title}
                />
            </div>

            <div className={styles.infoContainer}>
                <div className={styles.infoWrapper}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <button className={styles.btnDark}>VER DETALLES</button>
                </div>
            </div>

        </article>
    );
}

export default FeaturedCard;