import TrainerModel from "../models/Trainers.js";

export const getTrainerDetails = async (page = 1, pageSize = 10) => {
    try {
        const skip = (page - 1) * pageSize; // Calculate the number of records to skip
        const trainerData = await TrainerModel.find({}, 'firstName lastName serviceType instaId facebook twitter')
            .skip(skip)
            .limit(pageSize);
        const totalRecords = await TrainerModel.countDocuments(); // Total number of trainers
        return { trainerData, totalRecords };
    } catch (error) {
        throw new Error("Failed to fetch trainer details", error);
    }
};
