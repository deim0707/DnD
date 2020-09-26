import {Widget, WidgetMap} from "../../models/dashboardTypes";

export const reorder = (list: any[], startIndex: number, endIndex: number): any[] => {
    console.log('list', list)
    const result = Array.from(list);
    console.log('result1', result)
    const [removed] = result.splice(startIndex, 1);
    console.log('removed', removed)
    result.splice(endIndex, 0, removed);
    console.log('result2', result)

    return result;
};

export const reorderQuoteMap = ({
                                    quoteMap,
                                    source,
                                    destination,
                                }: any) => {
    const current: Widget[] = quoteMap[source.droppableId].widgets;
    const next: Widget[] = quoteMap[destination.droppableId].widgets;
    const target: Widget = current[source.index];

    if (source.droppableId === destination.droppableId) {
        const reordered: Widget[] = reorder(
            current,
            source.index,
            destination.index,
        );

        const result: WidgetMap = {
            ...quoteMap,
            [source.droppableId]: {
                ...quoteMap[source.droppableId], widgets: reordered
            },
        };
        return {
            quoteMap: result,
        };
    }

    current.splice(source.index, 1);
    next.splice(destination.index, 0, target);

    const result: WidgetMap = {
        ...quoteMap,
        [source.droppableId]: {
            ...quoteMap[source.droppableId], widgets: current
        },
        [destination.droppableId]: {
            ...quoteMap[destination.droppableId], widgets: next
        }
    };

    return {
        quoteMap: result,
    };
};

export const findObjectKeyByNameWidget = (obj: WidgetMap, name: string): string => {
    let key = '';
    for (let i in obj) {
        if (obj[i].name === name) key = i.toString();
    }
    return key;
}

// export const getCurrentItem = (type: string, id: string, content: any) => {
//     switch (type) {
//         case 'Widget1':
//             return {
//                 id: id,
//                 type: type,
//                 content: {
//                     title: content.title,
//                     value: content.value,
//                     type: content.type,
//                     time: content.time,
//                     typeData: content.typeData,
//                 }
//             };
//
//         case 'Widget2':
//             return {
//                 id: id,
//                 type: type,
//                 content: {
//                     title: content.title,
//                     value: content.value,
//                     time: content.time,
//                 }
//             };
//
//         case 'Widget3':
//             return {
//                 id: id,
//                 type: type,
//                 content: {
//                     title: content.title,
//                     value: content.value,
//                     type: content.type,
//                 }
//             };
//
//         default:
//             return null;
//     }
// }

//моканный вариант
export const getCurrentItem = (type: string, id: string, content: any): Widget | null => {
    switch (type) {
        case 'Widget1':
            return {
                id: id,
                type: type,
                content: {
                    title: 'Добавили',
                    value: '11.11',
                    type: 'asteroid',
                    time: Date.now(),
                    typeData: 'nNew',
                }
            };

        case 'Widget2':
            return {
                id: id,
                type: type,
                content: {
                    title: 'Добавили',
                    value: true,
                    time: '22 сентября 18:30'
                }
            };

        case 'Widget3':
            return {
                id: id,
                type: type,
                content: {
                    title: 'Добавили',
                    value: 35,
                    type: 'celsia'
                }
            };

        default:
            return null;
    }
}