import {store} from "../models/storeTypes";
import {ArrayOfDashBoars} from "../models/dashboardTypes";

export const getDashboard = (state: store): ArrayOfDashBoars => state.dashboardReducer;
