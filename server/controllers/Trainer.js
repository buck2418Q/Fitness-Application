import TrainerModel from "../models/Trainers.js";
import { createTrainer, deleteTrainer, getTrainers, trainerCount, updateTrainer } from "../services/TrainerService.js";
import { validatePagination } from "../utils/utilityFunctions.js";


export const TrainerCount = async (req, res) => {
    try {
        const totalTrainer = await trainerCount();
        res.status(200).send({ totalTrainer })
    } catch (error) {
        res.status(404).send({
            error: e?.message
        });
    }
}

// export const GetTrainers = async (req, res) => {
//     try {
//         const trainerData = await getTrainers();
//         res.status(200).send({ trainerData });
//     } catch (e) {
//         res.status(404).send({
//             error: e?.message
//         });
//     }
// }

export const GetTrainers = async (req, res) => {
    try {
        const { page, pageSize } = req.query;
        const { validatedPage, validatedPageSize } = validatePagination(page, pageSize);

        const trainerData = await getTrainers(validatedPage, validatedPageSize);
        res.status(200).send(trainerData);
    } catch (e) {
        res.status(404).send({
            error: e?.message,
        });
    }
};



export const CreateTrainer = async (req, res) => {
    try {
        const trainerData = await createTrainer(req.body);
        return res.status(trainerData.statusCode).send(trainerData)
    } catch (e) {
        return res.status(500).send({
            error: e?.message || "Internal Server Erro"
        })
    }
}


export const UpdateTrainer = async (req, res) => {
    try {
        const trainerData = await updateTrainer(req)
        return res.status(trainerData.statusCode).send(trainerData);
    } catch (e) {
        res.status(404).send({ error: e?.message });
    }
}


export const DeleteTrainer = async (req, res) => {
    try {
        const trainerData = await deleteTrainer(req.body.id);
        res.status(trainerData.statusCode).send(trainerData)
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}




export const FindTrainerById = async (req, res) => {
    try {
        const trainerData = await TrainerModel.findById(req.body.id);
        if (trainerData) {
            res.status(200).send({ trainerData });
        } else {
            res.status(404).send({ message: "Trainer not found" });
        }
    } catch (e) {
        res.status(500).send({ error: e.message });
    }
};
