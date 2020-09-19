import {WidgetMap} from "../Components/types";
import {actions} from "./actions";
import {data} from './initialState';

//добавить тип экшена
const dashboardReducer = (state = data, action: any): WidgetMap => {
    switch (action.type) {
        case actions.CHANGE_WIDGET_ITEM: {
            return {...state, ...action.payload};
        }
        default: return state;
    }
}

export default dashboardReducer;