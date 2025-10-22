import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Layout from "./components/layout.jsx";
import Home from './pages/Home.jsx';
import Anillos from './pages/Anillos.jsx';
import Collares from './pages/Collares.jsx';
import PiezasUnicas from './pages/PiezasUnicas.jsx'
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
          <Route path="piezas-unicas" element={<PiezasUnicas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;