import { put, takeEvery } from 'redux-saga/effects';
import { heroActions, loadHero } from "../actions/heroActions";
import { loginSuccess } from '../actions/loginActions';

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
    };
}

function* heroSaga() {
    yield takeEvery([heroActions.FETCH_HERO, heroActions.LOAD_HERO], configureHero);
}

export default heroSaga;
