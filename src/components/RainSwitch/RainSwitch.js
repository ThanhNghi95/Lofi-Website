import './RainSwitch.scss'
import { RainMode} from "../../redux/actions/action";
import { useDispatch, useSelector } from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';


const RainSwitch = () => {
    const dispatch = useDispatch()
    const rainMode = useSelector((state)=>state.RainModeState)
    const handleSetRain = () =>{
        switch(rainMode.rain){
            case 'clear':
                dispatch(RainMode('rain', 20,true))
                break
            case 'rain':
                dispatch(RainMode('clear', 0,false))
                break
            default:
                dispatch(RainMode('clear', 0,false))
            }
      } 
    return (
        <div className='container' onClick={handleSetRain}>
            {rainMode.audio && 
            <ReactAudioPlayer
                src='./assets/audio/Rain.mp3'
                loop={true}
                volume={rainMode.sound / 100}
                autoPlay
            />
            }
                <img src="/assets/img/cry.gif" alt="" className='rainIcon'/>
        </div>
      );
}
 
export default RainSwitch;