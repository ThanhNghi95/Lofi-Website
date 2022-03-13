const initState = {
    mode:'normal'
}

const LightSwitchMode = (state=initState, action) =>{
    switch(action.type){
        case 'SET_MODE':
            return{
                ...state,
                mode:action.mode,
            }
        default:
            return state
    }
}
export default LightSwitchMode