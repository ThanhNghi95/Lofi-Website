const initState = {
    rain:'clear',
    sound:false
}
export const RainMode = (state = initState , action) =>{
    switch(action.type){
        case 'SET_RAIN':
            return{
                ...state,
                rain:action.rain,
                sound:action.sound
            }
        default:
            return state
    }
}