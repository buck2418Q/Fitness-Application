import axios from "axios";
import { Login, oAuthLogin, Users } from "./apiEndPoint/EnpPoint";

export const LoginUser = async (formData) => {
    try {
        const response = await axios.post(Login, formData)
        return response.data;
    } catch (error) {
        throw new Error("Unable to access API!", error);
    }
}


export const openAuth = async (data) => {
    try {
        const response = await axios.post(oAuthLogin, data)
        return response.data;
    } catch (error) {
        console.log("Unable to access API!", error);
        return "Unable to access API!"
    }
}

export const CreateUser = async (formData) => {
    try {
        console.log('service', formData)
        const response = await axios.post(Users, formData);
        return response.data;
    } catch (e) {
        console.error(e)
    }
}