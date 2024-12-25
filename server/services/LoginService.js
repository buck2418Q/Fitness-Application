import bcrypt from 'bcryptjs';
import { createResponse } from "../utils/utilityFunctions.js";
import UserModel from '../models/User.js';
import TrainerModel from '../models/Trainers.js';
import AdminModel from '../models/Admin.js';
import jwt from 'jsonwebtoken'

export const login = async (userData) => {
    const user = await FindUserByEmail(userData.email);
    if (!user) {
        return createResponse(201, "User Not Found", null);
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


// export const FindUserByEmail = async (email) => {
//     const user = await UserModel.findOne({ email });
//     return user;
// };
export const FindUserByEmail = async (email) => {
    const models = [UserModel, TrainerModel, AdminModel];
    for (const model of models) {
        const user = await model.findOne({ email });
        if (user) {
            return user;
        }
    }
    return null;
};


export const createJwtToken = async (user) => {
    try {
        const jwtToken = await jwt.sign(
            {
                userName: user.firstName + ' ' + user.lastName,
                email: user.email,
                role: user.role
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