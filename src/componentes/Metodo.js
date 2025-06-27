import { useNavigate } from 'react-router-dom';
import './Metodo.css';

function Metodo() {
  const navigate = useNavigate();

  const irParaMetodo = () => {
    navigate('/sobre-galc/metodo');
  };

  return (
    <div className="btnPai">
      <button className="btnMetodo" onClick={irParaMetodo}>
        Método de Polya
      </button>
    </div>
  );
}

export default Metodo;
