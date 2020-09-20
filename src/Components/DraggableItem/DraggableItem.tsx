import React, {FC} from "react";
import {Draggable} from "react-beautiful-dnd";
import {Content, Widget, } from "../types";
import './DraggableItem.css'
import Widget1 from "../Widgets/Widget1/Widget1";
import Widget2 from "../Widgets/Widget2/Widget2";
import Widget3 from "../Widgets/Widget3/Widget3";

interface Props {
    item: Content,
    id: string,
    idx: number,
    type: string
}

const DraggableItem: FC<Props> = ({item, id, idx, type}) => {

    const getCurrentItem = () => {
        switch (type) {
            case 'Widget1':
                return <Widget1 title={item.title} time={item.time} type={item.type} value={item.value} typeData={item.typeData}/>

            case 'Widget2':
                return <Widget2 title={item.title} time={item.time} value={item.value}/>

            case 'Widget3':
                return <Widget3 title={item.title} type={item.type} value={item.value}/>

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
                    {getCurrentItem()}
                </div>
            )}
        </Draggable>
    )
}

export default DraggableItem;