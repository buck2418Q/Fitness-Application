import axios from "axios"
import { enrollWorkout } from "../apiEndPoint/EnpPoint"

export const getEnrolledWorkoutData = async (appUserId) => {
    try {
        const response = await axios.get(`${enrollWorkout}?userId=${appUserId}`)
        return response.data
    } catch (e) {
        console.log('error', e)
    }
}


export const enrollWorkoutData = async (enrollment) => {
    try {
        const response = await axios.post(enrollWorkout, enrollment)
        return response.data
    } catch (e) {
        console.log('error', e)
    }
}