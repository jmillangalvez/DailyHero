import { put, takeEvery } from 'redux-saga/effects';
import { loginActions, loginFailure } from "../actions/loginActions";
import { fetchHero } from '../actions/heroActions';
import * as RootNavigation from '../../navigation/RootNavigation.js';

function* startLogin(action) {
    switch (action.type){
        case loginActions.LOGIN_START:
            //WIP: This will call the login API and return the userId if exist
            const correctUser = true,
                userId = '1234';
            if(correctUser){
                yield put(fetchHero(userId));
            }else{
                yield put(loginFailure('User not found'));
            }
            break;
        case loginActions.LOGIN_SUCCESS:
            RootNavigation.navigate('Homepage', {});
            break;
    };
}

function* loginSaga() {
    yield takeEvery([loginActions.LOGIN_START, loginActions.LOGIN_SUCCESS], startLogin);
}

export default loginSaga;
