import { trainerName, workout } from "../apiEndPoint/EnpPoint";
import axios from "axios"

export const getWorkoutData = async (trainerId, page, pageSize) => {
    try {
        const response = await axios.get(`${workout}?trainerId=${trainerId}&page=${page}&pageSize=${pageSize}`)
        // console.log('res ', response)
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