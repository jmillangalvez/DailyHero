import { put, takeEvery } from 'redux-saga/effects';
import { registerActions, registerSuccess, registerFailure } from "../actions/registerActions";
import { loadHero } from '../actions/heroActions';

function* startRegister(action) {
    switch (action.type){
        case registerActions.REGISTER_START:
            //WIP: This will call the register API and return the userId if exist
            const userAvailable = true;
            const newHero = {
                username: 'newHero',
                level: '1',
                gold: '100'
            };
            if(userAvailable){
                yield put(loadHero(newHero));
            }else{
                yield put(registerFailure('User already created'));
            }
            break;
    };
}

function* registerSaga() {
    yield takeEvery([registerActions.REGISTER_START], startRegister);
}

export default registerSaga;
