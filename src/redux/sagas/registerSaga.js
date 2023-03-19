import { put, takeEvery } from 'redux-saga/effects';
import { registerActions, registerSuccess, registerFailure } from "../actions/registerActions";

function* startRegister(action) {
    switch (action.type){
        case registerActions.REGISTER_START:
            //WIP: This will call the register API and return the uID if exist
            const userAvailable = true;
            if(userAvailable){
                yield put(registerSuccess());
            }else{
                yield put(registerFailure('User already created'));
            }
        case registerActions.REGISTER_SUCCESS:
    };
}

function* registerSaga() {
    yield takeEvery([registerActions.REGISTER_START, registerActions.REGISTER_SUCCESS], startRegister);
}

export default registerSaga;
