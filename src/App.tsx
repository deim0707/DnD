import React from 'react';
import Container from "./Components/Container";
import Widget1 from "./Components/Widgets/Widget1/Widget1";
import Widget2 from "./Components/Widgets/Widget2/Widget2";

function App() {

    return (
        <div className="App" style={{display: 'flex'}}>
            <Container/>
            <Widget1
                type={'leaf'}
                title={'CO2'}
                time={Date.now()}
                typeData={'ppm'}
                data={'426.0'}
            />

            <Widget2
                title={'Освещение. Автоматы'}
                isTurn={true}
                time={'17 сентября 13:20'}
            />
        </div>
    );
}

export default App;
