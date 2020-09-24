import React, {FC} from "react";
import DraggableColumn from "../DraggableColumn/DraggableColumn";

//тут важно, чтобы айди совпадал с типом виджета
const data = [
    {
        id: 'Widget1',
        type: 'Widget1',
        content: {
            title: 'Добавить',
            value: '22.00',
            type: 'asteroid',
            time: Date.now(),
            typeData: '℃',
        }
    },
    {
        id: 'Widget2',
        type: 'Widget2',
        content: {
            title: 'Добавить',
            value: true,
            time: '22 сентября 18:30'
        }
    },
    {
        id: 'Widget3',
        type: 'Widget3',
        content: {
            title: 'Добавить',
            value: 35,
            type: 'celsia'
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
            />
        </div>
    )
}


export default TemplateColumn;