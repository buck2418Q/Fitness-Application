import UserModel from '../models/User.js';
import { createUser, deleteUser, getUsers } from '../services/UserService.js';
import { createResponse } from '../utils/utilityFunctions.js';



export const GetUsers = async (req, res) => {
    try {
        const userData = await getUsers();
        res.status(200).send({ userData });
    } catch (e) {
        res.status(404).send({
            error: e?.message
        });
    }
}


export const CreateUser = async (req, res) => {
    try {
        const userData = await createUser(req.body);
        return res.status(userData.statusCode).send(userData)
    } catch (e) {
        return res.status(500).send({
            error: e?.message || "Internal Server Error",
        });
    }
}


export const UpdateUser = async (req, res) => {
    try {
        const userData = await UserModel.findByIdAndUpdate({
            _id: req.body._id
        }, {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            profilePicture: req.body.profilePicture,
            age: req.body.age,
            gender: req.body.gender,
            height: req.body.height,
            weight: req.body.weight,
            fitnessGoals: req.body.fitnessGoals,
            address: req.body.address

        }
        );
        if (userData) res.status(200).send({ message: "User Updated" });
        else res.status(400).send({ message: "unable to update data" });
    } catch (e) {
        res.status(404).send({ eror: e?.message });
    }
}



export const DeleteUser = async (req, res) => {
    try {
        const userData = await deleteUser(req.body.id);
        res.status(userData.statusCode).send(userData);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};




export const FindUserById = async (req, res) => {
    try {
        const userData = await UserModel.find({ _id: req.body.id });
        res.status(200).send({ userData });
    } catch (e) {
        res.status(404).send({ error: e?.message });
    }
}