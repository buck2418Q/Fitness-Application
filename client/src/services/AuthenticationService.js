import axios from "axios";
import { Login } from "./apiEndPoint/EnpPoint";

export const LoginUser = async (formData) => {
    try {
        const response = await axios.post(Login, formData)
        return response.data;
    } catch (error) {
        throw new Error("Unable to access API!", error);
    }
}