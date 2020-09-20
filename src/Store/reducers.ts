import {ArrayOfDashBoars, Dashboard} from "../Components/types";
import {actions} from "./actions";
import {arrayOfDashBoars} from './initialState';

//добавить тип экшена
const dashboardReducer = (state: ArrayOfDashBoars = arrayOfDashBoars, action: any): ArrayOfDashBoars => {
    switch (action.type) {
        // case actions.CHANGE_WIDGET_ITEM: {
        //     const index: number = findDashboardIndex(state, action.id);
        //     const newArr = state.slice();
        //     newArr[index].dataWidget = action.payload;
        //     return newArr;
        // }
        case actions.CHANGE_WIDGET_ITEM: {
            return state.map((item: Dashboard) => {
                if (item.idDashBoard === action.id) {
                    return {...item, dataWidget: action.payload}
                } else return item;
            })
        }
        default:
            return state;
    }
}

export default dashboardReducer;