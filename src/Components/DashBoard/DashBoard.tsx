import React, {FC, useEffect, useState} from "react";
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import {WidgetMap, Widget} from "../types";
import {reorder, reorderQuoteMap} from "../helpersDnD";
import DraggableColumn from "../DraggableColumn/DraggableColumn";
import './DashBoards.css'
import {useDispatch} from "react-redux";
import {useShallowEqualSelector} from "../../Store/helpersStore";
import {getDashboard} from "../../Store/selectors";
import {changeWidgetItem} from "../../Store/actions";


//сделать: пусть принимает айдшник конкретного дашборда и подгружает инфу о нём
const DashBoard: FC= () => {

    const dispatch = useDispatch();
    // dispatch(changeWidgetItem(...))

    const dashboard: WidgetMap = useShallowEqualSelector(getDashboard)

    //тут определяется порядок вывода виджетов в виджетЛисте
    const [columns, setColumns] = useState<WidgetMap>(dashboard);
    //тут определяется порядок вывода стоблцов
    const [ordered, setOrdered] = useState<string[]>(Object.keys(dashboard));

    useEffect(()=>{
        console.log('columns', columns);
        console.log('ordered', ordered);
    })


    const onDragEnd = (result: any) => {
        console.log('result', result)

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
            quoteMap: columns,
            source,
            destination,
        });

        setColumns(data.quoteMap);
    };


    return (
        <>
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
                                    items={columns[key]} /*<= здесь конкретный объект*/
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