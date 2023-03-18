import { registerActions } from "../actions/registerActions";

export function registerReducer(state = [], action) {
    switch (action.type){
        case registerActions.REGISTER_FAILURE:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    };
};