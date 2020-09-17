import React, {FC} from "react";
import {Draggable} from "react-beautiful-dnd";
import {Quote} from "./types";
import DraggableItemList from "./DraggableItemList";

interface Props {
    key: string,
    index: number,
    title: string,
    quotes: Quote[],
}

//Column
const DraggableColumn: FC<Props> = ({key, index, title, quotes}) => {
    return (
        <Draggable draggableId={title} index={index}>
            {(provided, snapshot) => (
                <div className='container' ref={provided.innerRef} {...provided.draggableProps}>
                    <div className='header'
                         // isDragging={snapshot.isDragging}
                    >
                        <h4 className='title'
                            // isDragging={snapshot.isDragging}
                            {...provided.dragHandleProps}
                            aria-label={`${title} quote list`}
                        > {title} </h4>
                    </div>
                    <DraggableItemList
                        listId={title}
                        listType="QUOTE"
                        quotes={quotes}
                    />
                </div>
            )}
        </Draggable>
    )
}

export default DraggableColumn;