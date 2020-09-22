import React, {FC, useState} from "react";
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import {WidgetMap, Dashboard} from "../types";
import {reorder, reorderQuoteMap} from "../helpersDnD";
import DraggableColumn from "../DraggableColumn/DraggableColumn";
import {useDispatch, useSelector} from "react-redux";
import {changeWidgetsOrder, changeWidgetListOrder, addNewWidgetToWidgetList} from "../../Store/actions";
import AddWidget from "../AddWidget/AddWidget";
import TemplateColumn from "../TemplateColumn/TemplateColumn";
import uniqid from "uniqid";
import './DashBoards.css';


interface Props {
    id: string
}

const DashBoard: FC<Props> = ({id}) => {

    const [isShowAddWidgetList, setIsShowAddWidgetList] = useState<boolean>(false);

    const dispatch = useDispatch();

    const dashboardAllInfo: Dashboard = useSelector((state: any) => state.dashboardReducer).find((dashboard1: Dashboard) => dashboard1.idDashBoard === id);

    const dashboard: WidgetMap = dashboardAllInfo.dataWidget;
    const ordered: string[] = dashboardAllInfo.orderedWidgetList



    const onDragEnd = (result: any) => {
        if (!result.destination) return;

        const source = result.source;
        const destination = result.destination;

        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) return;

        if (result.type === 'COLUMN') {
            const newOrdered: string[] = reorder(
                ordered,
                source.index,
                destination.index,
            );
            dispatch(changeWidgetListOrder(id, newOrdered));
            return;
        }

        if (result.source.droppableId === 'Шаблоны') {
            console.log('TEMPLATE DRAG')
            console.log(result)
            dispatch(addNewWidgetToWidgetList('hjg123jhg123', result.draggableId, result.destination.droppableId, result.destination.index))
            return;
        }

        const findIndex = () => {
            const currentSource = {index: result.source.index, droppableId: '',};
            const currentDestination = {index: result.destination.index, droppableId: '',};

            for (let item in dashboard) {
                if (dashboard[item].name === result.source.droppableId) {
                    currentSource.droppableId = item;
                }
                if (dashboard[item].name === result.destination.droppableId) {
                    currentDestination.droppableId = item;
                }
            }
            let returnObj = {
                quoteMap: dashboard,
                source: currentSource,
                destination: currentDestination,
            }
            console.log('returnObj',returnObj)
            return returnObj;
        }


        const data = reorderQuoteMap(findIndex());

        dispatch(changeWidgetsOrder(id, data.quoteMap));
        //тут вызовем отправку изменений на сервер //или в колонках
    };

    return (
        <div className='Dashboard'>

            {isShowAddWidgetList ? <AddWidget
                changeVisibility={setIsShowAddWidgetList}
                id={id}
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