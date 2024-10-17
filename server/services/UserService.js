import UserModel from "../models/User.js";
import { createResponse, passwordHash } from "../utils/utilityFunctions.js";


export const getUsers = async () => {
    return await UserModel.find();
}


export const createUser = async (userData) => {
    const isEmailExists = await findUserByEmail(userData.email);
    // if (!userData.email || !userData.password) {
    //     return createResponse(404, "Email and password are required", "");
    // }
    if (isEmailExists) {
        return createResponse(400, "Email Exists", null);
    } else {
        try {
            const hashedPassword = await passwordHash(userData.email);
            userData.password = hashedPassword;
            const newUser = await UserModel.create(userData);
            if (newUser) {
                return createResponse(201, "User Created", null);
            } else {
                return createResponse(400, "Unable to create user", null);
            }
        } catch (error) {
            throw new Error(error.message || "DB error");
        }
    }
};




export const deleteUser = async (id) => {
    const isUserExists = await findUserById(id);
    if (!isUserExists) {
        return createResponse(404, "User does not exist", null);
    } else {
        try {
            const user = await UserModel.deleteOne({ _id: id });
            if (user.deletedCount === 1) {
                return createResponse(200, "User Deleted", null);
            } else {
                return createResponse(404, "User not deleted", null);
            }
        } catch (error) {
            throw new Error(error.message || "DB error");
        }
    }
};




export const findUserById = async (id) => {
    debugger
    const userExists = await UserModel.find({ _id: id });
    return userExists ? true : false;
};









export const findUserByEmail = async (email) => {
    const users = await UserModel.find({ email });
    return users.length > 0 ? true : false;
};