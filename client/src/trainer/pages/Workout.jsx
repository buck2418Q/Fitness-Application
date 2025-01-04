import React, { useEffect, useState } from 'react'
import { getWorkoutData } from '../../services/trainerServices/Workout'
import Loader from '../../components/Loader';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { motion } from 'framer-motion';
import { fadeIn } from '../../assets/utils/motion';
import {
    Input,
    Card, CardBody, Image, Button, Slider, Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    CardFooter,
    useDisclosure,
} from "@nextui-org/react";
import { Form } from "@nextui-org/form";
import { NextButton } from '../../components/NextButton';
import { jwtDecode } from 'jwt-decode';
function Workout() {

    const [workout, setWorkout] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    // const [action, setAction] = useState(null);
    const [action, setAction] = React.useState(null);
    const [selectedWorkout, setSelectedWorkout] = useState(null);
    // const [trainerId, setTrainerId] = useState(null)

    useEffect(() => {
        const token = sessionStorage.getItem('token') || localStorage.getItem('token');
        if (token) {
            const decodedToken = jwtDecode(token);
            const trainerId = decodedToken.id;
            getWorkout(trainerId, currentPage)
        }
    }, [currentPage]);
    const handleEdit = (data) => {
        console.log('edit', data)
    }
    const handleDelete = (data) => {
        console.log('Delete : ', data)
    }

    const getWorkout = async (trainerId, page = 1, pageSize = 5) => {
        try {
            setLoading(true)
            const result = await getWorkoutData(trainerId, page, pageSize)
            console.log('workouts : ', result.workoutData.workoutData)
            setWorkout(result.workoutData.workoutData)
            setTotalPages(result.workoutData.totalPages)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    };
    const workoutDetails = (data) => {
        // console.log('workout details', data)
        setSelectedWorkout(data);
    }
    return (
        <>
            <section>
                <div className='flex justify-between mb-4'>
                    <div className='text-xl font-semibold'>Workout List</div>
                    <NextButton color='secondary' onPress={onOpen}>Add Workout</NextButton>
                </div>

                <div className={`absolute z-20 rounded-2xl left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-svh w-svw ${loading === true ? "" : "hidden"}`}>
                    <Loader />
                </div>



                <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(450px,1fr))] ">

                    {workout.map((data, index) => (

                        <Card key={index} isPressable shadow="sm" onPress={() => workoutDetails(data)}>
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    alt={data.title}
                                    className="w-full object-cover h-[140px]"
                                    radius="lg"
                                    shadow="sm"
                                    src={data.imagePath}
                                    width="100%"
                                />
                            </CardBody>
                            <CardFooter className="text-small justify-between">
                                <b>{data.title}</b>
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
            </section>

            <Modal
                isDismissable={false}
                isKeyboardDismissDisabled={true}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Add A new Workout</ModalHeader>
                            <ModalBody>
                                <Form
                                    className="w-full max-w-xs flex flex-col gap-4"
                                    validationBehavior="native"
                                    onReset={() => setAction("reset")}
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        let data = Object.fromEntries(new FormData(e.currentTarget));

                                        setAction(`submit ${JSON.stringify(data)}`);
                                    }}
                                >
                                    <Input
                                        isRequired
                                        errorMessage="Please enter a valid username"
                                        label="Username"
                                        labelPlacement="outside"
                                        name="username"
                                        placeholder="Enter your username"
                                        type="text"
                                    />

                                    <Input
                                        isRequired
                                        errorMessage="Please enter a valid email"
                                        label="Email"
                                        labelPlacement="outside"
                                        name="email"
                                        placeholder="Enter your email"
                                        type="email"
                                    />
                                    <div className="flex gap-2">
                                        <Button color="primary" type="submit">
                                            Submit
                                        </Button>
                                        <Button type="reset" variant="flat">
                                            Reset
                                        </Button>
                                    </div>
                                    {action && (
                                        <div className="text-small text-default-500">
                                            Action: <code>{action}</code>
                                        </div>
                                    )}
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cancel
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Save
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

            {/* Modal for displaying workout details */}
            {selectedWorkout && (
                <Modal size="5xl" isOpen={Boolean(selectedWorkout)} onOpenChange={() => setSelectedWorkout(null)} className='w-[90%]'>
                    <ModalContent>
                        <ModalHeader>{selectedWorkout.title}</ModalHeader>
                        <ModalBody>
                            <div className='flex flex-col gap-2'>
                                <div className='flex gap-2 justify-between text-sm bg-secondlight/40 py-1 px-2  rounded-md'>
                                    <p><strong>Date Created:</strong> {new Date(selectedWorkout.dateCreated).toLocaleDateString()}</p>
                                    <p><strong>Time Created:</strong> {new Date(selectedWorkout.dateCreated).toLocaleTimeString()}</p>
                                </div>
                                <p className='bg-secondlight/40 py-1 px-2  rounded-md'><strong>Description:</strong> {selectedWorkout.description}</p>
                            </div>
                            <video src={selectedWorkout.videoPath} controls></video>
                        </ModalBody>
                        <ModalFooter className='flex justify-between'>
                            <div className='flex gap-2'>
                                <NextButton className="border-1 bg-sky-200 border-sky-600 text-background rounded h-9 px-[14px] text-center" onClick={() => handleEdit(data._id)}>
                                    Edit
                                </NextButton>
                                <NextButton className="border-1 bg-red-200 border-red-500 text-background rounded rounded-br-lg h-9 px-[14px] text-center" onClick={() => handleDelete(data._id)}>
                                    Delete
                                </NextButton>
                            </div>

                            <Button color="danger" variant="light" onPress={() => setSelectedWorkout(null)}>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal >
            )
            }
        </>
    )
}

export default Workout