import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Problemas from './pages/Problemas';


function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/problemas" element={<Problemas />} />

    </Routes>
  );
}

export default MainRoutes;
