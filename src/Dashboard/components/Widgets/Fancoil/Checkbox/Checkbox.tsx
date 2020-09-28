import React, {FC, useState} from "react";
import {InputSwitch} from 'primereact/inputswitch';

import './Checkbox.css'

const Checkbox: FC = () => {
    const [value, setValue] = useState(true)
    return (
        <div>
            <label className="Checkbox">
                <p>
                    Управление с пульта
                </p>
                {/*<input id='FancoilCheckboxInput' type="checkbox"/>*/}
            </label>
            <div className='p-inputswitch p-inputswitch-slider'>
                <InputSwitch
                    checked={value}
                    onChange={(e) => {
                        console.log(e.value)
                        setValue(e.value)
                    }}

                />
            </div>

        </div>

    )
}

export default Checkbox;
