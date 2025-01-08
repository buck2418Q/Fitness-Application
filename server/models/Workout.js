import mongoose from "mongoose";
const WorkoutSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: false },
    imagePath: { type: String, required: false },
    videoPath: { type: String, required: false },
    dateCreated: { type: Date, default: Date.now },
    trainerId: { type: String, required: true },
    category: { type: String, required: true }
});
const WorkoutModel = mongoose.model('workouts', WorkoutSchema);
export default WorkoutModel;