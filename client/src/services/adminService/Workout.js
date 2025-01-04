import { workout } from "../apiEndPoint/EnpPoint";
import axios from "axios"

export const getWorkoutData = async (page, pageSize) => {
    try {
        const response = await axios.get(`${workout}?page=${page}&pageSize=${pageSize}`)
        return response.data;
    } catch (error) {
        console.log(error)
    }
}