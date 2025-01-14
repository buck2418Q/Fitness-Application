import WorkoutModel from "../models/Workout.js";
import EnrollmentModal from '../models/Enrollment.js'
import { createResponse } from "../utils/utilityFunctions.js";


export const enrollWorkout = async (userId, workoutId, paymentStatus = "pending") => {
    try {
        const workout = await WorkoutModel.findById(workoutId);
        if (!workout) return createResponse(205, "Invalid Workout", null);

        const existingEnrollment = await EnrollmentModal.findOne({ userId, workoutId });
        if (existingEnrollment) return createResponse(205, "User is already enrolled in this workout.", null);

        const enrollment = await EnrollmentModal.create({ userId, workoutId, paymentStatus })
        if (enrollment) {
            return createResponse(201, "Enrolled Succesfully", null);
        } else {
            return createResponse(202, "Unable to enroll", null);
        }

    } catch (err) {
        throw new Error(err.message || "DB error");
    }

};


export const getEnrolledWorkouts = async (userId) => {
    const enrollments = await EnrollmentModal.find({ userId })
        .populate("workoutId", "title description imagePath videoPath price")
        .exec();

    return enrollments.map((enrollment) => ({
        ...enrollment.workoutId.toObject(),
        paymentStatus: enrollment.paymentStatus,
    }));
}