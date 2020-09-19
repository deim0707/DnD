import {store} from "./types";
import {ArrayOfDashBoars} from "../Components/types";

export const getDashboard = (state: store): ArrayOfDashBoars => state.dashboardReducer;
