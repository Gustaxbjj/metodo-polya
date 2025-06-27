//import { useNavigate } from 'react-router-dom';
import './Metodo.css';

function btnMetodo() {
  //const navigate = useNavigate(); // Hook de navegação
  //const irParaMetodo = () => {
    //navigate('/sobre-galc/metodo'); // rota que vamos definir nas rotas
   //  onClick={irParaMetodo}
  

  return (
    <div className="btnPai">
      <button className="btnMetodo">
        Metodo de Polya 
      </button>
    </div>
  );
};

export default btnMetodo;