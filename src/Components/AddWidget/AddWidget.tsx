import React, {FC, useState} from "react";
import './AddWidget.css';

interface Props {
    changeVisibility: Function
}

const AddWidget: FC<Props> = ({changeVisibility}) => {

    const [valueNameWidget, setValueNameWidget] = useState('');

    return (
        <div className='AddWidgetWrapper'>
            <div className='AddWidget'>
                <span>Добавление виджета</span>
                <label>
                    <span>Введите имя виджета:</span>
                    <input
                        type="text"
                        value={valueNameWidget}
                        onChange={(e) => setValueNameWidget(e.target.value)}
                    />
                </label>
                <div className='buttons'>
                    <button onClick={() => changeVisibility(false)} >
                        Закрыть
                    </button>
                    <button>
                        Добавить
                    </button>
                </div>
            </div>
        </div>

    )
}

export default AddWidget;