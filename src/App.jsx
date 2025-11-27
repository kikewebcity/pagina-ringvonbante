import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// --- COMPONENTES ---
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppBtn from './components/WhatsAppBtn'; 

// --- PÁGINAS ---
import Home from './pages/Home';
import Accesorios from './pages/Accesorios';
import Escultura from './pages/Escultura';
import Fustes from './pages/Fustes'; 
import Reciclados from './pages/Reciclados';
import Contacto from './pages/Contacto';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Rutas de páginas internas */}
          <Route path="/accesorios" element={<Accesorios />} />
          <Route path="/escultura" element={<Escultura />} />
          <Route path="/fustes" element={<Fustes />} />
          <Route path="/reciclados" element={<Reciclados />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

        <WhatsAppBtn />
        <Footer />
        
      </div>
    </BrowserRouter>
  );
}

export default App;