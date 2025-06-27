import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import SobreGalc from './pages/SobreGalc';
import Metodo from './componentes/Metodo';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre-galc" element={<SobreGalc />} />
      <Route path="/sobre-galc/metodo" element={<Metodo />} />
    </Routes>
  );
}

export default MainRoutes;
