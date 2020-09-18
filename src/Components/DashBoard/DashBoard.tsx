import React, {FC, useState} from "react";
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import {QuoteMap, Quote} from "../types";
import {reorder, reorderQuoteMap} from "../helpersDnD";
import DraggableColumn from "../DraggableColumn/DraggableColumn";

import './DashBoards.css'

type Props = {
    [key: string]: QuoteMap
}

const DashBoard: FC<Props> = ({initial}) => {

    const [columns, setColumns] = useState<QuoteMap>(initial);
    const [ordered, setOrdered] = useState<string[]>(Object.keys(initial));


    const onDragEnd = (result: any) => {
        console.log('onDragEnd')
        console.log(result)

        if (result.combine) {
            if (result.type === 'COLUMN') {
                const shallow: string[] = [...ordered];
                shallow.splice(result.source.index, 1);
                setOrdered(shallow);
                return;
            }

            const column: Quote[] = columns[result.source.droppableId];
            const withQuoteRemoved: Quote[] = [...column];
            withQuoteRemoved.splice(result.source.index, 1);
            const newColumns: QuoteMap = {
                ...columns,
                [result.source.droppableId]: withQuoteRemoved,
            };
            setColumns(newColumns);
            return;
        }

        // dropped nowhere
        if (!result.destination) {
            return;
        }

        const source = result.source;
        const destination = result.destination;

        // did not move anywhere - can bail early
        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) {
            return;
        }

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
                                    quotes={columns[key]} /*<= здесь конкретный объект*/
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