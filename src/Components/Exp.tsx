import React, {FC, useCallback, useState} from "react";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';


const grid = 8;
const getItemStyle = (isDragging: any, draggableStyle: any) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = (isDraggingOver: any) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    width: 250
});

const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const Exp: FC = () => {

    const [state, setState1] = useState([
        {id: "item-0", content: "item 0"},
        {id: "item-1", content: "item 1"},
        {id: "item-2", content: "item 2"}
    ])


    // //функции, срабатывающие при событиях переноса
    // const onBeforeDragStart = useCallback(() => {
    //     console.log('onBeforeDragStart')
    // }, []);
    // const onDragStart = useCallback(() => {
    //     console.log('onDragStart')
    // }, []);
    // const onDragUpdate = useCallback(() => {
    //     console.log('onDragUpdate')
    // }, []);

    const onDragEnd = useCallback((result) => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const items = reorder(
            state,
            result.source.index,
            result.destination.index
        );

        // @ts-ignore
        setState1(items);
        console.log('onDragEnd')
    }, [])

    return (
        <DragDropContext  /*оборачиваем область, где будем применять ДнД*/
            onDragEnd={onDragEnd}
        >
            <Droppable
                droppableId="droppable"
                //type='PERSON' /*будет принимать в эту область только такой тип*/
            >
                {(provided, snapshot) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                    >
                        {state.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={getItemStyle(
                                            snapshot.isDragging,
                                            provided.draggableProps.style
                                        )}
                                    >
                                        {item.content}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>


        </DragDropContext>
    )
}

export default Exp;