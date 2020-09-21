import React, {FC} from "react";
import DraggableColumn from "../DraggableColumn/DraggableColumn";


const data = [
    {
        id: '213ыыыы',
        type: 'Widget1',
        content: {
            title: 'Температура',
            value: '22.00',
            type: 'asteroid',
            time: Date.now(),
            typeData: '℃',
        }
    },
]



const TemplateColumn: FC = () => {
    return (
        <div>
            <DraggableColumn
                index={9}
                title={'Шаблоны'}
                items={data}
                isColumnDragDisabled={true}
                typeDraggableItemList = {'TEMPLATE'}
            />
        </div>
    )
}


export default TemplateColumn;