import { put, select, takeEvery } from 'redux-saga/effects';
import { useSelector } from "react-redux";
import { heroActions, loadHero } from "../actions/heroActions";
import { loginSuccess } from '../actions/loginActions';
import { heroNameSelector } from '../selectors/inputSelectors';

function* configureHero(action) {
    switch (action.type){
        case heroActions.FETCH_HERO:
            //WIP: Retreive hero from API with action.userId
            const hero = {
                username: 'ExtraN',
                level: '33',
                gold: '1234'
            };
            
            if(hero){
                yield put(loadHero(hero));
            }
            break;
        case heroActions.LOAD_HERO:
            yield put(loginSuccess());
            break;
        case heroActions.CREATE_HERO:
            const heroName = yield select(heroNameSelector());
            const newHero = {
                username: heroName,
                level: '1',
                gold: '100'
            };
            yield put(loadHero(newHero));
    };
}

function* heroSaga() {
    yield takeEvery([heroActions.FETCH_HERO, heroActions.LOAD_HERO, heroActions.CREATE_HERO], configureHero);
}

export default heroSaga;
