// src/pages/Resolucao.js
import { useNavigate } from 'react-router-dom';
import './Resolucao.css';

function Resolucao() {
  const navigate = useNavigate();

  const irParaProblemas = () => {
    navigate('/problemas'); // agora bate com a rota
  };

  return (
    <div className="btnPai">
      <button className="btnProblema" onClick={irParaProblemas}>
        Problemas
      </button>
    </div>
  );
}

export default Resolucao;
