import React, { useEffect, useState } from "react";
import { getWorkoutByCategoryData, getWorkoutData } from "../../services/adminService/Workout";
import { NextButton } from "../../components/NextButton";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
function Workouts() {
    const [workOut, setworkOut] = useState('');
    const [workout, setWorkout] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [pagev, setPagev] = useState(1)
    const pageC = 1
    const pageSizeC = 9
    useEffect(() => {
        const workoutValue = sessionStorage.getItem('workoutValue');
        if (workoutValue && workoutValue.length > 0) {
            setworkOut(workoutValue);
            sessionStorage.removeItem('workoutValue');
            getWorkoutByCategory(pageC, pageSizeC, workoutValue)
        } else {
            getWorkout('', currentPage)
        }

    }, [])


    const getWorkout = async (trainerId, page = 1, pageSize = 9) => {
        try {
            setLoading(true);
            const result = await getWorkoutData(trainerId, page, pageSize);
            setWorkout(result.workoutData.workoutData);
            setTotalPages(result.workoutData.totalPages);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const getWorkoutByCategory = async (page = 1, pageSize = 9, category) => {
        try {
            setLoading(true);
            const result = await getWorkoutByCategoryData(page, pageSize, category);
            setWorkout(result.workoutData.workoutData);
            console.log(result)
            setTotalPages(result.workoutData.totalPages);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <div>the workout is : {workOut}</div>

            <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(450px,1fr))] ">

                {workout.map((data, index) => (

                    <Card key={index} isPressable shadow="sm" onPress={() => workoutDetails(daresultta)}>
                        <CardBody className="overflow-visible p-0">
                            <Image
                                alt={data.title}
                                className="w-full object-cover h-[200px]"
                                radius="lg"
                                shadow="sm"
                                src={data.imagePath}
                                width="100%"
                            />
                        </CardBody>
                        <CardFooter className="text-small justify-between">
                            <b>{data.title}</b>  <p className="font-thin text-xs">Category: <span className="capitalize text-sm font-normal"> {data.category}</span></p>
                        </CardFooter>
                    </Card>
                ))
                }

            </div>
            <div className="m-2 border-none rounded-xl flex justify-end items-center w-fit-conte absolute right-4 bottom-4">
                <div className="border-1 dark:border-secondlight border-background rounded-lg p-[1px] flex justify-center">
                    <NextButton
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                        color="secondary"
                        className="w-32 dark:bg-light dark:text-background"
                    >
                        Previous
                    </NextButton>
                    <span className="mx-[2px] border-1 border-background dark:border-light rounded-lg px-2 pt-[6px]">
                        Page {currentPage} of {totalPages}
                    </span>
                    <NextButton
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                        color="secondary"
                        className="w-32 dark:bg-light dark:text-background"
                    >
                        Next
                    </NextButton>
                </div>
            </div>
        </>
    )
}

export default Workouts