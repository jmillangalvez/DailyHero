import { put, takeEvery } from 'redux-saga/effects';
import { loginActions, loginSuccess, loginFailure } from "../actions/loginActions";
import * as RootNavigation from '../../navigation/RootNavigation.js';

function* startLogin(action) {
    switch (action.type){
        case loginActions.LOGIN_START:
            //WIP: This will call the login API and return the uID if exist
            const correctUser = true;
            if(correctUser){
                yield put(loginSuccess());
            }else{
                yield put(loginFailure('User not found'));
            }
        case loginActions.LOGIN_SUCCESS:
            RootNavigation.navigate('Homepage', {});
    };
}

function* loginSaga() {
    yield takeEvery([loginActions.LOGIN_START, loginActions.LOGIN_SUCCESS], startLogin);
}

export default loginSaga;
