import { useNavigate } from 'react-router-dom';
import '../eq1css/q1.css'

function BtnQnUm() {
  const navigate = useNavigate();

  const irParaQuestaoUm = () => {
    navigate('/sobre-galc/metodo');
  };

  return (
    <div className="btnPai">
      <button className="btnquestao" onClick={irParaQuestaoUm}>
        Questão 1
      </button>
    </div>
  );
}

export default BtnQnUm;