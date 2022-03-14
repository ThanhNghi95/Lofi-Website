const initState = {
    rain:'clear',
    sound:0
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