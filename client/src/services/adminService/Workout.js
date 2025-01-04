import { trainerName, workout } from "../apiEndPoint/EnpPoint";
import axios from "axios"

export const getWorkoutData = async (page, pageSize) => {
    try {
        const response = await axios.get(`${workout}?page=${page}&pageSize=${pageSize}`)
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const getTrainersNameDate = async () => {
    try {
        const response = await axios.get(`${trainerName}`)
        return response.data;
    } catch (e) {
        console.log(e)
    }
}