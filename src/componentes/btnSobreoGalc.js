import { useNavigate } from 'react-router-dom';
import './btnSobreoGalc.css';

function BtnSobreoGalc() {
  const navigate = useNavigate(); // Hook de navegação
  const irParaSobreGalc = () => {
    navigate('/sobre-galc'); // rota que vamos definir nas rotas
  }

  return (
    <div className="btnPai">
      <button className="btnSobreoGalc" onClick={irParaSobreGalc}>
         Galc
      </button>
    </div>
  );
};

export default BtnSobreoGalc;