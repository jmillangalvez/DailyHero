export const heroActions = {
    FETCH_HERO: 'FETCH_HERO',
    LOAD_HERO: 'LOAD_HERO'
}

export const fetchHero = userId => ({
    type: 'FETCH_HERO',
    userId
});

export const loadHero = hero => ({
    type: 'LOAD_HERO',
    hero
});
