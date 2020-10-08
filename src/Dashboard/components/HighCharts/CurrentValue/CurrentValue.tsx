import React, {FC, useEffect, useState} from "react";
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

// const subvalues = [8.1];
// const subvalues2 = [7.0];
// const subvalues3 = [9.0];
//
// setInterval(()=>{
//     const a = (Math.random() * 6 + 1).toFixed(2) ;
//     const b = (Math.random() * 6 + 1).toFixed(2) ;
//     const c = (Math.random() * 6 + 1).toFixed(2) ;
// }, 1000)

interface Ranges {
    min: number,
    max: number,
}



const CurrentValue: FC = () => {

    const {
        title,
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
    } = useCurrentValue();



    return (
        <div className="widgetWrapper">
            <CircularGauge
                id="gauge"
                value={8.1} // УБРАТЬ?
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
                value={8.1} // УБРАТЬ???
                className='secondCircle'
                subvalues={longValue}
            >
                <Scale startValue={rangeMinAttention.min} endValue={rangeAccident.max} tickInterval={tickInterval}/>

                <RangeContainer offset={55}>
                    <Range startValue={rangeMinAttention.min} endValue={rangeAccident.max} color="transparent"/>
                    <Range startValue={meanLongInterval.min} endValue={meanLongInterval.max} color="red"/>
                    <Range startValue={9.4} endValue={11.4} color="transparent"/> {/*// УБРАТЬ?*/}

                </RangeContainer>

                <SubvalueIndicator offset={57}/>

            </CircularGauge>

            <CircularGauge
                id="gauge"
                value={8.1} // УБРАТЬ???
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
                    <span>A</span>
                </div>
                <div className="infoBlockTime">
                    <span>среднее</span>
                    <span>за 10 мин</span>
                </div>
                <div className="infoBlockValue">
                    <span>{shortValue}</span>
                    <span>A</span>
                </div>
                <div className="infoBlockTime">
                    <span>среднее</span>
                    <span>за 30 мин</span>
                </div>
                <div className="infoBlockValue">
                    <span>{longValue}</span>
                    <span>A</span>
                </div>
            </div>

        </div>
    )
}

export default CurrentValue;