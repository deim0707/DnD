import {createStore, combineReducers} from "redux";
import dashboardReducer from "./reducers";

const rootReducer = combineReducers({dashboardReducer})

const store = createStore(rootReducer);

export default store;