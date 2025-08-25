import './QuestoesGrau1.css';
import TextQtoes from '../componentes/textQtoes';
import  BtnQnUm from '../componentes/primeiroGrau/equa1js/btnQnUm';
import galcImg from '../img/galcImg.png';
function QuestoesGrau1() {
  return (
    <div className='homeQtoes'>

     <div className='logoPai'>
                 <img className="logoGpro" src={galcImg} alt="" /> 
     </div >
           <TextQtoes />
          < BtnQnUm/>
    </div>
  
);
}

export default QuestoesGrau1;
