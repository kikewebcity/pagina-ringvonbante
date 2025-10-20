// src/components/Footer.jsx

import React from 'react';

function Footer() {
    return (
        <footer className="main-footer">
            <div className="footer-container">
                {/* --- Sección de Newsletter --- */}
                <div className="footer-newsletter">
                    <h3>ÚNETE A LA REVELIÓN</h3>
                    <p>Sé el primero en conocer lanzamientos, piezas únicas y contenido exclusivo.</p>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Introduce tu email aquí..." />
                        <button type="submit">ENVIAR</button>
                    </form>
                </div>

                {/* --- Línea Divisoria --- */}
                <hr className="footer-divider" />

                {/* --- Sección de Columnas --- */}
                <div className="footer-columns">
                    <div className="footer-column">
                        <h4>EXPLORAR</h4>
                        <ul>
                            <li><a href="#colecciones">> Colecciones</a></li>
                            <li><a href="#anillos">> Anillos</a></li>
                            <li><a href="#collares">> Collares</a></li>
                            <li><a href="#piezas-unicas">> Piezas Únicas</a></li>
                            <li><a href="#gift-cards">> Gift Cards</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>SOPORTE Y POLÍTICAS</h4>
                        <ul>
                            <li><a href="#faq">> Preguntas Frecuentes</a></li>
                            <li><a href="#envios">> Envíos y Devoluciones</a></li>
                            <li><a href="#guia">> Guía de las Joyas</a></li>
                            <li><a href="#cuidado">> Cuidado de las Joyas</a></li>
                            <li><a href="#privacidad">> Política de Privacidad</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>RINGVONBANTE</h4>
                        <ul>
                            <li><a href="#historia">> Nuestra Historia</a></li>
                            <li><a href="#proceso">> Proceso Artesanal</a></li>
                            <li><a href="#blog">> Blog / Manifiesto</a></li>
                            <li><a href="#contacto">> Contacto</a></li>
                        </ul>
                        <h4>SÍGUENOS:</h4>
                        {/* Aquí puedes añadir íconos de redes sociales si lo deseas */}
                    </div>
                </div>

                {/* --- Sección de Copyright --- */}
                <div className="footer-copyright">
                    <p>2025 RINGVONBANTE</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
