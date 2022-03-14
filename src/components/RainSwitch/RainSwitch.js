import './RainSwitch.scss'
import { RainMode} from "../../redux/actions/action";
import { useDispatch, useSelector } from 'react-redux';
import ReactAudioPlayer from 'react-audio-player';
import { useState } from 'react';

const RainSwitch = () => {
    const dispatch = useDispatch()
    const rainMode = useSelector((state)=>state.RainModeState)
    const [audio , setAudio] = useState(false);
    const handleSetRain = () =>{
        switch(rainMode.rain){
            case 'clear':
                dispatch(RainMode('rain', 50))
                break
            case 'rain':
                dispatch(RainMode('clear', 0))
                break
            default:
                dispatch(RainMode('clear', 0))
            }
        setAudio(!audio)
        } 
    return (
        <div className='container' onClick={handleSetRain}>
            {audio && 
            <ReactAudioPlayer
                src='./assets/audio/Rain.mp3'
                autoPlay
                loop={true}
                volume={rainMode.sound / 100}
            />
            }
                <img src="/assets/img/cry.gif" alt="" className='rainIcon'/>
        </div>
      );
}
 
export default RainSwitch;