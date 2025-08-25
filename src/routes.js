import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Voltar from './componentes/btnVoltar';
import Home from './pages/Home';
import Problemas from './pages/Problemas';
import Questoes from './pages/Questoes';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/problemas" element={<Problemas />} />
       <Route path="/questoes" element={<Questoes/>} />
       <Route path="/voltar" element={< Voltar />} />
    </Routes>
  );
}

export default MainRoutes;
