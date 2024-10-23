import bcrypt from 'bcrypt';
import { createResponse } from "../utils/utilityFunctions.js";
import UserModel from '../models/User.js';


export const login = async (userData) => {
    debugger
    const user = await FindUserByEmail(userData.email);
    if (!user) {
        return createResponse(211, "User Not Found", null);
    }
    try {
        const isPasswordValid = await bcrypt.compare(userData.password, user.password);
        if (!isPasswordValid) {
            return createResponse(211, "Invalid Password", null);
        }
        return createResponse(200, "Login Successful", "token");
    } catch (error) {
        throw new Error(error.message || "DB error");
    }
};


export const FindUserByEmail = async (email) => {
    const user = await UserModel.findOne({ email });
    return user;
};
