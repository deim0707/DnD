import React, {FC, useState} from "react";
import './Widget3.css'

interface Props {
    title: string,
    type: string,
    value: number
}

const Widget3: FC<Props> = ({title, value: startValue, type}) => {

    const [value, setValue] = useState<number>(startValue)
    const thisType: string = type === 'celsia' ? '℃' : '';

    const decr = (): void => setValue(value => value + 1)
    const incr = (): void => setValue(value => value - 1)


    return (
        <div className='Widget3'>
            <h6>{title}</h6>
            <div className='Widget3Main'>
                <button onClick={incr}>-</button>
                <div>{value} {thisType}</div>
                <button onClick={decr}>+</button>
            </div>
        </div>
    )
}
export default Widget3;