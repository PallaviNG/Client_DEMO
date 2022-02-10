import { combineReducers } from "redux";
import { ProductReducers } from "./ProductReducers";

let reducer = combineReducers({
    allProduct: ProductReducers
});

export default reducer;