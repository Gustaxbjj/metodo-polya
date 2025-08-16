import './Questoes.css';
import BntEq1 from '../componentes/btnEq1';
import LogoGalc from '../img/logo-galc-_2_.svg';
import TextQtoes from '../componentes/textQtoes'

function Questoes() {
  return (
    <div className='homeQtoes'>

     <div className='logoPaiPro'>
               <img className="logo" src={LogoGalc} alt="LogoGalc" />   
     </div>
           <TextQtoes />
          

    </div>
  );
}

export default Questoes;
