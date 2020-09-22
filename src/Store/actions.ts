import {WidgetMap} from "../Components/types";

export enum actions {
    CHANGE_WIDGETS_ORDER = 'CHANGE_WIDGETS_ORDER',
    CHANGE_WIDGET_LIST_ORDER = 'CHANGE_WIDGET_LIST_ORDER',
    ADD_NEW_WIDGET_LIST = 'ADD_NEW_WIDGET_LIST',
    ADD_NEW_WIDGET = 'ADD_NEW_WIDGET'
}

export const changeWidgetsOrder = (id: string, payload: WidgetMap) => (
    {
        type: actions.CHANGE_WIDGETS_ORDER,
        id,
        payload,
    }
)

export const changeWidgetListOrder = (id: string, payload: string[]) => (
    {
        type: actions.CHANGE_WIDGET_LIST_ORDER,
        id,
        payload
    }
)


export const addNewWidgetList = (id: string, payload: string) => (
    {
        type: actions.ADD_NEW_WIDGET_LIST,
        id,
        payload,
    }
)

export const addNewWidgetToWidgetList = (id: string, typeWidget: string, destination: string, index: number) => (
    {
        type: actions.ADD_NEW_WIDGET,
        id,
        payload: {
            typeWidget,
            destination,
            index,
        }
    }
)


// export type Actions = ChangeWidgetItem