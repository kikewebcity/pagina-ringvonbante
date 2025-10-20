// src/components/ProductCard.jsx

import React, { useState } from 'react'; // Importa useState

function ProductCard({ image, hoverImage, title, description, reverse }) { // Añade hoverImage a las props
    const cardClassName = `product-card ${reverse ? 'reverse' : ''}`;

    // Estado para controlar si el ratón está sobre la tarjeta
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={cardClassName}
            onMouseEnter={() => setIsHovered(true)} // Activa el hover
            onMouseLeave={() => setIsHovered(false)} // Desactiva el hover
        >
            <div className="product-image-container">
                {/* Muestra la hoverImage si está en hover y existe, de lo contrario muestra la imagen normal */}
                <img src={isHovered && hoverImage ? hoverImage : image} alt={title} />
            </div>

            <div className="product-info-container">
                <div className="content-wrapper">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <button className="btn-dark">Ver Producto</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;