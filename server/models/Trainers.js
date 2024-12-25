import mongoose from 'mongoose';

const TrainerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: false,
        default: "trainer",
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    serviceType: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    contactNumber: {
        type: Number,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    certifications: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        required: true
    },
    servicesOffered: {
        type: String,
        required: true
    },
    totalClients: {
        type: String,
        required: true
    },
    instaId: {
        type: String,
        required: true
    },
    facebook: {
        type: String,
        required: true
    },
    twitter: {
        type: String,
        required: true
    },
})

const TrainerModel = mongoose.model('trainers', TrainerSchema);
export default TrainerModel;