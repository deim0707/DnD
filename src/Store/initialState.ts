import {WidgetMap} from "../Components/types";

export const data: WidgetMap = {
    'Dat4ik': [
        {
            id: '234234',
            ordered: 2,
            type: 'Widget2',
            content: {
                title: 'Освещение. Автоматы',
                value: true,
                time: '17 сентября 13:20'
            }
        },
        {
            id: '234ss234',
            type: 'Widget1',
            ordered: 3,
            content: {
                title: 'CO2',
                value: '426.0',
                type: 'leaf',
                time: Date.now(),
                typeData: 'ppm',
            }
        },
        {
            id: '234ccx2234',
            type: 'Widget3',
            ordered: 1,
            content: {
                title: 'Темература',
                value: 1,
                type: 'celsia'
            }
        },
    ],
    'Крутой датчик': [
        {
            id: '234s2s234',
            type: 'Widget1',
            ordered: 1,
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
            ordered: 2,
            content: {
                title: 'Освещение. Автоматы',
                value: false,
                time: '17 сентября 13:20'
            }
        },
        {
            id: '234cc44x2234',
            type: 'Widget3',
            ordered: 3,
            content: {
                title: 'Темература',
                value: 99,
                type: 'celsia'
            }
        },
    ],
}
