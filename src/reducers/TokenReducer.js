import {
    TOKEN_REQUEST,
    TOKEN_SUCCESS,
    TOKEN_FAILURE,

    GET_TOKEN_REQUEST,
    GET_TOKEN_SUCCESS,
    GET_TOKEN_FAILURE

} from "../action/TypeConstants"

const initialState = {

    loading: true,
    token: null,

}

const TokenReducer = (state = initialState, action) => {

    switch (action.type) {

        case TOKEN_REQUEST:
            return {
                ...state,
                status: action.type,
            }

        case TOKEN_SUCCESS:
            return {
                ...state,
                status: action.type,
                token: action.token,
            }

        case TOKEN_FAILURE:
            return {
                ...state,
                status: action.type,
                token: null,
            }

        case GET_TOKEN_REQUEST:
            return {
                ...state,
                status: action.type,
                loading: false,
            }

        case GET_TOKEN_SUCCESS:
            return {
                ...state,
                status: action.type,
                loading: false,
                token: action.token,
            }

        case GET_TOKEN_FAILURE:
            return {
                ...state,
                status: action.type,
                loading: false,
                token: null,
            }

        default:
            return state;

    }

}

export default TokenReducer;
