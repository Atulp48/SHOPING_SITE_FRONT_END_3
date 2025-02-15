import axios from 'axios';
import URL from "../service/url"



export const authenticateSingup = async (data) => {
    try {
        return await axios.post(`${URL}/singup`, data)
    } catch (error) {
        console.log("Error while singup api", error.message);
    }
}
export const authenticateLogin = async (data) => {
    try {
        return await axios.post(`${URL}/login`, data)
    } catch (error) {
        console.log("Error while login api", error.message);
        return error.response;

    }
}




export const payUsingPaytm = async (data) => {
    try {
        let response = await axios.post(`${URL}/payment`, data);
        return response.data;
    } catch (error) {
        console.log("Error while calling payment api", error);
    }
}








