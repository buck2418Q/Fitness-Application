import AdminModel from "../models/Admin.js";
import { createResponse, passwordHash } from "../utils/utilityFunctions.js";

export const getAdmins = async () => {
    return await AdminModel.find();
};


export const createAdmin = async (adminData) => {
    const isEmailExists = await getAdminByEmail(adminData.email);
    if (isEmailExists) {
        return createResponse(400, "Email Exists", null);
    } else {
        try {
            const hashedPassword = await passwordHash(adminData.password);
            adminData.password = hashedPassword;
            const newAdmin = await AdminModel.create(adminData);
            if (newAdmin) {
                return createResponse(201, "Admin Created", null);
            } else {
                return createResponse(202, "Unable to create Admin", null);
            }
        } catch (error) {
            throw new Error(error.message || "DB error");
        }
    }
}

export const getAdminByEmail = async (email) => {
    const users = await AdminModel.find({ email });
    return users.length > 0 ? true : false;
};