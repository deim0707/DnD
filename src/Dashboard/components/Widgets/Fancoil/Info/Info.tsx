import React, {FC, ReactText} from "react";
import './Info.css';

interface Props {
    svgFile: any,
    value: number /*здесь важно подавать параметры через точку*/
    typeValue: string,
    time: number
}

const regExp: RegExp = /(\d+)\.(\d+)/;


const Info: FC<Props> = ({svgFile, value, typeValue, time}) => {

    const valueAfterRegExp: RegExpMatchArray | null = `${value}`.match(regExp);
    const valueMain: string = valueAfterRegExp !== null ? valueAfterRegExp[1] : '';
    const valueAdditional: string = valueAfterRegExp !== null ? valueAfterRegExp[2] : '';

    const currentTime: Date = new Date(time);
    const hours: number = currentTime.getHours();
    const minutes: ReactText = currentTime.getMinutes() < 10 ? `0${currentTime.getMinutes()}` : currentTime.getMinutes();

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

export default Info;