import {ArrayOfDashBoars, Dashboard, WidgetMap} from "../Components/types";
import {actions} from "./actions";
import {arrayOfDashBoars} from './initialState';


const getCurrentItem = (type1: string, type2: string, id: string, content: any) => {
    switch (type1) {
        case 'Widget1':
            return {
                id: id,
                type: type2,
                content: {
                    title: content.title,
                    value: content.value,
                    type: content.type,
                    time: content.time,
                    typeData: content.typeData,
                }
            };

        case 'Widget2':
            return {};

        case 'Widget3':
            return {};

        default:
            return null;
    }
}

const findObjectKeyByNameWidget = (obj: WidgetMap, name: string): string => {
    let key = '';
    for (let i in obj) {
        if (obj[i].name === name) key = i.toString();
    }
    return key;
}

//добавить тип экшена
const dashboardReducer = (state: ArrayOfDashBoars = arrayOfDashBoars, action: any): ArrayOfDashBoars => {
    switch (action.type) {

        case actions.ADD_NEW_WIDGET_LIST: {
            return state.map((item) => {
                if (item.idDashBoard === action.id) {
                    return {
                        ...item,
                        orderedWidgetList: [...item.orderedWidgetList, '13212dasasdasd'], //<= тут будет вставляться айди из сервера
                        dataWidget: {
                            ...item.dataWidget,
                            '13212dasasdasd': { //<= тут будет вставляться айди из сервера
                                name: action.payload,
                                widgets: [],
                            }
                        }
                    }
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

        case actions.CHANGE_WIDGETS_ORDER: {
            return state.map((item: Dashboard) => {
                if (item.idDashBoard === action.id) {
                    return {...item, dataWidget: action.payload}
                } else return item;
            })
        }

        case action.ADD_NEW_WIDGET: {
            let el = getCurrentItem('Widget1', 'Widget1', '3refwsg', {
                title: 'Добавленный В',
                value: '11.11',
                type: 'asteroid',
                time: Date.now(),
                typeData: 'nNew',
            });


            // @ts-ignore
            return state.map((item) => {
                if (item.idDashBoard === action.id) {

                    let key: string = findObjectKeyByNameWidget(item.dataWidget, 'Dat4ikkddddd');

                    return {
                        ...item,
                        dataWidget: {
                            ...item.dataWidget,
                            //получить правильный ключ. сейчас тут поле нейм
                            // [action.payload.destination]: {
                            //     ...item.dataWidget[action.payload.destination],
                            //     widgets: [
                            //         ...item.dataWidget[action.payload.destination].widgets,
                            //         el
                            //     ]
                            // }в общем
                            [key]: {
                                ...item.dataWidget[key],
                                widgets: [
                                    ...item.dataWidget[key].widgets,
                                    el
                                ]
                            }
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