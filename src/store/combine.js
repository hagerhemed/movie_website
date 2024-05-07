import { combineReducers } from "redux";
import FavReducer from "./cartReducer";

export default combineReducers({
    addToCart:FavReducer
})