import { enrollWorkout, getEnrolledWorkouts } from "../services/Enrollment.js";

export const EnrollWorkout = async (req, res) => {
    try {
        const { userId, workoutId, paymentStatus } = req.body;

        if (!userId || !workoutId) {
            return res.status(400).json({ message: "UserId and WorkoutId are required." });
        }

        const enrollment = await enrollWorkout(userId, workoutId, paymentStatus);
        res.status(201).json({ message: "Workout enrolled successfully.", enrollment });
    } catch (error) {
        console.error("Error in enrollWorkout:", error);
        res.status(500).json({ message: "Internal Server Error." });
    }
};

export const GetEnrolledWorkout = async (req, res) => {
    console.log(req.query)
    try {
        const { userId } = req.query;
        if (!userId) {
            return res.status(400).json({ message: "UserId is required." });
        }

        const workouts = await getEnrolledWorkouts(userId);
        res.status(200).json({ workouts });
    } catch (error) {
        console.error("Error in getEnrolledWorkouts:", error);
        res.status(500).json({ message: "Internal Server Error." });
    }
}