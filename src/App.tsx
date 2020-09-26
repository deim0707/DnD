import React from 'react';
import DashBoard from "./Dashboard/components/Drag&DropWrappers/DashBoard/DashBoard";

import Info1_ElWidget from "./Dashboard/components/Widgets/Info1_ElWidget/Info1_ElWidget";
import ChangeValue_ElWidget from "./Dashboard/components/Widgets/ChangeValue_ElWidget/ChangeValue_ElWidget";
import ModeControl_ElWidget from "./Dashboard/components/Widgets/ModeControl_ElWidget/ModeControl_ElWidget";
import FanPower from "./Dashboard/components/Widgets/FanPower/FanPower";

const thermometerSvg = require('./Img/thermometer.svg')

function App() {
    return (
        <div className="App">
            <DashBoard id={'hjg123jhg123'}/>
            <div
                style={
                    {
                        backgroundColor: '#494C54',
                        width: '305px',
                        height: '500px',
                        borderRadius: '5px',
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        padding: '10px',
                    }
                }
            >

                <Info1_ElWidget
                    svgFile={thermometerSvg}
                    value={16.5}
                    typeValue={'℃'}
                    time={Date.now()}
                />

                <ChangeValue_ElWidget value={16} typeValue={'℃'} min={12} max={20}/>

                <ModeControl_ElWidget isSnowflakeOn={true} isFanOn={false} isHeatingOn={true} isAutoOn={false}/>

                <FanPower/>

            </div>
        </div>
    );
}

export default App;
