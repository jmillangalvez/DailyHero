export const registerActions = {
    REGISTER_START: 'REGISTER_START',
    REGISTER_SUCCESS: 'REGISTER_SUCCESS',
    REGISTER_FAILURE: 'REGISTER_FAILURE'
}

export const registerStart = () => ({
    type: 'REGISTER_START'
});

export const registerSuccess = () => ({
    type: 'REGISTER_SUCCESS'
});

export const registerFailure = error => ({
    type: 'REGISTER_FAILURE',
    error
});
