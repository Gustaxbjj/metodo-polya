import './QuestoesGrau1.css';

import LogoGalc from '../img/logo-galc-_2_.svg';
import TextQtoes from '../componentes/textQtoes';
import BtnQ1 from '../componentes/primeiroGrau/equa1js/btnQ1';

function QuestoesGrau1() {
  return (
    <div className='homeQtoes'>

     <div className='logoPaiPro'>
               <img className="logo" src={LogoGalc} alt="LogoGalc" />   
     </div >
           <TextQtoes />
              <BtnQ1/>
    </div>
  
);
}

export default QuestoesGrau1;
