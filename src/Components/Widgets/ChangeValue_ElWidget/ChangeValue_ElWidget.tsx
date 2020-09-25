import React, {FC, useState} from "react";
import './ChangeValue_ElWidget.css';


interface Props {
    value: number,
    typeValue: string,
    min?: number,
    max?: number,
}

const ChangeValue_ElWidget: FC<Props> = ({value, typeValue, min, max}) => {

    const [currentValue, setCurrentValue] = useState<number>(value);

    const isCurrentValueMaximum: boolean = max ? Boolean(max && currentValue >= max) : false;

    const isCurrentValueMinimal: boolean = min ? Boolean(min && currentValue <= min) : false;

    const styleButton = (isNormalValue: boolean): Object => {
        const style = {
            cursor: 'not-allowed',
        }
        return !isNormalValue ? {} : style;
    }

    const incr = (): void => {
        if (isCurrentValueMaximum) return;
        else setCurrentValue(currentValue => ++currentValue);
    }

    const decr = (): void => {
        if (isCurrentValueMinimal) return;
        else setCurrentValue(currentValue => --currentValue)
    }

    return (
        <div className='ChangeValue'>
            <button
                style={styleButton(isCurrentValueMinimal)}
                disabled={isCurrentValueMinimal}
                onClick={decr}
            >
                -
            </button>
            <div className='value'>
                <span className="value">{currentValue}</span>
                <span className="type">{typeValue}</span>
            </div>
            <button
                style={styleButton(isCurrentValueMaximum)}
                disabled={isCurrentValueMaximum}
                onClick={incr}
            >
                +
            </button>
        </div>
    )
}

export default ChangeValue_ElWidget;