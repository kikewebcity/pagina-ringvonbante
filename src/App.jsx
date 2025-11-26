import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// --- IMPORTACIONES DE COMPONENTES (Barra, Pie, Botón) ---
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppBtn from './components/WhatsAppBtn'; 

// --- IMPORTACIONES DE PÁGINAS ---
import Home from './pages/Home';
import Accesorios from './pages/Accesorios';
import Motos from './pages/Motos'; // <--- 1. IMPORTAS LA NUEVA PÁGINA DE MOTOS

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        {/* Navegación fija arriba */}
        <Header />

        {/* Sistema de Rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Rutas de páginas internas */}
          <Route path="/accesorios" element={<Accesorios />} />    
          <Route path="/motos" element={<Motos />} /> {/* <--- 2. AGREGAS LA RUTA */}
          
          {/* Cuando crees las demás, las agregas así:
          <Route path="/escultura" element={<Escultura />} />
          <Route path="/reciclados" element={<Reciclados />} />
          */}
        </Routes>

        {/* Elementos fijos globales */}
        <WhatsAppBtn />
        <Footer />
        
      </div>
    </BrowserRouter>
  );
}

export default App;