import axios from "axios";
import { knowTrainer } from "../apiEndPoint/EnpPoint";

export const knowAllTrainers = async (page = 1, pageSize = 10) => {
    try {
        const response = await axios.get(knowTrainer.getAllTrainer(), {
            params: { page, pageSize }, // Add pagination parameters
        });
        return response.data;
    } catch (error) {
        throw new Error("Unable to access API!", error);
    }
};
