import { useNavigate } from 'react-router-dom';
import '../eq1css/q1.css'

function BtnQ1() {
  const navigate = useNavigate();

  const irParaQuestao = () => {
    navigate('/sobre-galc/metodo');
  };

  return (
    <div className="btnPai">
      <button className="btnquestao" onClick={irParaQuestao}>
        Questão 1
      </button>
    </div>
  );
}

export default BtnQ1;