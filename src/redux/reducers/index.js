import { combineReducers } from "redux";
import LightSwitchMode from "./LighSwitchMode";

export const rootReducer = combineReducers({
    LightSwitchModeState:LightSwitchMode,
})