import './Home.css';
import BtnSobreoGalc from '../componentes/btnSobreoGalc';
import LogoGalc from '../img/logo-galc (2).png';
import logoifal from '../img/logo-ifal.jpg';
import TextHome from '../componentes/textHome';
import Metodo from '../componentes/Metodo';
import Resolucao from '../componentes/Rosolucao';

function Home() {
    return (
    <div className='home'>

            <div className='logoPai'>

               <img className="logoIfal" src={logoifal} alt="Logoifal" />  
               <img className="logo" src={LogoGalc} alt="LogoGalc" />          
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