import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/fitness360";

export const getAllUsers = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/user`);
        return response.data.userData;
    } catch (error) {
        throw new Error("Unable to access API!", error);
    }
};
