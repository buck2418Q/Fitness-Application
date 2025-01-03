import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Workouts() {
    const [workOut, setworkOut] = useState('');
    useEffect(() => {
        const workoutValue = sessionStorage.getItem('workoutValue');

        if (workoutValue) {
            setworkOut(workoutValue);
            console.log('1', workoutValue);
            sessionStorage.removeItem('workoutValue');
            console.log('2', workoutValue);
        }
    }, [])

    return (
        <div>the workout is : {workOut}</div>
    )
}

export default Workouts