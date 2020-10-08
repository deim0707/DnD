import React, {FC} from "react";
import Info from "../Info/Info";
import ChangeValue from "../ChangeValue/ChangeValue";
import ModeControl from "../ModeControl/ModeControl";
import FanPower from "../FanPower/FanPower";
import Checkbox from "../Checkbox/Checkbox";
import './Fancoil.css'

const thermometerSvg = require('../../../../../Img/thermometer.svg')


const Fancoil: FC = () => {
    return (
        <div className='FancoilWrapper'>
            <Info
                svgFile={thermometerSvg}
                value={16.5}
                typeValue={'℃'}
                time={Date.now()}
            />

            <ChangeValue value={16} typeValue={'℃'} min={12} max={20}/>

            <ModeControl isSnowflakeOn={true} isFanOn={false} isHeatingOn={true} isAutoOn={false}/>

            {/*<FanPower/>*/}

            {/*<Checkbox/>*/}
        </div>
    )
}

export default Fancoil;