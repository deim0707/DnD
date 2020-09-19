import {store} from "./types";
import {WidgetMap} from "../Components/types";

export const getDashboard = (state: store): WidgetMap => state.dashboardReducer;
