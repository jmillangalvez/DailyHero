import { loginActions } from "../actions/loginActions";

export function loginReducer(state = [], action) {
    console.log(action.type);
    switch (action.type){
        case loginActions.LOGIN_FAILURE:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    };
};