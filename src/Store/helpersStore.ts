import { shallowEqual, useSelector } from "react-redux";
import {ArrayOfDashBoars} from "../Components/types";

//тут может быть много других возвращаемых значений
export const useShallowEqualSelector = (selector: any): ArrayOfDashBoars => {
    return useSelector(selector, shallowEqual);
};