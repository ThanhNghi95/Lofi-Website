import { combineReducers } from "redux";
import LightSwitchMode from "./LighSwitchMode";
import { RainMode } from "./RainMode";

export const rootReducer = combineReducers({
    LightSwitchModeState:LightSwitchMode,
    RainModeState: RainMode
})