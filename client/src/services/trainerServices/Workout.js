import axios from "axios"
import { workout } from "../apiEndPoint/EnpPoint"

export const getWorkoutData = async () => {
    try {
        const response = await axios.get(workout)
        return response.data;
    } catch (error) {
        console.log(error)
    }
}