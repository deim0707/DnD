import React from 'react';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import DashBoard from "./Dashboard/components/Drag&DropWrappers/DashBoard/DashBoard";
import Fancoil from "./Dashboard/components/Widgets/Fancoil/Fancoil/Fancoil";
import CurrentValue from "./Dashboard/components/HighCharts/CurrentValue/CurrentValue";

let data = {
    title: "Ток А. Освещение",
    currentValue: 8.1,
    shortValue: 9.0,
    longValue: 7.0,
    rangeMinAttention:{
        min: 5.4,
        max: 6.0,
    },
    rangeNormal: {
        min: 6.0,
        max: 7.0,
    },
    rangeMaxAttention: {
        min: 7.0,
        max: 9.4,
    },
    rangeAccident: {
        min: 9.4,
        max: 11.4,
    },
    meanShortInterval: {
        min: 6.0,
        max: 9.0,
    },
    meanLongInterval: {
        min: 8.0,
        max: 11.0,
    },

}

function App() {
    return (
        <div className="App">
            {/*<DashBoard id={'hjg123jhg123'}/>*/}
            {/*<Fancoil/>*/}
            <CurrentValue
                title={data.title}
                currentValue={data.currentValue}
                rangeNormal={data.rangeNormal}
                rangeMinAttention={data.rangeMinAttention}
                rangeMaxAttention={data.rangeMaxAttention}
                rangeAccident={data.rangeAccident}
                shortValue={data.shortValue}
                meanLongInterval={data.meanLongInterval}
                meanShortInterval={data.meanShortInterval}
                longValue={data.longValue}
            />
        </div>
    );
}

export default App;
