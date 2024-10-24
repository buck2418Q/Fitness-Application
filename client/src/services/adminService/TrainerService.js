import axios from "axios";
import { Trainers } from "../apiEndPoint/EnpPoint";



export const getAllTrainers = async () => {
    const token = sessionStorage.getItem('token');
    try {
        const response = await axios.get(Trainers, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.trainerData
    } catch (error) {
        throw new Error("Unable to access API!", error);
    }
}


export const CreateTrainer = async (formData) => {
    try {
        const response = await axios.post(Trainers, formData);
        return response;
    } catch (error) {
        throw new Error("unable to access API", error)
    }
}

export const DeleteTrainer = async (id) => {
    try {
        const response = await axios.delete(Trainers, {
            data: { id }
        })
        return response.data
    } catch (error) {
        throw new Error("Unable to access API", error);
    }
}