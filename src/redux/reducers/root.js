import { combineReducers } from "redux";
import { welcomeInputReducer } from "./welcomeInputReducer";
import { loginReducer } from "./loginReducer";
import { registerReducer } from "./registerReducer";

export const reducer = combineReducers({
    welcomeInputs: welcomeInputReducer,
    login: loginReducer,
    register: registerReducer
});