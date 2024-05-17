import * as actionType from '../constants/myConstants.js';

export const getMyReducer = (state = { my: [] }, action) => {
    switch (action.type) {
        case actionType.GET_MY_SUCCESS:
            // console.log(action.payload);
            return { my: action.payload }
        case actionType.GET_MY_FAIL:
            return { error: action.payload }
        default:
            return state;
    }
}