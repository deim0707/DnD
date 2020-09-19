import React, {FC, useEffect, useState} from "react";
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import {WidgetMap, ArrayOfDashBoars, Dashboard} from "../types";
import {reorder, reorderQuoteMap} from "../helpersDnD";
import DraggableColumn from "../DraggableColumn/DraggableColumn";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {useShallowEqualSelector} from "../../Store/helpersStore";
import {getDashboard} from "../../Store/selectors";
import {changeWidgetItem} from "../../Store/actions";
import './DashBoards.css';


interface Props {
    id: string
}

const DashBoard: FC<Props> = ({id}) => {

    const dispatch = useDispatch();
    // dispatch(changeWidgetItem(...))
    // const dashboardAllInfo: Dashboard | any = useShallowEqualSelector(getDashboard).find((dashboard1: Dashboard) => dashboard1.idDashBoard === id);
    const dashboardAllInfo: Dashboard = useSelector((state: any) => state.dashboardReducer, shallowEqual).find((dashboard1: Dashboard) => dashboard1.idDashBoard === id);
    const dashboard = dashboardAllInfo.dataWidget;


    const [ordered, setOrdered] = useState<string[]>(Object.keys(dashboard));

    useEffect(() => {
        console.log('dashboard In Component', dashboard);
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
            setOrdered(newOrdered);
            return;
        }

        const data = reorderQuoteMap({
            quoteMap: dashboard,
            source,
            destination,
        });

        // setColumns(data.quoteMap);
        //data.quoteMap - это переставленный виджетЛист
        console.log('data.quoteMap', data.quoteMap);
        dispatch(changeWidgetItem(id, data.quoteMap));
        //тут вызовем отправку изменений на сервер
    };


    return (
        <>
            {/*<h2>{dashboardAllInfo.nameOfOffice}</h2>*/}
            <DragDropContext
                onDragEnd={onDragEnd}
                // onDragEnd={()=>{}}
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