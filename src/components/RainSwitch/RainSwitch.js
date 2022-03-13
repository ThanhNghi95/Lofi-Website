import './RainSwitch.scss'
import { RainMode} from "../../redux/actions/action";
import { useDispatch, useSelector } from 'react-redux';

const RainSwitch = () => {
    const dispatch = useDispatch()
    const rainMode = useSelector((state)=>state.RainModeState)

    const handleSetRain = () =>{
        switch(rainMode.rain){
            case 'clear':
                dispatch(RainMode('rain', true))
                break
            case 'rain':
                dispatch(RainMode('clear', false))
                break
            }
        }
    
    console.log(rainMode)
    return (
        <div className='container'>
            <button onClick={handleSetRain}>Add</button>
        </div>
      );
}
 
export default RainSwitch;