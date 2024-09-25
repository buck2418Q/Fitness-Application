import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    // _id is auto generated
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    createdAt: {
        type: String,
        required: true,
    },
    UpdatedAt: {
        type: String,
        // required: true,
    },
});
const AdminModel = mongoose.model("admin", AdminSchema);

export default AdminModel;

