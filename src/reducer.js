import catsReducer from "./features/cats/catsSlice";
import {
    combineReducers
} from "redux";

const rootReducer = combineReducers({
    cats: catsReducer,
});



export default rootReducer;