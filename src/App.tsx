import React from 'react';
import DashBoard from "./Components/DashBoard/DashBoard";
import Info1_ElWidget from "./Components/Widgets/Info1_ElWidget/Info1_ElWidget";

import thermometerSvg from './Img/thermometer.svg'
import ChangeValue_ElWidget from "./Components/Widgets/ChangeValue_ElWidget/ChangeValue_ElWidget";


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
                        flexDirection: "column",
                        justifyContent: 'start',
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
            </div>
        </div>
    );
}

export default App;
