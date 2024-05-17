import * as actionType from '../constants/productFashionConstant'



export const getFashionReducer = (state = { fashion: [] }, action) => {
    switch (action.type) {
        case actionType.GET_PRODUCT_SUCCESS_FASHION:
            // console.log(action.payload);
            return { fashion: action.payload }
        case actionType.GET_PRODUCT_FAIL_FASHION:
            return { error: action.payload }
        default:
            return state;
    }
}

export const getFashionReducer1 = (state = { fashion1: [] }, action) => {
    switch (action.type) {
        case actionType.GET_PRODUCT_SUCCESS_FASHION1:
            // console.log(action.payload);
            return { fashion1: action.payload }
        case actionType.GET_PRODUCT_FAIL_FASHION1:
            return { error: action.payload }
        default:
            console.log("hello");
            return state;
    }
}
