import UserModel from '../models/User.js';
import { getUsers } from '../services/UserService.js';
import { createResponse } from '../utils/response.js';



export const GetUsers = async (req, res) => {
    try {
        const userData = await getUsers();
        res.status(200).send({ userData });
    } catch (e) {
        res.status(404).send({
            error: e?.message
        });
    }
}


export const CreateUser = async (req, res) => {
    debugger
    try {
        const userData = await UserModel.create(req.body);
        console.log("test :   ", userData)
        if (userData) {
            res.status(201).json(createResponse(201, "User Created ", " "))
        }
        else {
            res.status(200).json(createResponse(201, "Unable to create user", " "))
        }
    } catch (e) {
        res.status(404).send({
            error: e?.message
        });
        // res.status(200).json(createResponse(400, e.message.errorResponse.email, " "))

    }
}


export const UpdateUser = async (req, res) => {
    try {
        const userData = await UserModel.findByIdAndUpdate({
            _id: req.body._id
        }, {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            profilePicture: req.body.profilePicture,
            age: req.body.age,
            gender: req.body.gender,
            height: req.body.height,
            weight: req.body.weight,
            fitnessGoals: req.body.fitnessGoals,
            address: req.body.address

            // location: {
            //     city: req.body.location.city,
            //     postalCode: req.body.location.postalCode
            // },
            // workoutHistory: req.body.workoutHistory.map((workout) => ({
            //     workoutId: workout.workoutId,
            //     workoutName: workout.workoutName,
            //     caloriesBurned: workout.caloriesBurned,
            //     date: workout.date
            // })),
            // goalProgress: {
            //     currentWeight: req.body.goalProgress.currentWeight,
            //     targetWeight: req.body.goalProgress.targetWeight
            // },
            // bookedSessions: req.body.bookedSessions.map((session) => ({
            //     sessionId: session.sessionId,
            //     partnerId: session.partnerId,
            //     status: session.status,
            //     date: session.date
            // })),
            // paymentMethod: req.body.paymentMethod,
            // paymentHistory: req.body.paymentHistory.map((payment) => ({
            //     paymentId: payment.paymentId,
            //     amount: payment.amount,
            //     paymentMethod: payment.paymentMethod,
            //     transactionDate: payment.transactionDate,
            //     status: payment.status
            // })),
            // subscriptionType: req.body.subscriptionType,
            // userNotifications: req.body.userNotifications.map((notification) => ({
            //     notificationId: notification.notificationId,
            //     title: notification.title,
            //     message: notification.message,
            //     isRead: notification.isRead,
            //     createdAt: notification.createdAt
            // }))

        }
        );
        if (userData) res.status(200).send({ message: "User Updated" });
        else res.status(400).send({ message: "unable to update data" });
    } catch (e) {
        res.status(404).send({ eror: e?.message });
    }
}


export const DeleteUser = async (req, res) => {
    try {
        const userData = await UserModel.deleteOne({ _id: req.body.id });
        if (userData.deletedCount === 1) res.status(200).send({ message: "User Deleted" });
        else {
            res.status(404).send({
                message: "User not found"
            });
        }
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}


export const FindUserById = async (req, res) => {
    try {
        const userData = await UserModel.find({ _id: req.body.id });
        res.status(200).send({ userData });
    } catch (e) {
        res.status(404).send({ error: e?.message });
    }
}