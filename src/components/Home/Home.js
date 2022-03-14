import './Home.scss'
import { useSelector } from 'react-redux'
import RainSwitch from '../RainSwitch/RainSwitch'
const Home = () => {
    const lightMode = useSelector((state)=>state.LightSwitchModeState)
    const rainMode = useSelector((state)=>state.RainModeState)
    const background = lightMode.mode
    const rain = rainMode.rain
    console.log(background)
    console.log(rain)
    return ( 
    <>  
        <img src="/assets/img/japan.jpg" 
        alt="" 
        className={background}
        />
        <div className={rain}></div>

       <RainSwitch/>
    </> 
    );
}
 
export default Home;