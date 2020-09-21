import React, {FC} from "react";
import {Draggable} from "react-beautiful-dnd";
import {Widget} from "../types";
import DraggableItemList from "../DraggableItemList/DraggableItemList";
import './DraggableColumn.css'

interface Props {
    index: number,
    title: string,
    items: Widget[],
    isColumnDragDisabled?: boolean,
    typeDraggableItemList?: string
}

//Column
const DraggableColumn: FC<Props> = ({
                                        index,
                                        title,
                                        items,
                                        isColumnDragDisabled = false,
                                        typeDraggableItemList=''
                                    }) => {
    return (
        <Draggable draggableId={title} index={index} isDragDisabled={isColumnDragDisabled}>
            {(provided, snapshot) => (
                <div
                    className='containerDraggableColumn'
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                >
                    <div className='headerDraggableColumn'
                    >
                        <h4 className='titleDraggableColumn'
                            {...provided.dragHandleProps}
                            aria-label={`${title} quote list`}
                        > {title} </h4>
                    </div>
                    <DraggableItemList
                        listId={title}
                        listType={typeDraggableItemList}
                        items={items}
                    />
                </div>
            )}
        </Draggable>
    )
}

export default DraggableColumn;