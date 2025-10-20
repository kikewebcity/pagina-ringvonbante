import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// --- CORRECCIÓN AQUÍ: Añade .jsx a las rutas ---
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Anillos from './pages/Anillos.jsx';
import Collares from './pages/Collares.jsx';
// --- FIN DE LA CORRECCIÓN ---

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="anillos" element={<Anillos />} />
          <Route path="collares" element={<Collares />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;