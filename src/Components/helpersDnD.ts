import {Widget, WidgetMap} from "./types";

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
    // const current: Widget[] = [...quoteMap[source.droppableId]];
    console.log(`______________________________`)
    // console.log('quoteMap',quoteMap)
    const current: Widget[] = quoteMap[source.droppableId].widgets;
    console.log('current', current)
    const next: Widget[] = quoteMap[destination.droppableId].widgets;
    console.log('next', next)
    const target: Widget = current[source.index];
    // console.log('target', target)

    if (source.droppableId === destination.droppableId) {
        const reordered: Widget[] = reorder(
            current,
            source.index,
            destination.index,
        );
        console.log('quoteMap[source.droppableId', quoteMap[source.droppableId])
        console.log('reordered', reordered)
        // const result: WidgetMap = {
        //     ...quoteMap,
        //     [source.droppableId]: reordered,
        // };
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
    // const result: WidgetMap = {
    //     ...quoteMap,
    //     [source.droppableId]: current,
    //     [destination.droppableId]: next,
    // };
    console.log('[source.droppableId]', quoteMap[source.droppableId])
    console.log(' [destination.droppableId]', quoteMap[destination.droppableId])

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