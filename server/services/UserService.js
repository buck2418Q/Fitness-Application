import UserModel from "../models/User.js";

export const getUsers = async () => {
    return await UserModel.find();
}


