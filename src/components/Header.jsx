// src/components/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // <-- ¡AÑADE ESTA LÍNEA!
import logo from '../assets/logo-ringvonbante.png';
import { FiUser, FiSearch, FiShoppingCart } from 'react-icons/fi';

function Header() {
    return (
        <header className="main-header">
            <div className="header-container">
                <div className="header-left">
                    <Link to="/">
                        <img src={logo} alt="Ringvonbante Logo" className="logo" />
                    </Link>
                </div>
                <nav className="header-nav">
                    <Link to="/">Inicio</Link>
                    <div className="nav-item dropdown">
                        <span className="nav-link">Colecciones</span>
                        <ul className="dropdown-menu">
                            <li><Link to="/anillos">Anillos</Link></li>
                            <li><Link to="/collares">Collares</Link></li>
                            <li><Link to="/piezas-unicas">Piezas Únicas</Link></li>
                        </ul>
                    </div>

                    <Link to="/cursos">Cursos</Link>
                    <Link to="/contacto">Contacto</Link>
                </nav>

                <div className="header-right">
                    <FiUser className="icon" />
                    <FiSearch className="icon" />
                    <FiShoppingCart className="icon" />
                </div>
            </div>
        </header>
    );
}

export default Header;