// src/pages/Problemas.js
import './Problemas.css';
import BntEq1 from '../componentes/btnEq1';
import LogoGalc from '../img/logo-galc-_2_.svg';
import TextProblemas from '../componentes/textProblemas';

function Problemas() {
  return (
    <div className='homePro'>

            <div className='logoPaiPro'>
               <img className="logo" src={LogoGalc} alt="LogoGalc" />   
     </div>
          <TextProblemas/>   
           <BntEq1/>

    </div>
  );
}

export default Problemas;


