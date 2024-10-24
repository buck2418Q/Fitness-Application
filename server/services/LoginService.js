import bcrypt from 'bcrypt';
import { createResponse } from "../utils/utilityFunctions.js";
import UserModel from '../models/User.js';
import jwt from 'jsonwebtoken'

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

        const token = await createJwtToken(user)

        return createResponse(200, "Login Successful", token);
    } catch (error) {
        throw new Error(error.message || "DB error");
    }
};


export const FindUserByEmail = async (email) => {
    const user = await UserModel.findOne({ email });
    return user;
};

export const createJwtToken = async (user) => {
    try {
        const jwtToken = await jwt.sign(
            {
                userName: user.firstName,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1h'
            }
        );
        return jwtToken;
    } catch (error) {
        return null
    }
}