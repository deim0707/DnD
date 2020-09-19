import {ArrayOfDashBoars} from "../Components/types";
import {actions} from "./actions";
import {arrayOfDashBoars} from './initialState';
import {findDashboardIndex} from "../Components/helpersDnD";

//добавить тип экшена
const dashboardReducer = (state: ArrayOfDashBoars = arrayOfDashBoars, action: any): ArrayOfDashBoars => {
    switch (action.type) {
        case actions.CHANGE_WIDGET_ITEM: {
            // return {...state, ...action.payload};
            //тут вернётся индекс нужного мне айтема в массиве (стейте):
            const index: number = findDashboardIndex(state, action.id);
            console.log('action.payload', action.payload)
            console.log('state In Reducer', state)
            const newArr = state.slice();
            newArr[index].dataWidget = action.payload;
            console.log(newArr[index].dataWidget)
            return newArr;
        }
        default: return state;
    }
}

export default dashboardReducer;