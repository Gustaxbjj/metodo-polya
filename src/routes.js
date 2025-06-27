import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SobreGalc from './pages/SobreGalc';
import Galc from './componentes/Metodo';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre-galc" element={<SobreGalc />} />
      <Route path="/sobre-galc/metodo" element={<Galc />} />
    </Routes>
  );
}

export default MainRoutes;
