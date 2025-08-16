import { useNavigate } from 'react-router-dom';
import './btnEq1.css';

function BtnEq1() {
  const navigate = useNavigate();

  const irParaQuestoes = () => {
    navigate('/questoes'); // agora bate com a rota
  };

  return (
    <div className="btnPai">
      <button className="btnEq1" onClick={irParaQuestoes}>
        Equação 1º grau
      </button>
    </div>
  );
}

export default BtnEq1;