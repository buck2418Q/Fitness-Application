export const getAdmins = async () => {
    return await AdminModel.find();
};