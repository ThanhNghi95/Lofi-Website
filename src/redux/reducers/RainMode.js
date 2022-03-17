const initState = {
    rain:'clear',
    sound:0,
    audio:false
}
export const RainMode = (state = initState , action) =>{
    switch(action.type){
        case 'SET_RAIN':
            return{
                ...state,
                rain:action.rain,
                sound:action.sound,
                audio:action.audio
            }
        default:
            return state
    }
}