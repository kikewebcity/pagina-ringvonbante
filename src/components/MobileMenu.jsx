// src/components/MobileMenu.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MobileMenu() {
    const [open, setOpen] = useState(false);

    return (
        <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="text-white">
                ☰
            </button>
            {open && (
                <div className="absolute top-16 left-0 w-full bg-gray-800 text-white p-4 flex flex-col gap-4">
                    <Link to="/" onClick={() => setOpen(false)}>Inicio</Link>
                    <Link to="/shop" onClick={() => setOpen(false)}>Tienda</Link>
                    <Link to="/blog" onClick={() => setOpen(false)}>Blog</Link>
                    <Link to="/contact" onClick={() => setOpen(false)}>Contacto</Link>
                </div>
            )}
        </div>
    );
}
