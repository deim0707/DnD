import {WidgetMap} from "../Components/types";

export enum actions {
    CHANGE_WIDGET_ITEM = 'CHANGE_WIDGET_ITEM',
    CHANGE_WIDGET_ITEM111 = 'CHANGE_WIDGET_ITEM111',
}

export const changeWidgetItem = (id: string, payload: WidgetMap) => {
    return {
        type: actions.CHANGE_WIDGET_ITEM,
        id,
        payload
    }
}