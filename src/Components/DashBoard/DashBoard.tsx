import React, {FC, useEffect} from "react";
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import {WidgetMap, Dashboard} from "../types";
import {reorder, reorderQuoteMap} from "../helpersDnD";
import DraggableColumn from "../DraggableColumn/DraggableColumn";
import {useDispatch, useSelector} from "react-redux";
import {changeWidgetItem, setOrdered} from "../../Store/actions";
import './DashBoards.css';


interface Props {
    id: string
}

const DashBoard: FC<Props> = ({id}) => {

    const dispatch = useDispatch();
    // const dashboardAllInfo: Dashboard | any = useShallowEqualSelector(getDashboard).find((dashboard1: Dashboard) => dashboard1.idDashBoard === id);
    const dashboardAllInfo: Dashboard = useSelector((state: any) => state.dashboardReducer).find((dashboard1: Dashboard) => dashboard1.idDashBoard === id);

    const dashboard: WidgetMap = dashboardAllInfo.dataWidget;

    const ordered: string[] = dashboardAllInfo.orderedWidgetList

    useEffect(() => {
        // console.log('dashboard In Component', dashboard);
        // console.log('ordered', ordered);
    })

    const onDragEnd = (result: any) => {
        // console.log('result', result)

        // dropped nowhere
        if (!result.destination) return;

        const source = result.source;
        const destination = result.destination;

        // did not move anywhere - can bail early
        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) return;

        // reordering column
        if (result.type === 'COLUMN') {
            const newOrdered: string[] = reorder(
                ordered,
                source.index,
                destination.index,
            );
            dispatch(setOrdered(id, newOrdered));
            return;
        }

        const data = reorderQuoteMap({
            quoteMap: dashboard,
            source,
            destination,
        });

        //data.quoteMap - это переставленный виджетЛист
        dispatch(changeWidgetItem(id, data.quoteMap));
        //тут вызовем отправку изменений на сервер
    };


    return (
        <>
            <h2>{dashboardAllInfo.nameOfOffice}</h2>
            <DragDropContext
                onDragEnd={onDragEnd}
            >
                <Droppable
                    droppableId="board"
                    type="COLUMN"
                    direction="horizontal"

                >
                    {(provided) => (
                        <div
                            className='container'
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {/*проходимся столько раз, сколько ключей в поступившем объекте:*/}
                            {ordered.map((key: string, index: number) => (
                                <DraggableColumn
                                    key={key}
                                    index={index}
                                    title={key} /*<= заголовок из ключа объекта*/
                                    items={dashboard[key]} /*<= здесь конкретный объект*/
                                />
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </>
    )
}

export default DashBoard;