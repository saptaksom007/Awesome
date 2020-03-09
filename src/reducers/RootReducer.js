import { combineReducers } from 'redux'
import IncrementReducer from './IncrementReducer'
import TokenReducer from './TokenReducer'

const allReducers = combineReducers({

    IncrementReducer : IncrementReducer,
    TokenReducer: TokenReducer,

})

const rootReducer = (state,action) => {

    return allReducers(state,action);

}

export default rootReducer;