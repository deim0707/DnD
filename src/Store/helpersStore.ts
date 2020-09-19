import { shallowEqual, useSelector } from "react-redux";
import {WidgetMap} from "../Components/types";

//тут может быть много других возвращаемых значений
export const useShallowEqualSelector = (selector: any): WidgetMap => {
    return useSelector(selector, shallowEqual);
};