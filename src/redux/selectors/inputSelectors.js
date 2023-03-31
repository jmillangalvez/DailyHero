import { createSelector } from "reselect";

const selectInputs = (state) => state.welcomeInputs;

export const heroNameSelector = () => createSelector(
    selectInputs,
    (welcomeInputs) => welcomeInputs.heroNameInput
);
