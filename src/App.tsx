import React from 'react';
import Container2 from './Components/Container2';
import Widget1 from "./Components/Widgets/Widget1/Widget1";
import Widget2 from "./Components/Widgets/Widget2/Widget2";
import Widget3 from "./Components/Widgets/Widget3/Widget3";

function App() {

    return (
        <div className="App" style={{display: 'flex'}}>
            <Container2/>

            {/*<Widget1*/}
            {/*    title={'CO2'}*/}
            {/*    value={'426.0'}*/}
            {/*    type={'leaf'}*/}
            {/*    time={Date.now()}*/}
            {/*    typeData={'ppm'}*/}
            {/*/>*/}

            {/*<Widget2*/}
            {/*    value={true}*/}
            {/*    title={'Освещение. Автоматы'}*/}
            {/*    time={'17 сентября 13:20'}*/}
            {/*/>*/}

            {/*<Widget3*/}
            {/*    value={1}*/}
            {/*    title={'Темература'}*/}
            {/*    type={'celsia'}*/}
            {/*/>*/}
        </div>
    );
}

export default App;
