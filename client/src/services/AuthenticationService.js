import axios from "axios";
import { Login, Users } from "./apiEndPoint/EnpPoint";

export const LoginUser = async (formData) => {
    try {
        const response = await axios.post(Login, formData)
        return response.data;
    } catch (error) {
        throw new Error("Unable to access API!", error);
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