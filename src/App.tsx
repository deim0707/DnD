import React from 'react';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import DashBoard from "./Dashboard/components/Drag&DropWrappers/DashBoard/DashBoard";
import Fancoil from "./Dashboard/components/Widgets/Fancoil/Fancoil/Fancoil";
import CurrentValue from "./Dashboard/components/HighCharts/CurrentValue/CurrentValue";


function App() {
    return (
        <div className="App">
            {/*<DashBoard id={'hjg123jhg123'}/>*/}
            {/*<Fancoil/>*/}
            <CurrentValue/>
        </div>
    );
}

export default App;
