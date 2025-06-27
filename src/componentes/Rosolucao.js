import { useNavigate } from 'react-router-dom';
import './Resolucao.css';

function Resolucao() {
  const navigate = useNavigate();

  const irParaResolucao = () => {
    navigate('/sobre-galc/resolucao');
  };

  return (
    <div className="btnPai">
      <button className="btnMetodo" onClick={irParaResolucao}>
        Metodo
      </button>
    </div>
  );
}

export default Resolucao;
