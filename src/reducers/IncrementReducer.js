import {
    INCREMENT_REQUEST,
    INCREMENT_SUCCESS

} from "../action/TypeConstants"

const initialState = {

    count: 0,
    status: "",

}

const IncrementReducer = (state = initialState, action) => {

    switch (action.type) {

        case INCREMENT_REQUEST:
            return {
                ...state,
                status: action.type
            }

        case INCREMENT_SUCCESS:
            return {
                ...state,
                status: action.type,
                count: action.data,
            }

        default:
            return state;

    }

}

export default IncrementReducer;
