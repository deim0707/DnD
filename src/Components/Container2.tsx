import React, {FC} from "react";
import {useShallowEqualSelector} from "../Store/helpersStore";
import {getDashboard} from "../Store/selectors";
import {WidgetMap} from "./types";
import DashBoard from "./DashBoard/DashBoard";


const Container2: FC = () => {
    const dashboard: WidgetMap = useShallowEqualSelector(getDashboard)

    console.log(dashboard)
    return (
        <div>
            <DashBoard initial={dashboard}/>
        </div>
    )
}

export default Container2;