import './Home.scss'
import { useSelector } from 'react-redux'
import RainSwitch from '../RainSwitch/RainSwitch'
const Home = () => {
    const lightMode = useSelector((state)=>state.LightSwitchModeState)
    const background = lightMode.mode
    console.log(background)
    return ( 
    <>  
        {/* Normal - Clear */}
        <img src="/assets/img/japan.jpg" 
        alt="" 
        className={background}
        />
        {/* Light - CLear */}
        {/* Normal - Rain */}
        {/* Light - Rain */}
       <RainSwitch/>
    </> 
    );
}
 
export default Home;