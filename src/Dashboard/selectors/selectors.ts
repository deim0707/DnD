import {store} from "../models/dashboardTypes";
import {ArrayOfDashBoars} from "../models/dashboardTypes";

export const getDashboard = (state: store): ArrayOfDashBoars => state.dashboardReducer;
