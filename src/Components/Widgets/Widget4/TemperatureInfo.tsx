import React, {FC} from "react";
import './TemperatureInfo.css';

interface Props {
    svgFile: any,
    value: number
    typeValue: string,
    time: number
}

const regExp: RegExp = /(\d+)\.(\d+)/;

const TemperatureInfo: FC<Props> = ({svgFile, value, typeValue, time}) => {

    const valueAfterRegExp: RegExpMatchArray | null = `${value}`.match(regExp);
    const valueMain = valueAfterRegExp !== null ? valueAfterRegExp[1] : null;
    const valueAdditional = valueAfterRegExp !== null ? valueAfterRegExp[2] : null;

    const currentTime = new Date(time);
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();

    return (
        <div className='TemperatureInfoWrapper'>
            <div className='ico'>
                <img src={svgFile}/>
            </div>
            <div className='value'>
                {valueMain}
            </div>
            <div className='valueAdditional'>
                <div>{typeValue}</div>
                <div>.{valueAdditional}</div>
            </div>
            <div className='time'>
                {`${hours}:${minutes}`}
            </div>
        </div>
    )
}

export default TemperatureInfo;