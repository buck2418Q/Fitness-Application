import e from "cors";
import WorkoutModel from "../models/Workout.js";
import { createResponse } from "../utils/utilityFunctions.js";


// export const createWorkout = async (workoutData) => {
//     const NewWorkout = WorkoutModel.create(workoutData);
//     if (NewWorkout) {
//         return createResponse(201, "workout Created", null);
//     } else {
//         return createResponse(202, "Unable to create workout", null);
//     }
// }
export const createWorkout = async (workoutData) => {
    try {
        const newWorkout = await WorkoutModel.create(workoutData);
        if (newWorkout) {
            return createResponse(201, "Workout created successfully", 'newWorkout');
        } else {
            return createResponse(500, "Unable to create workout");
        }
    } catch (error) {
        console.error("Error in createWorkout:", error);
        return createResponse(500, error.message);
    }
};

export const getWorkouts = async () => {
    const workoutData = await WorkoutModel.find();
    if (workoutData) {
        return workoutData;
    } else {
        return createResponse(404, "No workout Data", null);
    }
}

export const getWorkoutbyTrainerId = async (trainerId) => {
    const workoutData = await WorkoutModel.find({ trainerId });
    if (workoutData) {
        return createResponse(200, "workout Data", workoutData);
    } else {
        return createResponse(201, "No workout Data", null);
    }
}

export const deleteWorkout = async (id) => {
    const isWorkoutExists = await WorkoutModel.findById(id);
    if (!isWorkoutExists) {
        return createResponse(404, "Workout does not exist", null);
    } else {
        try {
            const workout = await WorkoutModel.deleteOne({ _id: id });
            if (workout.deletedCount === 1) return createResponse(200, "Workout Deleted", null);
            else return createResponse(404, "Workout not deleted", null);
        } catch (error) {
            throw new Error(error.message || "DB error");
        }
    }
}