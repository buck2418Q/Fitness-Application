import AdminModel from "../models/Admin.js";


export const GetAdmin = async (req, res) => {
    try {
        const adminData = await AdminModel.find();
        res.status(200).send({
            adminData
        });
    } catch (e) {
        res.status(404).send({
            error: e?.message
        });
    }
};


export const CreateAdmin = async (req, res) => {
    try {

        const adminData = await AdminModel.create(req.body);
        if (adminData) res.status(201).send({ message: "Admin Created" });
        else res.status(404).send({ message: "Unable to create" });
    } catch (e) {
        res.status(404).send({ eror: e?.message });
    }
};

export const UpdateAdmin = async (req, res) => {
    try {
        const adminData = await AdminModel.findByIdAndUpdate({ _id: req.body.id },
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role,
                createdAt: req.body.createdAt,
                UpdatedAt: req.body.UpdatedAt
            });
        if (adminData) res.status(200).send({ message: "Admin Updated" });
        else res.status(404).send({ message: "Unable to Update" });
    } catch (e) {
        res.status(404).send({ eror: e?.message });
    }
};


// export const DeleteAdmin = async (req, res) => {
//     try {
//         const adminData = await AdminModel.deleteOne({ _id: req.body.id });
//         if (adminData?.deletedCount == 1)
//             res.status(200).send({ message: "Admin deleted" });
//         else res.status(404).send({ message: "unable to delete" });
//     } catch (e) {
//         res.status(404).send({ error: e?.message });
//     }
// };


export const DeleteAdmin = async (req, res) => {
    try {
        const adminData = await AdminModel.deleteOne({ _id: req.body.id });
        if (adminData.deletedCount == 1) res.status(200).send({ message: "Admin Deleted" });
        else res.status(404).send({ message: "Unable to delete Admin" });
    } catch (e) {
        res.status(404).send({ error: e?.message });
    }
}


export const FindAdminById = async (req, res) => {
    try {
        const adminData = await AdminModel.find({ _id: req.body.id })
        res.status(200).send({ adminData })
    }
    catch {
        res.status(404).send({ error: e?.message });
    }
}
