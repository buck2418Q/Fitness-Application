import TrainerModel from "../models/Trainers.js";

export const GetTrainers = async (req, res) => {
    try {
        const trainerData = await TrainerModel.find();
        res.status(200).send({trainerData})
    } catch (r) {
        res.status(404).send({message: r?.error})
    }
}



export c