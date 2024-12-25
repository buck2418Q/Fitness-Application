import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    role: { type: String, required: false, default: "user" },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contactNumber: { type: Number, required: true },
    profilePicture: { type: String },
    gender: { type: String, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
});

const UserModel = mongoose.model('users', UserSchema);
export default UserModel;