import { createWorkout, deleteWorkout, getWorkoutbyTrainerId, getWorkouts } from "../services/Workout.js";
import { createResponse } from "../utils/utilityFunctions.js";


export const CreateWorkout = async (req, res) => {
    try {
        const workoutData = req.body;
        if (!workoutData.title || !workoutData.trainerId) {
            return res.status(400).send(
                createResponse(400, "Workout title and Trainer ID are required.")
            );
        }
        if (req.files["image"]) {
            const imageBaseUrl = process.env.BASE_URL_MEDIA;
            workoutData.imagePath = `${imageBaseUrl}/${req.files["image"][0].path.replace(/\\/g, "/")}`;
        }
        if (req.files["video"]) {
            const videoBaseUrl = process.env.BASE_URL_MEDIA;
            workoutData.videoPath = `${videoBaseUrl}/${req.files["video"][0].path.replace(/\\/g, "/")}`;
        }
        const workoutResponse = await createWorkout(workoutData);
        return res.status(workoutResponse.statusCode).send(workoutResponse);
    } catch (error) {
        console.error("Error in CreateWorkout:", error);
        return res.status(500).send({
            error: error?.message || "Internal Server Error",
        });
    }
};



export const GetWorkouts = async (req, res) => {
    try {
        const workoutData = await getWorkouts();
        res.status(200).send({ workoutData });
    } catch (e) {
        res.status(404).send({
            error: e?.message
        });
    }
}

export const GetWorkoutsbyTrainer = async (req, res) => {
    try {
        const workoutData = await getWorkoutbyTrainerId(req.body.trainerId);
        res.status(200).send({ workoutData });
    } catch (e) {
        res.status(404).send({
            error: e?.message
        });
    }
}

export const DeleteWorkout = async (req, res) => {
    try {
        const workoutData = await deleteWorkout(req.body.id);
        res.status(workoutData.statusCode).send(workoutData);
    } catch (e) {
        res.status(404).send({
            error: e?.message
        });
    }
}