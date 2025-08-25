// src/pages/Problemas.js
import './Problemas.css';
import galcImg from '../img/galcImg.png';
import BntEq1 from '../componentes/btnEq1';
import TextProblemas from '../componentes/textProblemas';
import BtnVoltar from '../componentes/btnVoltar';

function Problemas() {
  return (
    <div className='homePro'>

            <div className='logoQtoesg1'>
                 <img className="logoGpro" src={galcImg} alt="" />
            <BtnVoltar className="btnVoltarExtra" />

             </div>
          <TextProblemas/>   

           <BntEq1/>

    </div>
  );
}

export default Problemas;


