import React, {FC, useState} from "react";
import {useDispatch} from "react-redux";
import {addNewWidgetList} from "../../Store/actions";
import './AddWidget.css';

interface Props {
    changeVisibility: Function,
    id: string
}

const AddWidget: FC<Props> = ({changeVisibility, id}) => {

    const [nameNewWidget, setNameNewWidget] = useState('')

    const dispatch = useDispatch();

    const addWidget = () => {
        dispatch(addNewWidgetList(id, nameNewWidget))
        changeVisibility(false)
        setNameNewWidget('')
    }


    return (
        <div className='AddWidgetWrapper'>
            <div className='AddWidget'>
                <span>Добавление виджета</span>
                <label>
                    <span>Введите имя виджета:</span>
                    <input
                        type="text"
                        value={nameNewWidget}
                        onChange={(e) => setNameNewWidget(e.target.value)}
                    />
                </label>
                <div className='buttons'>
                    <button onClick={() => changeVisibility(false)}>
                        Закрыть
                    </button>
                    <button onClick={addWidget}>
                        Добавить
                    </button>
                </div>
            </div>
        </div>

    )
}

export default AddWidget;