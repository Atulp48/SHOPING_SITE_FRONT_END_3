
import axios from "axios";
import * as actionTypes from '../constants/myConstants.js'
import URL from "../../service/url"
export const getLikes = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/like`); // we use object destructuring to take data obj from response object;
        // console.log(data);
        dispatch({ type: actionTypes.GET_MY_SUCCESS, payload: data })


    } catch (err) {
        dispatch({ type: actionTypes.GET_MY_FAIL, payload: err.message })
    }
}


export const getStyles = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/style`); // we use object destructuring to take data obj from response object;
        // console.log(data);
        dispatch({ type: actionTypes.GET__STYLE_SUCCESS, payload: data })


    } catch (err) {
        dispatch({ type: actionTypes.GET_STYLE_FAIL, payload: err.message })
    }
}

export const getMobileDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_MOBILE_DETAILS_REQUEST })
        const { data } = await axios.get(`${URL}/like/${id}`); // we use object destructuring to take data obj from response object;
        // console.log(data);
        dispatch({ type: actionTypes.GET_MOBILE_DETAILS_SUCCESS, payload: data })


    } catch (err) {
        dispatch({ type: actionTypes.GET_MOBILE_DETAILS_FAIL, payload: err.message })
    }
}


