import {ArrayOfDashBoars, Dashboard, WidgetMap} from "../Components/types";
import {actions} from "./actions";
import {arrayOfDashBoars} from './initialState';


const getCurrentItem = (type: string, id: string, content: any) => {
    switch (type) {
        case 'Widget1':
            return {
                id: id,
                type: type,
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
    console.log('key in func',key)
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

        case actions.ADD_NEW_WIDGET: {
            //тут надо решить, откуда берутся данные для нового виджета
            let el = getCurrentItem('Widget1', '3refwsg', {
                title: 'Добавленный В',
                value: '11.11',
                type: 'asteroid',
                time: Date.now(),
                typeData: 'nNew',
            });

            // @ts-ignore
            return state.map((item) => {
                if (item.idDashBoard === action.id) {
                    let key: string = findObjectKeyByNameWidget(item.dataWidget, action.payload.destination);

                    return {
                        ...item, dataWidget: {
                            ...item.dataWidget, [key]: {
                                ...item.dataWidget[key], widgets: [...item.dataWidget[key].widgets, el]
                            }
                        }
                    }
                }
                else return item;
            })
        }


        default:
            return state;
    }
}

export default dashboardReducer;