import React, {FC} from "react";
import DraggableColumn from "../DraggableColumn/DraggableColumn";


const data = [
    {
        id: 'Widget1',
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
                index={0}
                title={'Шаблоны'}
                items={data}
                isColumnDragDisabled={true}
                // typeDraggableItemList = {'TEMPLATE'}
            />
        </div>
    )
}


export default TemplateColumn;