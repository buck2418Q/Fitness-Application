import axios from "axios"
import { workout } from "../apiEndPoint/EnpPoint"

export const getWorkoutData = async (trainerId, page, pageSize) => {
    try {
        console.log(trainerId, page, pageSize)
        const response = await axios.get(`${workout}?trainerId=${trainerId}&page=${page}&pageSize=${pageSize}`)
        return response.data;
    } catch (error) {
        console.log(error)
    }
}