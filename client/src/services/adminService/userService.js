import axios from 'axios';
import { totalUser, Users } from '../apiEndPoint/EnpPoint';


const token = localStorage.getItem('token') || sessionStorage.getItem('token');

export const userCount = async () => {
    try {
        const response = await axios.get(totalUser, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.totalUser;
    } catch (error) {
        throw new Error("Unable to access API!", error);
    }
}

export const getAllUsers = async (page, pageSize) => {
    try {
        const response = await axios.get(`${Users}?page=${page}&pageSize=${pageSize}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.userData;
    } catch (error) {
        throw new Error("Unable to access API!", error);
    }
};

export const CreateUser = async (formData) => {
    try {
        const response = await axios.post(Users, formData);
        return response.data;
    } catch (error) {
        throw new Error("Unable to access API!", error);
    }
}


export const DeleteUser = async (id) => {
    try {
        const response = await axios.delete(Users, {
            data: { id },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw new Error("Unable to access API", error);
    }
}


export const UpdateUser = async (formData) => {
    try {
        const response = await axios.put(Users, formData, {
            headers: {
                Authorization: `Bearer ${token}`

            }
        });
        return response.data;
    } catch (error) {
        throw new Error("Unable to access API", error);
    }
}