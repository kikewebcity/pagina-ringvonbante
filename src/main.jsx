// src/main.jsx (CORRECTO)
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* <-- Renderiza App directamente, sin el router */}
  </React.StrictMode>,
)