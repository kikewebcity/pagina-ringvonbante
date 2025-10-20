import React from 'react';

function ProductDisplay({ image1, image2, title, description }) {
    return (
        <div className="product-display">
            <div className="product-display-images">
                <div className="image-wrapper">
                    <img src={image1} alt={`${title} - vista 1`} />
                </div>
                <div className="image-wrapper">
                    <img src={image2} alt={`${title} - vista 2`} />
                </div>
            </div>
            <div className="product-display-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <button className="btn-dark">Ver Producto</button>
            </div>
        </div>
    );
}

export default ProductDisplay;