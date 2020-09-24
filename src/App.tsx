import React from 'react';
import DashBoard from "./Components/DashBoard/DashBoard";
import TemperatureInfo from "./Components/Widgets/Widget4/TemperatureInfo";

import thermometerSvg from './Img/thermometer.svg'


function App() {
    return (
        <div className="App">
            {/*<DashBoard id={'hjg123jhg123'}/>*/}
            <div
                style={
                    {
                        backgroundColor: '#494C54',
                        width: '305px',
                        height: '500px',
                        borderRadius: '5px',
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '10px'
                    }
                }
            >
                <TemperatureInfo
                    svgFile={thermometerSvg}
                    value={16.5}
                    typeValue={'℃'}
                    time={Date.now()}
                />
            </div>
        </div>
    );
}

export default App;
