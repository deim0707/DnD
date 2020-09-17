import React, {FC, useState} from "react";
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import {QuoteMap} from "./types";
import DraggableColumn from "./DraggableColumn";

import './boards.css'

type Props = {
    [key: string]: QuoteMap
}

const Board: FC<Props> = ({initial}) => {

    const [columns, setColumns] = useState<QuoteMap>(initial);
    const [ordered, setOrdered] = useState<string[]>(Object.keys(initial));


    const onDragEnd = (result: any): void => {
        console.log('onDragEnd')
    }

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

export default Board;