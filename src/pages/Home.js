import './Home.css';
import BtnSobreoGalc from '../componentes/btnSobreoGalc';
import galcImg from '../img/galcImg.png';
import ifalImg from '../img/IfaliMG.png';

import TextHome from '../componentes/textHome';
import Metodo from '../componentes/Metodo';
import Resolucao from '../componentes/Rosolucao';

function Home() {
    return (
    <div className='home'>

            <div className='logoPai'>

               <img className="logoIfal" src={ifalImg} alt=""/>  
                 <img className="logoGpro" src={galcImg} alt="" /> 
             
            </div>

            <TextHome/>          
     
     <div className='PaiButton'>
        
        <div className='btnGalc'>
            <BtnSobreoGalc/>
         </div>

          <div className='Metodo'>
            <Metodo/>
         </div>

            <div className='Resolucao'>
            <Resolucao/>
         </div>
     </div>

    </div>
    )
}
export default Home;