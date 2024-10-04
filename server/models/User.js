import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    fitnessGoals: { type: String, required: true },
    address: { type: String, required: true }

    // location: {
    //     city: { type: String, required: true },
    //     postalCode: { type: String, required: true }
    // },
    // workoutHistory: [
    //     {
    //         workoutId: { type: mongoose.Types.ObjectId, required: true },
    //         workoutName: { type: String, required: true },
    //         caloriesBurned: { type: Number, required: true },
    //         date: { type: Date, required: true }
    //     }
    // ],
    // goalProgress: {
    //     currentWeight: { type: Number, required: true },
    //     targetWeight: { type: Number, required: true }
    // },
    // bookedSessions: [
    //     {
    //         sessionId: { type: mongoose.Types.ObjectId, required: true },
    //         partnerId: { type: mongoose.Types.ObjectId, required: true },
    //         status: { type: String, required: true },
    //         date: { type: Date, required: true }
    //     }
    // ],
    // paymentMethod: { type: String, required: true },
    // paymentHistory: [
    //     {
    //         paymentId: { type: mongoose.Types.ObjectId, required: true },
    //         amount: { type: Number, required: true },
    //         paymentMethod: { type: String, required: true },
    //         transactionDate: { type: Date, required: true },
    //         status: { type: String, required: true }
    //     }
    // ],
    // subscriptionType: { type: String, required: true },
    // userNotifications: [
    //     {
    //         notificationId: { type: mongoose.Types.ObjectId, required: true },
    //         title: { type: String, required: true },
    //         message: { type: String, required: true },
    //         isRead: { type: Boolean, default: false },
    //         createdAt: { type: Date, required: true }
    //     }
    // ]
});

const UserModel = mongoose.model('users', UserSchema);
export default UserModel;