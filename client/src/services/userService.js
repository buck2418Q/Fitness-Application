import axios from 'axios';
import { GetUsers, Users } from './apiEndPoint/EnpPoint';

export const getAllUsers = async () => {
    try {
        const response = await axios.get(GetUsers.getAllUsers());
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
            data: { id }
        });
        return response.data;
    } catch (error) {
        throw new Error("Unable to access API", error);
    }
}


export const UpdateUser = async (formData) => {
    try {
        const response = await axios.put(Users, formData);
        return response.data;
    } catch (error) {
        throw new Error("Unable to access API", error);
    }
}