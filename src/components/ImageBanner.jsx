import React from 'react';
import styles from './ImageBanner.module.css';

function ImageBanner({ src, alt = '' }) {
    return (
        <section className={styles.banner}>
            <img src={src} alt={alt} />
        </section>
    );
}

export default ImageBanner;