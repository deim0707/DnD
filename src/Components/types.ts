import {actions} from "../Store/actions";

// export type Widget1Content = {
//     title: string,
//     time: number,
//     type: string,
//     value: string,
//     typeData: string,
// }
//
// export type Widget2Content = {
//     title: string,
//     time: string,
//     value: boolean,
// }
//
// export type Widget3Content = {
//     title: string,
//     type: string,
//     value: number,
// }
//
// export type Content = Widget1Content | Widget2Content | Widget3Content;

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
    [key: string]: {
        name: string,
        widgets: Widget[],
    },
};

export type Dashboard = {
    nameOfOffice: string,
    idDashBoard: string,
    orderedWidgetList: string[],
    dataWidget: WidgetMap
}

export type ArrayOfDashBoars = Dashboard[];