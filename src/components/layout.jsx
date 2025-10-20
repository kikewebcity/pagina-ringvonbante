// src/components/Layout.jsx (CORRECTO)

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

function Layout() {
  return (
    <>
      <Header />
      <Outlet /> {/* <-- El Outlet ahora es libre */}
      <Footer />
    </>
  );
}

export default Layout;