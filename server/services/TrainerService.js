import TrainerModel from "../models/Trainers.js";
import { createResponse, passwordHash } from "../utils/utilityFunctions.js";

//vdlkasnvka
export const trainerCount = async () => {
    const count = TrainerModel.countDocuments();
    return await count;
}


// export const getTrainers = async () => {
//     return await TrainerModel.find();
// }
export const getTrainers = async (page, pageSize) => {
    const skip = (page - 1) * pageSize;
    const trainers = await TrainerModel.find().skip(skip).limit(pageSize);
    const totalTrainers = await TrainerModel.countDocuments();
    const totalPages = Math.ceil(totalTrainers / pageSize);
    return {
        trainers,
        totalPages,
    };
};


export const createTrainer = async (trainerData) => {
    const isEmailExists = await getTrainerByEmail(trainerData.email);
    if (isEmailExists) {
        return createResponse(400, "Email Exist", null)
    }
    else {
        try {
            const hashedPassword = await passwordHash(trainerData.password);
            trainerData.password = hashedPassword;
            const newTrainer = await TrainerModel.create(trainerData);
            if (newTrainer) {
                return createResponse(201, "Trainer Created", null)
            }
            else {
                return createResponse(400, "Unable to create Trainer", null)
            }
        } catch (error) {
            // throw new Error(error.message || "DB error")
            return createResponse(400, "DB error", null)
        }
    }
}


export const updateTrainer = async (req) => {
    const isTrainerExists = await getTrainerById(req.body.id);
    if (!isTrainerExists) {
        return createResponse(404, "Trainer Does not Exist", null)
    } else {
        try {
            const trainer = await TrainerModel.findByIdAndUpdate({ _id: req.body._id }, {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                serviceType: req.body.serviceType,
                location: req.body.location,
                city: req.body.city,
                contactNumber: req.body.contactNumber,
                bio: req.body.bio,
                certifications: req.body.certifications,
                profilePicture: req.body.profilePicture,
                servicesOffered: req.body.servicesOffered,
                totalClients: req.body.totalClients,
                pricingDetails: req.body.pricingDetails,
            });
            if (trainer) return createResponse(200, "Trainer Updated", null);
            else return createResponse(400, "Trainer Not Updated", null)
        } catch (error) {
            throw new Error(error.message || "DB Error")
        }
    }
}


export const deleteTrainer = async (id) => {
    const isTrainerExists = await getTrainerById(id);
    if (!isTrainerExists) {
        return createResponse(404, "Trainer not Found", null);
    } else {
        try {
            const trainer = await TrainerModel.deleteOne({ _id: id });
            if (trainer.deletedCount === 1) return createResponse(200, "Trainer Deleted", null);
            else return createResponse(404, "Trainer Not Deleted", null)
        } catch (error) {
            throw new Error(error.message || "DB error");

        }
    }
}


export const getTrainerById = async (id) => {
    const trainerExists = await TrainerModel.find({ _id: id });
    return trainerExists ? true : false;
}


export const getTrainerByEmail = async (email) => {
    const trainer = await TrainerModel.find({ email })
    return trainer.length > 0 ? true : false;
}