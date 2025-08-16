// src/pages/Resolucao.js
import { useNavigate } from 'react-router-dom';
import './btnEq1.css';

function BtnEq1() {
  const navigate = useNavigate();

  const irParaQuestões = () => {
    navigate('/questoes'); // agora bate com a rota
  };

  return (
    <div className="btnPai">
      <button className="btnEq1" onClick={irParaQuestões}>
        Equação 1º grau
      </button>
    </div>
  );
}

export default BtnEq1;