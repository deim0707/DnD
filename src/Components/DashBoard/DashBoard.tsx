import React, {FC, useEffect, useState} from "react";
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import {WidgetMap, Dashboard} from "../types";
import {reorder, reorderQuoteMap, reorderQuoteMap2} from "../helpersDnD";
import DraggableColumn from "../DraggableColumn/DraggableColumn";
import {useDispatch, useSelector} from "react-redux";
import {addNewWidget, changeWidgetItem, setOrdered} from "../../Store/actions";
import AddWidget from "../AddWidget/AddWidget";
import './DashBoards.css';
import TemplateColumn from "../TemplateColumn/TemplateColumn";


interface Props {
    id: string
}

const DashBoard: FC<Props> = ({id}) => {

    const [isShowAddWidgetList, setIsShowAddWidgetList] = useState<boolean>(false);

    const dispatch = useDispatch();
    // const dashboardAllInfo: Dashboard | any = useShallowEqualSelector(getDashboard).find((dashboard1: Dashboard) => dashboard1.idDashBoard === id);
    const dashboardAllInfo: Dashboard = useSelector((state: any) => state.dashboardReducer).find((dashboard1: Dashboard) => dashboard1.idDashBoard === id);

    const dashboard: WidgetMap = dashboardAllInfo.dataWidget;
    const ordered: string[] = dashboardAllInfo.orderedWidgetList

    useEffect(() => {
        // console.log('dashboard In Component', dashboard);
        // console.log('ordered', ordered);
    })

    const onDragEnd = (result: any) => {
        console.log('result', result)

        // dropped nowhere
        if (!result.destination) return;

        const source = result.source;
        const destination = result.destination;

        // did not move anywhere - can bail early
        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) return;

        // reordering column
        if (result.type === 'COLUMN') {
            const newOrdered: string[] = reorder(
                ordered,
                source.index,
                destination.index,
            );
            dispatch(setOrdered(id, newOrdered));
            return;
        }

        if (result.source.droppableId === 'Шаблоны') {
            console.log('TEMPLATE DRAG')
            // dispatch(changeWidgetItem(id, data.quoteMap));
            // dispatch((nameAction(id, typeNewWidget: result.draggableId, destination: result.droppableId)))
            dispatch(addNewWidget(id, 'nameNewWidget'))
            return;
        }

        const data = reorderQuoteMap({
            quoteMap: dashboard,
            source,
            destination,
        });

        //data.quoteMap - это переставленный виджетЛист
        dispatch(changeWidgetItem(id, data.quoteMap));
        //тут вызовем отправку изменений на сервер //или в колонках


    };

    return (
        <div className='Dashboard'>

            {isShowAddWidgetList ? <AddWidget
                changeVisibility={setIsShowAddWidgetList}
                id = {id}
            /> : null}

            <div className="headerDashboard">
                <h2>{dashboardAllInfo.nameOfOffice}</h2>
                <button
                    onClick={() => setIsShowAddWidgetList(true)}
                >
                    Добавить виджет-лист
                </button>
            </div>

            <DragDropContext
                onDragEnd={onDragEnd}
            >
                <Droppable
                    droppableId="board"
                    type="COLUMN"
                    direction="horizontal"
                >
                    {(provided) => (
                        <div
                            className='container'
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >

                            <TemplateColumn/>

                            {/*проходимся столько раз, сколько ключей в поступившем объекте:*/}
                            {ordered.map((key: string, index: number) => (
                                <DraggableColumn
                                    key={key}
                                    index={index}
                                    title={dashboard[key].name} /*<= заголовок из ключа объекта*/
                                    items={dashboard[key].widgets} /*<= здесь конкретный объект*/
                                />
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}

export default DashBoard;