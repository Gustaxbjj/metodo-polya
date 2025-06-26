import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SobreGalc from './pages/SobreGalc';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre-galc" element={<SobreGalc />} />
    </Routes>
  );
}

export default MainRoutes;
