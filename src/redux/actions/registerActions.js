export const registerActions = {
    REGISTER_START: 'REGISTER_START',
    REGISTER_FAILURE: 'REGISTER_FAILURE'
}

export const registerStart = () => ({
    type: 'REGISTER_START'
});

export const registerFailure = error => ({
    type: 'REGISTER_FAILURE',
    error
});
