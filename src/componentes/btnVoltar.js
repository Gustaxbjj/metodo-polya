import { useNavigate } from 'react-router-dom';
import './btnVoltar.css';

function BtnVoltar() {
  const navigate = useNavigate();

  const voltarParaAnterior = () => {
    navigate(-1); 
  };

  return (
    <div className="btnTopVolar">
      <button className="btnVoltar" onClick={voltarParaAnterior}>
        Voltar
      </button>
    </div>
  );
}

export default BtnVoltar;