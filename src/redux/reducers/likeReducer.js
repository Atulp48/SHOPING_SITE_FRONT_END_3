import * as actionType from '../constants/myConstants'


export const getLikeReducer = (state = { mobile: [] }, action) => {
    switch (action.type) {
        case actionType.GET_MY_SUCCESS:
            // if ((action.payload).length < 7)
            return { mobile: action.payload }
        case actionType.GET_MY_FAIL:
            return { error: action.payload }
        default:
            return state;
    }
}

export const getStylesReducer = (state = { style: [] }, action) => {
    switch (action.type) {
        case actionType.GET__STYLE_SUCCESS:
            // if ((action.payload).length < 7)
            return { style: action.payload }
        case actionType.GET_STYLE_FAIL:
            return { style: action.payload }
        default:
            return state;
    }
}

export const getMobileDetailsReducer = (state = { mobile: {} }, action) => {

    switch (action.type) {
        case actionType.GET_MOBILE_DETAILS_REQUEST:
            // if ((action.payload).length < 7)
            return { loading: true }
        case actionType.GET_MOBILE_DETAILS_SUCCESS:
            return { loading: false, mobile: action.payload }
        case actionType.GET_MOBILE_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        case actionType.GET_MOBILE_DETAILS_RESET:
            return { mobile: {} }
        default:
            return state;
    }
}


