import React, {FC, useState} from "react";
import './ModeControl_ElWidget.css';

import {ReactComponent as Snowflake} from '../../../Img/snowflake.svg';
import {ReactComponent as Fan} from '../../../Img/fan.svg';
import {ReactComponent as Heating} from '../../../Img/sun.svg';


interface Props {
    isSnowflakeOn: boolean,
    isFanOn: boolean,
    isHeatingOn: boolean,
    isAutoOn: boolean
}

const ModeControl_ElWidget: FC<Props> = ({isSnowflakeOn, isAutoOn, isFanOn, isHeatingOn}) => {

    const [isCurrentSnowflakeOn, setCurrentIsSnowflakeOn] = useState<boolean>(isSnowflakeOn);
    const [isCurrentFanOn, setCurrentIsFanOn] = useState<boolean>(isFanOn);
    const [isCurrentHeatingOn, setCurrentIsHeatingOn] = useState<boolean>(isHeatingOn);
    const [isCurrentAutoOn, setCurrentIsAutoOn] = useState<boolean>(isAutoOn);

    const styleTurnOn = {
        fill: 'white',
        color: 'white',
    }
    const styleTurnOff = {
        fill: 'rgb(170,170,170)',
        color: 'rgb(170,170,170)',
    }

    const getStyleColor = (isOn: boolean) => isOn ? styleTurnOn : styleTurnOff;

    return (
        <div className='ModeControl'>
            <div
                style={getStyleColor(isCurrentSnowflakeOn)}
                onClick={() => setCurrentIsSnowflakeOn(!isCurrentSnowflakeOn)}
                title='Режим охлаждения'
            >
                <Snowflake/>
            </div>
            <div
                style={getStyleColor(isCurrentFanOn)}
                onClick={() => setCurrentIsFanOn(!isCurrentFanOn)}
                title='Режим вентилятора'
            >
                <Fan/>
            </div>
            <div
                style={getStyleColor(isCurrentHeatingOn)}
                onClick={() => setCurrentIsHeatingOn(!isCurrentHeatingOn)}
                title='Режим отопления'
            >
                <Heating/>
            </div>
            <div
                style={getStyleColor(isCurrentAutoOn)}
                onClick={() => setCurrentIsAutoOn(!isCurrentAutoOn)}
                title='Автоматический режим'
            >
                AUTO
            </div>
        </div>
    )
}

export default ModeControl_ElWidget;