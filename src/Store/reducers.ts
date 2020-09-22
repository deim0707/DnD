import {ArrayOfDashBoars, Dashboard} from "../Components/types";
import {actions} from "./actions";
import {arrayOfDashBoars} from './initialState';

//добавить тип экшена
const dashboardReducer = (state: ArrayOfDashBoars = arrayOfDashBoars, action: any): ArrayOfDashBoars => {
    switch (action.type) {
        case actions.CHANGE_WIDGETS_ORDER: {
            console.log('action.payload', action.payload)
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

        //переделать на новую структуру инитиалСтейта
        case actions.ADD_NEW_WIDGET_LIST: {
            return state.map((item) => {
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

        // case action.ADD_NEW_MINIWIDGET: {
        //     return state.map((item) => {
        //         if (item.idDashBoard === action.id) {
        //             return {
        //                 ...item,
        //                 dataWidget: {
        //                     ...item.dataWidget,
        //                     [action.payload.destination]: ///тут новый объект виджета
        //                 }
        //             }
        //         } else return item;
        //     })
        // }

        default:
            return state;
    }
}

export default dashboardReducer;