import { combineReducers } from "redux";
import formReducer from "./form/reducer";
import authReducer from "./auth/reducer";
import profileReducer from "./profile/reducer";
import userReducer from "./users/reducer";
const reducer = combineReducers({
    form:formReducer,
    auth:authReducer,
    profile:profileReducer,
    user: userReducer
})

export default reducer