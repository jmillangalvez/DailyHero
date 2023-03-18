import { welcomeInputActions } from "../actions/welcomeInputActions";

export function welcomeInputReducer(state = [], action) {
    switch (action.type){
        case welcomeInputActions.MODIFY_USERNAME_INPUT:
            return {
                ...state,
                welcomeInputs: {
                    ...state.welcomeInputs,
                    usernameInput: action.text
                }
            };
        case welcomeInputActions.MODIFY_EMAIL_INPUT:
            return {
                ...state,
                welcomeInputs: {
                    ...state.welcomeInputs,
                    emailInput: action.text
                }
            };
        case welcomeInputActions.MODIFY_PASSWORD_INPUT:
            return {
                ...state,
                welcomeInputs: {
                    ...state.welcomeInputs,
                    passwordInput: action.text
                }
            };
        case welcomeInputActions.RESET_INPUTS:
            return {
                ...state,
                welcomeInputs: {
                    usernameInput: '',
                    emailInput: '',
                    passwordInput: ''
                }
            };
        default:
            return state;
    };
};