import TrainerModel from "../models/Trainers.js";

export const GetTrainers = async (req, res) => {
    try {
        const trainerData = await TrainerModel.find();
        res.status(200).send({ trainerData })
    } catch (r) {
        res.status(404).send({ message: r?.error })
    }
}


export const CreateTrainer = async (req, res) => {
    try {
        const TrainerData = await TrainerModel.create(req.body);
        if (TrainerData) res.status(201).send({ message: "Trainer Created" });
        else res.status(404).send({ message: "unable to create Trainer" });

    } catch (e) {
        res.status(404).send({ eror: e?.message });
    }
}


export const UpdateTrainer = async (req, res) => {
    try {
        const TrainerData = await TrainerModel.findByIdAndUpdate({ _id: req.body.id },
            {
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
            }
        );
        if (TrainerData) res.status(200).send({ message: "trainer Updated" });
        else res.status(400).send({ message: "unable to update data" })
    } catch (e) {
        res.status(404).send({ eror: e?.message });
    }
}


export const DeleteTrainer = async (req, res) => {
    try {
        const trainerData = await TrainerModel.deleteOne({ _id: req.body.id });
        if (trainerData.deletedCount === 1) res.status(200).send({ message: "Trainer Deted" });
        else { res.status(400).send({ message: "User Not Found" }) }
    } catch (e) {
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
