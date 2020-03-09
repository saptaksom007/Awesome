import { put, call, fork, takeLatest, select, all } from 'redux-saga/effects';
import {
    INCREMENT_REQUEST,
    INCREMENT_SUCCESS

} from "../action/TypeConstants"


export function* incrementAction(action){

    yield put({type: INCREMENT_SUCCESS, data: action.count+1})

}


export function* watchIncrementRequest(){
    yield takeLatest(INCREMENT_REQUEST, incrementAction)
}

