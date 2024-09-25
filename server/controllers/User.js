import UserModel from '../models/User.js';


export const GetUsers = async (req, res) => {
    try {
        const userData = await UserModel.find();
        res.status(200).send({
            userData
        })
    } catch (e) {
        res.status(404).send({
            error: e?.message
        });
    }
}

export const CreateUser = async (req, res) => {
    try {
        const userData = await UserModel.create(req.body);
        if (userData) res.status(201).send({
            message: "Usre Created"
        });
        else {
            res.status(404).send({
                message: "Unable to create"
            });
        }
    } catch (e) {
        res.status(404).send({
            error: e?.message
        });
    }
}