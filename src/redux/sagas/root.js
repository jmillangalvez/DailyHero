import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registerSaga from './registerSaga';
import heroSaga from './heroSaga';

export default function* rootSaga() {
    yield all([
        loginSaga(),
        registerSaga(),
        heroSaga()
    ]);
}
