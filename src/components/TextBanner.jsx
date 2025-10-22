// src/components/TextBanner.jsx

import React from 'react';
import styles from './TextBanner.module.css';

// V V V ASEGÚRATE DE QUE 'title' ESTÉ AQUÍ V V V
function TextBanner({ title, children }) {
    return (
        <section className={styles.textBanner}>

            {/* Esta es la línea 10 que da el error si 'title' no existe */}
            {title && <h2>{title}</h2>}

            <p>{children}</p>

        </section>
    );
}

export default TextBanner;