
export const LightSwitchMode = (payload) =>({
    type: 'SET_MODE',
    mode: payload
})

export const RainMode = (rain , sound, audio) =>({
    type: 'SET_RAIN',
    rain: rain,
    sound:sound,
    audio:audio
})