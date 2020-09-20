import {actions} from "../Store/actions";

export type Content = {
    title: string,
    value?: string | boolean | any,
    type?: string | any,
    time?: number | string | any,
    typeData?: string |any,
};

export type Widget = {
    id: string,
    type: string,
    content: Content,
}

export type WidgetMap = {
    [key: string]: Widget[],
};

export type Dashboard = {
    nameOfOffice: string,
    idDashBoard: string,
    orderedWidgetList: string[],
    dataWidget: WidgetMap
}

export type ArrayOfDashBoars = Dashboard[];


export interface ChangeWidgetItem {
    type: actions.CHANGE_WIDGET_ITEM,
    id: string,
    payload: WidgetMap
}

