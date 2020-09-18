import React, {FC} from "react";
import {Draggable} from "react-beautiful-dnd";
import {Author} from "../types";
import './DraggableItem.css'
import Widget1 from "../Widgets/Widget1/Widget1";
import Widget2 from "../Widgets/Widget2/Widget2";
import Widget3 from "../Widgets/Widget3/Widget3";

interface Props {
    quote: Author,
    id: string,
    idx: number,
    type: string
}

const DraggableItem: FC<Props> = ({quote, id, idx, type}) => {

    const item = () => {
        switch (type) {
            case 'Widget1':
                return <Widget1 title={quote.title} time={quote.time} type={quote.type} value={quote.value} typeData={quote.typeData}/>

            case 'Widget2':
                return <Widget2 title={quote.title} time={quote.time} value={quote.value}/>

            case 'Widget3':
                return <Widget3 title={quote.title} type={quote.type} value={quote.value}/>

            default: return null;
        }
    }

    return (
        <Draggable
            draggableId={id}
            index={idx}
        >
            {(provided, snapshot) => (
                <div
                    className='containerDraggableItem'
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {item()}
                </div>
            )}
        </Draggable>
    )
}

export default DraggableItem;