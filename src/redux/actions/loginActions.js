export const loginActions = {
    LOGIN_START: 'LOGIN_START',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE'
}

export const loginStart = () => ({
    type: 'LOGIN_START'
});

export const loginSuccess = () => ({
    type: 'LOGIN_SUCCESS'
});

export const loginFailure = error => ({
    type: 'LOGIN_FAILURE',
    error
});
