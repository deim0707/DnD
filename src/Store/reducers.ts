import {ArrayOfDashBoars, Dashboard} from "../Components/types";
import {actions} from "./actions";
import {arrayOfDashBoars} from './initialState';

//добавить тип экшена
const dashboardReducer = (state: ArrayOfDashBoars = arrayOfDashBoars, action: any): ArrayOfDashBoars => {
    switch (action.type) {
        case actions.CHANGE_WIDGET_ITEM: {
            return state.map((item: Dashboard) => {
                if (item.idDashBoard === action.id) {
                    return {...item, dataWidget: action.payload}
                } else return item;
            })
        }

        case actions.CHANGE_WIDGET_LIST_ORDER: {
            return state.map((item) => {
                if (item.idDashBoard === action.id) {
                    return {...item, orderedWidgetList: action.payload}
                } else return item;
            })
        }

        case actions.ADD_NEW_WIDGET: {
            return state.map((item) => {
                console.log('Сработал ADD_NEW_WIDGET')
                if (item.idDashBoard === action.id) {
                    return {
                        ...item,
                        orderedWidgetList: [...item.orderedWidgetList, action.payload],
                        dataWidget: {
                            ...item.dataWidget,
                            [action.payload]: []
                        }
                    }
                } else return item;
            })
        }

        default:
            return state;
    }
}

export default dashboardReducer;