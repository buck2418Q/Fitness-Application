import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Workouts() {
    const { workoutValue } = useParams();

    useEffect(() => {
        debugger
        if (workoutValue) {
            fetchWorkoutData(workoutValue);
        }
    }, [workoutValue]);

    const fetchWorkoutData = async (workoutValue) => {
        console.log('workoutValue', workoutValue)
    }
    return (
        <div>the workout is : {workoutValue}</div>
    )
}

export default Workouts