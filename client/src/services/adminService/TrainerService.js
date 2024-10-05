import axios from "axios";
import { Trainers } from "../apiEndPoint/EnpPoint";

export const getAllTrainers = async () => {
    try {
        const response = await axios.get(Trainers);
        return response.data.trainerData
    } catch (error) {
        throw new Error("Unable to access API!", error);
    }
}