import axios from "axios"
import { workout } from "../apiEndPoint/EnpPoint"

export const getWorkoutData = async (trainerId, page, pageSize) => {
    try {
        const response = await axios.get(`${workout}?trainerId=${trainerId}&page=${page}&pageSize=${pageSize}`)
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const deleteWorkout = async (id) => {
    try {
        const response = await axios.delete(workout, {
            data: { id }
        })
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const saveWorkout = async (workoutData) => {
    try {
        console.log('workout servoce : --  ', workoutData)
        const response = await axios.post(workout, workoutData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error in saving workout:", error);
        throw error; // Re-throw the error for handling in the component
    }
};