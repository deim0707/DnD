import {createStore, combineReducers} from "redux";
import dashboardReducer from "./reducers";

const rootReducer = combineReducers({dashboardReducer})

const store = createStore(
    rootReducer,
    // @ts-ignore
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);





export default store;