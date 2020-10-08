import React, {useEffect, useState} from "react";
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

// const subvalues = [8.1];
// const subvalues2 = [7.0];
// const subvalues3 = [9.0];
//
// setInterval(()=>{
//     const a = (Math.random() * 6 + 1).toFixed(2) ;
//     const b = (Math.random() * 6 + 1).toFixed(2) ;
//     const c = (Math.random() * 6 + 1).toFixed(2) ;
// }, 1000)


const CurrentValue = () => {

    const [subvalues, setSubvalues] = useState<number[]>([8.1])
    const [subvalues2, setSubvalues2] = useState<number[]>([7.0])
    const [subvalues3, setSubvalues3] = useState<number[]>([9.0])


    useEffect(() => {
        const interval = setInterval(() => {
            const a = +(Math.random() * 11 + 1).toFixed(2);
            const b = +(Math.random() * 11 + 1).toFixed(2);
            const c = +(Math.random() * 11 + 1).toFixed(2);
            setSubvalues([a]);
            setSubvalues2([b]);
            setSubvalues3([c]);
            console.log(a, b, c)

        }, 2000)

        return (() => {
            clearInterval(interval)
        })
    }, [subvalues, subvalues2, setSubvalues3])

    return (
        <div className="widgetWrapper">
            <CircularGauge
                id="gauge"
                value={8.1}
                subvalues={subvalues}
                className='firstCircle'
            >
                <Scale startValue={5.4} endValue={11.4} tickInterval={0.1}>
                    <Tick color="#536878"/>
                    <Label indentFromTick={3}/>
                </Scale>

                <RangeContainer offset={10}>
                    <Range startValue={5.4} endValue={6.0} color="yellow"/>
                    <Range startValue={6.0} endValue={9.4} color="#32CD32"/>
                    <Range startValue={9.4} endValue={10.2} color="yellow"/>
                    <Range startValue={10.2} endValue={11.4} color="red"/>

                </RangeContainer>

                <ValueIndicator offset={7}/>
                <SubvalueIndicator offset={-22}/>
                <Title text="Ток А. Освещение">
                    <Font size={28}/>
                </Title>
            </CircularGauge>

            <CircularGauge
                id="gauge"
                value={8.1}
                className='secondCircle'
                subvalues={subvalues2}
            >
                <Scale startValue={5.4} endValue={11.4} tickInterval={0.1}/>

                <RangeContainer offset={55}>
                    <Range startValue={5.4} endValue={6.0} color="transparent"/>
                    <Range startValue={6.0} endValue={9.4} color="#7FFFD4"/>
                    <Range startValue={9.4} endValue={11.4} color="transparent"/>

                </RangeContainer>

                <SubvalueIndicator offset={57}/>

            </CircularGauge>

            <CircularGauge
                id="gauge"
                value={8.1}
                className='thirdCircle'
                subvalues={subvalues3}
            >
                <Scale startValue={5.4} endValue={11.4} tickInterval={0.1}/>

                <RangeContainer offset={70}>
                    <Range startValue={5.4} endValue={11.4} color="transparent"/>
                    <Range startValue={8.0} endValue={10.0} color="red"/>
                </RangeContainer>

                <SubvalueIndicator offset={73}/>
            </CircularGauge>

            <div className="infoBlock">
                <div className="infoBlockTime">
                    <span>0.45 мин.</span>
                    <span>назад</span>
                </div>
                <div className="infoBlockValue">
                    <span>8.0</span>
                    <span>A</span>
                </div>
                <div className="infoBlockTime">
                    <span>среднее</span>
                    <span>за 10 мин</span>
                </div>
                <div className="infoBlockValue">
                    <span>7.6</span>
                    <span>A</span>
                </div>
                <div className="infoBlockTime">
                    <span>среднее</span>
                    <span>за 30 мин</span>
                </div>
                <div className="infoBlockValue">
                    <span>7.6</span>
                    <span>A</span>
                </div>
            </div>

        </div>
    )
}

export default CurrentValue;