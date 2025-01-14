import React, { useEffect, useState } from "react";
import { getWorkoutByCategoryData, getWorkoutData } from "../../services/adminService/Workout";
import { NextButton } from "../../components/NextButton";
import {
    Button, Card, CardBody, CardFooter, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Image, Tooltip, Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useApplicationUser } from "../../utils/ApplicationUserContext";


function Workouts() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [workOut, setworkOut] = useState('');
    const [workout, setWorkout] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [pagev, setPagev] = useState(1)
    const { isOpen: isOpenQuestion, onOpen: onOpenQuestion, onClose: onCloesQuestion, onOpenChange: onOpenChangeQuestion } = useDisclosure();
    const { isOpen: isOpenWorkout, onOpen: onOpenWorkout, onClose: onCloesWorkout, onOpenChange: onOpenChangeWorkout } = useDisclosure();
    const [selectedWorkout, setSelectedWorkout] = useState(null);

    const { appUserId } = useApplicationUser();
    const pageC = 1
    const pageSizeC = 9
    // const [workoutValue, setWorkoutValue] = useState('')
    useEffect(() => {
        const workoutValue = (sessionStorage.getItem('workoutValue'))
        if (workoutValue && workoutValue.length > 0) {
            setworkOut(selectedCategory);
            sessionStorage.removeItem('workoutValue');
            getWorkoutByCategory(pageC, pageSizeC, workoutValue)
        } else if (selectedCategory && selectedCategory.length > 0) {
            getWorkoutByCategory(pageC, pageSizeC, selectedCategory)
        }
        else {
            getWorkoutByCategory(pageC, pageSizeC, '')
        }
    }, [selectedCategory])

    const categoryData = [
        {
            workOut: 'Cardio',
            workoutValue: 'cardio'
        },
        {
            workOut: 'Cross Fit',
            workoutValue: 'crossfit'
        },
        {
            workOut: 'Build Muscle',
            workoutValue: 'buildmuscle'
        },
        {
            workOut: 'Core Strength',
            workoutValue: 'corestrength'
        },
        {
            workOut: 'Abs Workout',
            workoutValue: 'abs'
        },
        {
            workOut: 'Upper Body',
            workoutValue: 'upperbody'
        },
        {
            workOut: 'Aerobics',
            workoutValue: 'aerobics'
        },
        {
            workOut: 'Lower Body',
            workoutValue: 'lowerbody'
        },
    ];

    const getWorkoutByCategory = async (page = 1, pageSize = 9, category) => {
        try {
            setLoading(true);
            const result = await getWorkoutByCategoryData(page, pageSize, category);
            setWorkout(result.workoutData.workoutData);
            setTotalPages(result.workoutData.totalPages);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const workoutDetails = (data) => {
        // console.log('workout details', data)
        onOpenQuestion();
        setSelectedWorkout(data);
    }
    const cancelEnrollment = () => {
        onCloesQuestion()
    }
    const handleEnrollment = async () => {
        onCloesQuestion()
        // onOpenWorkout()
        console.log('applicaiton User', appUserId)
        console.log('selectedWorkout: ', selectedWorkout._id)
    }

    return (
        <>
            <div className="mb-2">
                <div className="bg-red-300 h-5 w-20">{appUserId}</div>
                <Dropdown>
                    <DropdownTrigger>
                        <Button className="capitalize" variant="bordered">
                            {selectedCategory ? selectedCategory : 'Select Workout'}
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="Select Workout"
                        selectedKeys={selectedCategory}
                        selectionMode="single"
                        variant="flat"
                        onSelectionChange={setSelectedCategory}
                    >
                        <DropdownItem textValue="All Workout" onClick={() => setSelectedCategory('')}>
                            All Workout
                        </DropdownItem>
                        {categoryData.map((category, index) => (
                            <DropdownItem key={index} textValue={category.workoutValue} onClick={() => setSelectedCategory(category.workoutValue)}>
                                {category.workOut}
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
            </div>

            <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(450px,1fr))] ">

                {workout.map((data, index) => (

                    <Card key={index} isPressable shadow="sm" onPress={() => workoutDetails(data)}>
                        <CardBody className="overflow-visible p-0">
                            {data?.price != 0 &&
                                <Tooltip content='Premium' color='success'>
                                    <Icon
                                        className="pointer-events-none text-2xl text-default-400 absolute z-40 right-[1px] top-[1px] h-8 w-8 p-1 shadow-inner bg-gradient-to-bl from-light to-secondlight rounded-xl"
                                        icon="solar:crown-bold"
                                        color="green"
                                    />
                                </Tooltip>}
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
                            {/* import {Icon} from "@iconify/react"; */}

                            <b>{data.title}</b>  <p className="font-thin text-xs">Category: <span className="capitalize text-sm font-normal"> {data.category}</span></p>
                        </CardFooter>
                    </Card>
                ))
                }

            </div>

            {/*workout card */}
            <div className="m-2 border-none rounded-xl flex justify-end items-center w-fit-conte fixed right-4 bottom-4 z-10">
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

            {/* want to enroll  */}
            <Modal isOpen={isOpenQuestion} onOpenChange={onOpenChangeQuestion} size="xs">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Want to Enroll to this Workout?</ModalHeader>
                            <ModalBody >
                                <div className="flex gap-4 w-full justify-between mb-4">
                                    <NextButton className="w-1/2" onClick={cancelEnrollment}>No, dont Enroll</NextButton>
                                    <NextButton className="w-1/2" onClick={handleEnrollment}>Yes, Enroll</NextButton>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>


            {/* workout detail  */}
            <Modal isOpen={isOpenWorkout} onOpenChange={onOpenChangeWorkout} size="full" scrollBehavior="inside" >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{selectedWorkout.title}</ModalHeader>
                            <ModalBody>
                                <div className="bg-secondlight dark:bg-background border-1 border-background/20 p-2 flex flex-col md:flex-row gap-4 h-full rounded-xl">
                                    <div className="flex flex-col gap-2 w-full md:w-9/12">
                                        <video src={selectedWorkout.videoPath} controls className="rounded-xl w-full"></video>
                                        <p className="bg-light dark:bg-secondary border-1 border-background/20 rounded-xl px-4 py-2">
                                            <strong>Description:</strong> {selectedWorkout.description}
                                        </p>
                                    </div>
                                    <div className="flex flex-col w-full md:w-3/12 h-full bg-light dark:bg-secondary/50 border-1 border-background/20 rounded-xl p-2">
                                        chat section
                                    </div>
                                </div>

                            </ModalBody>
                        </>
                    )}
                </ModalContent >
            </Modal >
        </>
    )
}

export default Workouts