import {ArrayOfDashBoars, Dashboard, Widget, WidgetMap} from "./types";

export const reorder = (list: any[], startIndex: number, endIndex: number): any[] => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

export const reorderQuoteMap = ({
                                    quoteMap,
                                    source,
                                    destination,
                                }: any) => {
    const current: Widget[] = [...quoteMap[source.droppableId]];
    const next: Widget[] = [...quoteMap[destination.droppableId]];
    const target: Widget = current[source.index];

    if (source.droppableId === destination.droppableId) {
        const reordered: Widget[] = reorder(
            current,
            source.index,
            destination.index,
        );
        const result: WidgetMap = {
            ...quoteMap,
            [source.droppableId]: reordered,
        };
        return {
            quoteMap: result,
        };
    }

    current.splice(source.index, 1);
    next.splice(destination.index, 0, target);
    const result: WidgetMap = {
        ...quoteMap,
        [source.droppableId]: current,
        [destination.droppableId]: next,
    };

    return {
        quoteMap: result,
    };
};

// export const findDashboardIndex = (state: ArrayOfDashBoars,id: string) => {
//     let indexOfDashboard = state.findIndex((dashboard: Dashboard) => dashboard.idDashBoard === id);
//     return {
//         indexOfDashboard,
//         state[indexOfDashboard],
//     }
// }

// export const findDashboardIndex = (state: ArrayOfDashBoars,id: string): number => state.findIndex((dashboard: Dashboard) => dashboard.idDashBoard === id);