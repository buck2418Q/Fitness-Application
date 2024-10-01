import TrainerModel from "../models/Trainers.js";

export const GetTrainers = async (req, res) => {
    try {
        const trainerData = await TrainerModel.find();
        res.status(200).send({ trainerData })
    } catch (r) {
        res.status(404).send({ message: r?.error })
    }
}



export const CreateAdmin = async (req, res) => {
    try {
        const TrainerData = await TrainerModel.create(req.body);
        if (TrainerData) res.status(201).send({ message: "Trainer Created" });
        else res.status(404).send({ message: "unable to create Trainer" });

    } catch (e) {
        res.status(404).send({ eror: e?.message });
    }
}