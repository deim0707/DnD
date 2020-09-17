import React, {FC} from "react";
import {Droppable} from "react-beautiful-dnd";
import DraggableItem from "./DraggableItem";
import {Quote} from "./types";
import './DraggableItemList.css'

interface Props {
    listId: string,
    // listType: string,
    quotes: Quote[],
}

//QuoteList
const DraggableItemList: FC<Props> = ({listId, quotes}) => {
    return (
        <Droppable
            droppableId={listId}
            // type={listType}
        >
            {(provided, snapshot) => (
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    {
                        quotes.map((item: any, idx: number) => (
                            <DraggableItem
                                quote={item.author}
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