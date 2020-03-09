import { put, call, fork, takeLatest, select, all } from 'redux-saga/effects';
import { watchIncrementRequest } from './IncrementSaga'
import { watchTokenRequest, watchGetTokenRequest } from './TokenSaga'

function* rootSaga() {

    yield all([
        watchIncrementRequest(),
        watchTokenRequest(),
        watchGetTokenRequest()
    ])

}

export default rootSaga;