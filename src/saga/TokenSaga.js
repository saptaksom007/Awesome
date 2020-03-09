import { put, call, fork, takeLatest, select, all } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import {
    TOKEN_REQUEST,
    TOKEN_SUCCESS,
    TOKEN_FAILURE,

    GET_TOKEN_REQUEST,
    GET_TOKEN_SUCCESS,
    GET_TOKEN_FAILURE

} from "../action/TypeConstants"


export function* tokenAction(action) {

    yield call(AsyncStorage.setItem, "MY_CREDS", JSON.stringify({ "token": action.token }))

    yield put({ type: TOKEN_SUCCESS, token: action.token })

}

export function* getTokenAction() {

    try {
        const myCreds = yield call(AsyncStorage.getItem, "MY_CREDS")

  

            if (myCreds == null)
                yield put({ type: GET_TOKEN_SUCCESS, token: null })
            else
                yield put({ type: GET_TOKEN_SUCCESS, token: JSON.parse(myCreds).token })



    } catch (error) {
        yield put({ type: GET_TOKEN_FAILURE, token: null });
    }

}




export function* watchTokenRequest() {
    yield takeLatest(TOKEN_REQUEST, tokenAction)
}

export function* watchGetTokenRequest() {
    yield takeLatest(GET_TOKEN_REQUEST, getTokenAction)
}
