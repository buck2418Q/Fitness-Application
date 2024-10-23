import { login } from "../services/LoginService.js";

export const Login = async (req, res) => {
    try {
        const userData = await login(req.body);
        return res.status(userData.statusCode).send(userData);
    } catch (e) {
        res.status(500).send({ error: e.message || "Internal server error" });
    }
};