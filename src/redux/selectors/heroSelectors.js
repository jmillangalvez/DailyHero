import { createSelector } from "reselect";

const selectHero = (state) => state.hero;

export const levelSelector = () => createSelector(
    selectHero,
    (hero) => hero.level
);

export const goldSelector = () => createSelector(
    selectHero,
    (hero) => hero.gold
);

export const usernameSelector = () => createSelector(
    selectHero,
    (hero) => hero.username
);