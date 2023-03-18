import { combineReducers } from "redux";
import { welcomeInputReducer } from "./welcomeInputReducer";

export const reducer = combineReducers({
    welcomeInputs: welcomeInputReducer
});