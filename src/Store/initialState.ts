import {WidgetMap, Dashboard, ArrayOfDashBoars} from "../Components/types";

const dataWidget: WidgetMap = {
    'aaa123123123123': {
        name: 'Датчик1',
        widgets: [
            {
                id: '234234',
                type: 'Widget2',
                content: {
                    title: 'Освещение. Автоматы',
                    value: true,
                    time: '17 сентября 13:20'
                }
            },
            {
                id: '234ccx2234',
                type: 'Widget3',
                content: {
                    title: 'Темература',
                    value: 1,
                    type: 'celsia'
                }
            },
        ],
    },
    'b123123ddsad': {
        name: 'Датчик2',
        widgets: [
            {
                id: '234s2s234',
                type: 'Widget1',
                content: {
                    title: 'Шум',
                    value: '123.99',
                    type: 'asteroid',
                    time: Date.now(),
                    typeData: 'ppm',
                }
            },
            {
                id: '23433234',
                type: 'Widget2',
                content: {
                    title: 'Освещение. Автоматы',
                    value: false,
                    time: '17 сентября 13:20'
                }
            },
        ],
    },
    'c12312323fff': {
        name: 'Ещё один датчик',
        widgets: [
            {
                id: '213ыыыы',
                type: 'Widget1',
                content: {
                    title: 'Температура',
                    value: '22.00',
                    type: 'asteroid',
                    time: Date.now(),
                    typeData: '℃',
                }
            },
        ]
    }
}

const dashBoard1: Dashboard = {
    idDashBoard: 'hjg123jhg123',
    nameOfOffice: 'Оффис на Фаберже',
    orderedWidgetList: ["aaa123123123123", "b123123ddsad", "c12312323fff"],
    dataWidget: dataWidget,
}

export const arrayOfDashBoars: ArrayOfDashBoars = [
    dashBoard1,
]
