export const heroActions = {
    FETCH_HERO: 'FETCH_HERO',
    LOAD_HERO: 'LOAD_HERO',
    CREATE_HERO: 'CREATE_HERO'
}

export const fetchHero = userId => ({
    type: 'FETCH_HERO',
    userId
});

export const loadHero = hero => ({
    type: 'LOAD_HERO',
    hero
});

export const createHero = () => ({
    type: 'CREATE_HERO'
});
