import { heroActions } from "../actions/heroActions";

export function heroReducer(state = [], action) {
    switch (action.type){
        case heroActions.LOAD_HERO:
            return {
                ...state,
                ...action.hero
            };
        default:
            return state;
    };
};