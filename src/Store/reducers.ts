import {data} from './initialState';
import {WidgetMap} from "../Components/types";

//добавить тип экшена
const dashboardReducer = (state = data, action: any): WidgetMap => {
    switch (action.type) {
        case '123123': return state;
        default: return state;
    }
}

export default dashboardReducer;