import './Home.css';
import BtnSobreoGalc from '../componentes/btnSobreoGalc';
import LogoGalc from '../img/logo-galc.png';

function Home() {
    return (
        <div className='home'>

            <div className='logo'>
               <img className="logo" src={LogoGalc} alt="LogoGalc" />          
            </div>
     
            <BtnSobreoGalc/>

        </div>
    )
}
export default Home;