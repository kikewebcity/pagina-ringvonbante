// src/components/Nav.jsx
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link to="/" className="hover:text-accent">Inicio</Link>
            <Link to="/shop" className="hover:text-accent">Tienda</Link>
            <Link to="/blog" className="hover:text-accent">Blog</Link>
            <Link to="/contact" className="hover:text-accent">Contacto</Link>
        </nav>
    );
}
