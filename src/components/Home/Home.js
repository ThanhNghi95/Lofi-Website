import './Home.scss'
import { useSelector } from 'react-redux'
const Home = () => {
    const mode = useSelector((state)=>state.LightSwitchModeState)
    const background = mode.mode
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
       
    </> 
    );
}
 
export default Home;