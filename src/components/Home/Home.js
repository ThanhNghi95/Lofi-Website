import './Home.scss'
import { useSelector } from 'react-redux'
import RainSwitch from '../RainSwitch/RainSwitch'
import ListMusic from '../ListMusic/ListMusic'
const Home = () => {
    const lightMode = useSelector((state)=>state.LightSwitchModeState)
    const rainMode = useSelector((state)=>state.RainModeState)
    const background = lightMode.mode
    const rain = rainMode.rain
    return ( 
    <>  
        <img src="/assets/img/japan.jpg" 
        alt="" 
        className={background}
        />
        <div className={rain}></div>
        <RainSwitch/>
        <ListMusic/>
    </> 
    );
}
 
export default Home;