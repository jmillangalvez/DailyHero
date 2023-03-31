export const welcomeInputActions = {
    MODIFY_USERNAME_INPUT: 'MODIFY_USERNAME_INPUT',
    MODIFY_EMAIL_INPUT: 'MODIFY_EMAIL_INPUT',
    MODIFY_PASSWORD_INPUT: 'MODIFY_PASSWORD_INPUT',
    MODIFY_HERO_NAME_INPUT: 'MODIFY_HERO_NAME_INPUT',
    RESET_INPUTS: 'RESET_INPUTS'
}

export const modifyUsernameInput = text => ({
    type: 'MODIFY_USERNAME_INPUT',
    text,
});

export const modifyEmailInput = text => ({
    type: 'MODIFY_EMAIL_INPUT',
    text,
});

export const modifyPasswordInput = text => ({
    type: 'MODIFY_PASSWORD_INPUT',
    text,
});

export const modifyHeroNameInput = text => ({
    type: 'MODIFY_HERO_NAME_INPUT',
    text,
});

export const resetInputs = () => ({
    type: 'RESET_INPUTS'
});
