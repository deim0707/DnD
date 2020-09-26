import React, {FC} from "react";
import asteroid from '../../../../Img/asteroid.svg'
import leaf from '../../../../Img/leaf.svg';
import './Widget1.css'

interface Props {
    title: string,
    time: number,
    type: string,
    value: string,
    typeData: string,
}

const Widget1: FC<Props> = ({type, title, time, value, typeData}) => {

    const titleImg = (): string => {
        switch (type) {
            case 'asteroid':
                return asteroid;
            case 'leaf':
                return leaf;
            default:
                return '';
        }
    }

    const timeString = (): string => {
        const date: Date = new Date(time)
        const hours: number = date.getHours()
        const minutes: number = date.getMinutes()
        return `${hours}:${minutes}`
    }

    return (
        <div className='Widget1'>
            <div className='widget1Title'>
                <img
                    src={titleImg()}
                    alt={type}
                />
                <h6>{title}</h6>
            </div>
            <div className='widget1MainInfo'>
                <div className='widget1Main'>
                    <div className="time">{timeString()}</div>
                    <div className="mainData">{value}</div>
                    <div className="typeData">{typeData}</div>
                </div>
                <div className='widget1Pictures'>
                    <img src="http://dev.stdu.info/static/media/borders.e76b938e.svg" alt={'metrics'}/>
                    <img src="http://dev.stdu.info/static/media/borders.e76b938e.svg" alt={'metrics'}/>
                </div>
            </div>
        </div>
    )
}

export default Widget1;