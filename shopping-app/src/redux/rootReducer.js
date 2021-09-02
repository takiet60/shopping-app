import cartReducer from "./cart/cartReducer";
import userReducer from "./user/userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    cartState: cartReducer,
    userState: userReducer
})

export default rootReducer