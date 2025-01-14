import mongoose from "mongoose";

const EnrollmentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    workoutId: { type: mongoose.Schema.Types.ObjectId, ref: 'workouts', required: true },
    paymentStatus: { type: String, enum: ["pending", "paid"], default: "pending" },
    enrollmentDate: { type: Date, default: Date.now },
    // accessExpiry: { type: Date }
})

const EnrollmentModal = mongoose.model('enrollment', EnrollmentSchema);
export default EnrollmentModal;