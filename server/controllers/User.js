import { createUser, deleteUser, findUserById, getUsers, updateUser } from '../services/UserService.js';




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
        const userData = await updateUser(req);
        return res.status(userData.statusCode).send(userData);
    } catch (e) {
        res.status(404).send({ error: e?.message });
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
        const userData = await findUserById(req.body.id); // Use req.params.
        if (!userData) {
            return res.status(404).send({ error: "User does not exist" });
        }
        res.status(200).send(userData);
    } catch (e) {
        res.status(500).send({ error: e.message || "Internal Server Error" }); // Change to 500 for internal errors
    }
};
