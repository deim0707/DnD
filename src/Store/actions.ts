import {WidgetMap} from "../Components/types";

export enum actions {
    CHANGE_WIDGET_ITEM = 'CHANGE_WIDGET_ITEM',
    CHANGE_WIDGET_LIST_ORDER = 'CHANGE_WIDGET_LIST_ORDER',
}

export const changeWidgetItem = (id: string, payload: WidgetMap) => {
    return {
        type: actions.CHANGE_WIDGET_ITEM,
        id,
        payload,
    }
}

export const setOrdered = (id: string, payload: string[]) => {
    return {
        type: actions.CHANGE_WIDGET_LIST_ORDER,
        id,
        payload
    }
}




// export type Actions = ChangeWidgetItem