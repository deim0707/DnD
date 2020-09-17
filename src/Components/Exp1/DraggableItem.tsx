import React, {FC} from "react";
import {Draggable} from "react-beautiful-dnd";
import {Author} from "./types";

interface Props {
    quote: Author,
    id: string,
    idx: number
}

const DraggableItem: FC<Props> = ({quote,id, idx}) => {
    return (
        <div>
            <Draggable draggableId={quote.name} index={idx}>
                {(provided, snapshot) => (
                    <div className='container' ref={provided.innerRef} {...provided.draggableProps}>
                        <p>Имя: {quote.name}</p>
                        <p>Url: {quote.url}</p>

                    </div>
                )}
            </Draggable>
        </div>
    )
}

export default DraggableItem;