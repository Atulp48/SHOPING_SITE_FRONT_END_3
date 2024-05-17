import axios from "axios";
import * as actionTypes from '../constants/myConstants.js';
import URL from "../../service/url"


export const getMy = () => async (dispatch) => {
    try {
        const { my } = await axios.get(`${URL}/my`); // we use object destructuring to take data obj from response object;
        dispatch({ type: actionTypes.GET_MY_SUCCESS, payload: my })


    } catch (err) {
        dispatch({ type: actionTypes.GET_MY_FAIL, payload: err.message })
    }
}