import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Layout from "./components/layout.jsx";
import Home from './pages/Home.jsx';
// --- FIN DE LA CORRECCIÓN ---

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;