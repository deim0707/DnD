import { shallowEqual, useSelector } from "react-redux";
import {ArrayOfDashBoars} from "../Dashboard/models/dashboardTypes";

export const useShallowEqualSelector = (selector: any): ArrayOfDashBoars => {
    return useSelector(selector, shallowEqual);
};