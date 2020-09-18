import React, {FC} from "react";
import './Widget2.css'

interface Props {
    title: string,
    time: string
    isTurn: boolean,
}

const Widget2: FC<Props> = ({title,isTurn,time}) => {

    const style = {
        backgroundColor: isTurn? 'darkgreen' : 'red'
    }

    return  (
        <div className='Widget2'>
            <div className="Widget2Widget2title">
                {title}
            </div>
            <div className='Widget2Main' style={style}>
                <div
                    className='Widget2Condition'

                >
                    <div>{isTurn? 'ВКЛ' : 'ВЫКЛ'}</div>
                </div>
                <div className='Widget2Date'>{time}</div>
            </div>
        </div>
    )
}

export default Widget2;