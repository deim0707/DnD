import {WidgetMap} from "../Components/types";

export enum actions {
    CHANGE_WIDGET_ITEM = 'CHANGE_WIDGET_ITEM',
    CHANGE_WIDGET_LIST_ORDER = 'CHANGE_WIDGET_LIST_ORDER',
    ADD_NEW_WIDGET = 'ADD_NEW_WIDGET',
    ADD_NEW_MINIWIDGET = 'ADD_NEW_MINIWIDGET'
}

export const changeWidgetItem = (id: string, payload: WidgetMap) => (
    {
        type: actions.CHANGE_WIDGET_ITEM,
        id,
        payload,
    }
)

export const setOrdered = (id: string, payload: string[]) => (
    {
        type: actions.CHANGE_WIDGET_LIST_ORDER,
        id,
        payload
    }
)


export const addNewWidget = (id: string, payload: string) => (
    {
        type: actions.ADD_NEW_WIDGET,
        id,
        payload,
    }
)

export const addNewMiniWidget = (id: string, typeMiniWidget: string, destination: string) => (
    {
        type: actions.ADD_NEW_MINIWIDGET,
        id,
        payload: {
            typeMiniWidget, destination
        }
    }
)


// export type Actions = ChangeWidgetItem