import React from "react";
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

const subvalues = [8.1];
const subvalues2 = [7.0];
const subvalues3 = [9.0];


const CurrentValue = () => {

    return (
        <div className='flexWrapper'>
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

                    <RangeContainer offset={25}>
                        <Range startValue={5.4} endValue={6.0} color="transparent"/>
                        <Range startValue={6.0} endValue={9.4} color="#7FFFD4"/>
                        <Range startValue={9.4} endValue={11.4} color="transparent"/>

                    </RangeContainer>

                    <SubvalueIndicator offset={27}/>

                </CircularGauge>

                <CircularGauge
                    id="gauge"
                    value={8.1}
                    className='thirdCircle'
                    subvalues={subvalues3}
                >
                    <Scale startValue={5.4} endValue={11.4} tickInterval={0.1}/>

                    <RangeContainer offset={35}>
                        <Range startValue={5.4} endValue={11.4} color="transparent"/>
                        <Range startValue={8.0} endValue={10.0} color="red"/>
                    </RangeContainer>

                    <SubvalueIndicator offset={38}/>
                </CircularGauge>

                {/*<div className="infoBlock">*/}
                {/*        <div className="infoBlockTime">*/}
                {/*            <p>0.45 мин.</p>*/}
                {/*            <p>назад</p>*/}
                {/*        </div>*/}
                {/*        <div className="infoBlockValue">*/}
                {/*            <span>8.0</span>*/}
                {/*            <span>A</span>*/}
                {/*        </div>*/}
                {/*        <div className="infoBlockTime">*/}
                {/*            <p>среднее</p>*/}
                {/*            <p>за 10 мин</p>*/}
                {/*        </div>*/}
                {/*        <div className="infoBlockValue">*/}
                {/*            <span>7.6</span>*/}
                {/*            <span>A</span>*/}
                {/*        </div>*/}
                {/*        <div className="infoBlockTime">*/}
                {/*            <p>среднее</p>*/}
                {/*            <p>за 30 мин</p>*/}
                {/*        </div>*/}
                {/*        <div className="infoBlockValue">*/}
                {/*            <span>7.6</span>*/}
                {/*            <span>A</span>*/}
                {/*        </div>*/}
                {/*</div>*/}

            </div>
        </div>
    )
}

export default CurrentValue;