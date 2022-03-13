import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "../reducers";
const composeEnhancer = composeWithDevTools()
const store = createStore(
    rootReducer,
    composeEnhancer
)
export default store;