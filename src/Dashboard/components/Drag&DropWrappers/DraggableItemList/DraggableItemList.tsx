import React, {FC} from "react";
import {Droppable} from "react-beautiful-dnd";
import {Widget} from "../../../models/dashboardTypes";
import DraggableItem from "../DraggableItem/DraggableItem";
import './DraggableItemList.css'

interface Props {
    listId: string,
    items: Widget[],
}

const DraggableItemList: FC<Props> = ({listId, items}) => {
    return (
        <Droppable
            droppableId={listId}
        >
            {(provided, snapshot) => (
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    {
                        items.map((item: Widget, idx: number) => (
                            <DraggableItem
                                item={item.content}
                                type={item.type}
                                id={item.id}
                                idx={idx}
                                key={item.id}
                            />
                        ))
                    }
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}

export default DraggableItemList;