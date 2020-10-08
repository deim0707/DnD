import React, {FC} from "react";
import {
    CircularGauge,
    Scale,
    Tick,
    Label,
    RangeContainer,
    Range,
    ValueIndicator,
    SubvalueIndicator,
    Title,
    Font,
} from 'devextreme-react/circular-gauge';
import './CurrentValue.css'
import useCurrentValue from "./useCurrentValue.hook";


const CurrentValue: FC = () => {

    const {
        title,
        typeValue,
        currentValue,
        rangeNormal,
        rangeMinAttention,
        rangeMaxAttention,
        rangeAccident,
        shortValue,
        meanShortInterval,
        longValue,
        meanLongInterval,
        tickInterval,
        isOnline
    } = useCurrentValue();


    return (
        <div className="widgetWrapper">

            <div
                className='circleOnline'
                style={{backgroundColor: isOnline ? "#32CD32" : "red"}}
            />

            <CircularGauge
                id="gauge"
                subvalues={currentValue}
                className='firstCircle'
            >
                <Scale startValue={rangeMinAttention.min} endValue={rangeAccident.max} tickInterval={tickInterval}>
                    <Tick color="#536878"/>
                    <Label indentFromTick={3}/>
                </Scale>

                <RangeContainer offset={10}>
                    <Range startValue={rangeMinAttention.min} endValue={rangeMinAttention.max} color="yellow"/>
                    <Range startValue={rangeNormal.min} endValue={rangeNormal.max} color="#32CD32"/>
                    <Range startValue={rangeMaxAttention.min} endValue={rangeMaxAttention.max} color="yellow"/>
                    <Range startValue={rangeAccident.min} endValue={rangeAccident.max} color="red"/>

                </RangeContainer>

                <ValueIndicator offset={7}/>
                <SubvalueIndicator offset={-22}/>
                <Title text={title}>
                    <Font size={28}/>
                </Title>
            </CircularGauge>

            <CircularGauge
                id="gauge"
                className='secondCircle'
                subvalues={longValue}
            >
                <Scale startValue={rangeMinAttention.min} endValue={rangeAccident.max} tickInterval={tickInterval}/>

                <RangeContainer offset={55}>
                    <Range startValue={rangeMinAttention.min} endValue={rangeAccident.max} color="transparent"/>
                    <Range startValue={meanLongInterval.min} endValue={meanLongInterval.max} color="red"/>

                </RangeContainer>

                <SubvalueIndicator offset={57}/>

            </CircularGauge>

            <CircularGauge
                id="gauge"
                className='thirdCircle'
                subvalues={shortValue}
            >
                <Scale startValue={rangeMinAttention.min} endValue={rangeAccident.max} tickInterval={tickInterval}/>

                <RangeContainer offset={70}>
                    <Range startValue={rangeMinAttention.min} endValue={rangeAccident.max} color="transparent"/>
                    <Range startValue={meanShortInterval.min} endValue={meanShortInterval.max} color="#7FFFD4"/>
                </RangeContainer>

                <SubvalueIndicator offset={73}/>
            </CircularGauge>

            <div className="infoBlock">
                <div className="infoBlockTime">
                    <span>0.45 мин.</span>
                    <span>назад</span>
                </div>
                <div className="infoBlockValue">
                    <span>{currentValue}</span>
                    <span>{typeValue}</span>
                </div>
                <div className="infoBlockTime">
                    <span>среднее</span>
                    <span>за 10 мин</span>
                </div>
                <div className="infoBlockValue">
                    <span>{shortValue}</span>
                    <span>{typeValue}</span>
                </div>
                <div className="infoBlockTime">
                    <span>среднее</span>
                    <span>за 30 мин</span>
                </div>
                <div className="infoBlockValue">
                    <span>{longValue}</span>
                    <span>{typeValue}</span>
                </div>
            </div>

        </div>
    )
}

export default CurrentValue;