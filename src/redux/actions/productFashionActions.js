import axios from "axios";
import * as actionTypes from "../constants/productFashionConstant"
import URL from "../../service/url"

export const getFashion = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/fashion`); // we use object destructuring to take data obj from response object;
        // console.log(data[0]);
        dispatch({ type: actionTypes.GET_PRODUCT_SUCCESS_FASHION, payload: data })


    } catch (err) {
        dispatch({ type: actionTypes.GET_PRODUCT_FAIL_FASHION, payload: err.message })
    }
}

export const getFashion1 = () => async (dispatch) => {
    try {
        const { data1 } = await axios.get(`${URL}/fashion1`); // we use object destructuring to take data obj from response object;
        dispatch({ type: actionTypes.GET_PRODUCT_SUCCESS_FASHION1, payload: data1 })


    } catch (err) {
        console.log("nill");
        dispatch({ type: actionTypes.GET_PRODUCT_FAIL_FASHION1, payload: err.message })
    }
}

