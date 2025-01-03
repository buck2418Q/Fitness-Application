import React, { useEffect, useState } from 'react'
import { getWorkoutData } from '../../services/trainerServices/Workout'
import { AgGridReact } from 'ag-grid-react';
import Loader from '../../components/Loader';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { motion } from 'framer-motion';
import { fadeIn } from '../../assets/utils/motion';
import {
    Card, CardBody, Image, Button, Slider, Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from "@nextui-org/react";
import { NextButton } from '../../components/NextButton';
function Workout() {

    const [workout, setWorkout] = useState([]);
    const [loading, setLoading] = useState(false);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [selectedWorkout, setSelectedWorkout] = useState(null);
    const [colDefs, setColDefs] = useState([
        { field: 'title', headerName: 'Title' },
        { field: 'description', headerName: 'Description' },
        { field: 'dateCreated', headerName: 'Date Created' },
        { field: 'imagePath', headerName: 'Image Path' },
        { field: 'videoPath', headerName: 'Video Path' },
        {
            field: "actionButtons",
            headerName: "Actions",
            cellRenderer: (params) => (
                <div>
                    <button className="bg-cyan-400 mx-1 rounded h-9 px-[14px] text-center" onClick={() => handleEdit(params.data)}>
                        Edit
                    </button>
                    <button className="bg-red-400 mx-1 rounded h-9 px-[14px] text-center" onClick={() => handleDelete(params.data)}>
                        Delete
                    </button>
                </div>
            ),
        },
    ]);

    useEffect(() => {
        getWorkout()
    }, []);
    const handleEdit = (data) => {
        setSelectedWorkout(data);  // Set selected workout data
        onOpen();  // Open the modal
    }
    const handleDelete = (data) => {
        console.log('Delete : ', data)
    }

    const getWorkout = async () => {
        try {
            setLoading(true)
            const result = await getWorkoutData()
            console.log('workouts : ', result.workoutData)
            setWorkout(result.workoutData)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    };

    return (
        <>
            <div>Workout</div>

            <div className={`absolute z-20 rounded-2xl left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-svh w-svw ${loading === true ? "" : "hidden"}`}>
                <Loader />
            </div>



            <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(450px,1fr))] ">

                {workout.map((data, index) => (
                    <Card
                        key={index}
                        isBlurred
                        className="border-none bg-secondlight/60 dark:bg-default-100/50 max-w-[500px]"
                        shadow="sm"
                    >
                        <CardBody>
                            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                                <div className="relative col-span-6 md:col-span-4 ">
                                    <Image
                                        alt="Album cover"
                                        className="object-cover"
                                        height={200}
                                        shadow="md"
                                        src={data.imagePath}
                                        width="100%"
                                    />
                                </div>

                                <div className="flex flex-col justify-between h-full col-span-6 md:col-span-8  ">

                                    <div className=''>
                                        <div className='flex justify-between border-b-1 border-secondary/20 dark:border-secondlight/20 pb-1 mb-2'>
                                            <span className='text-xl font-semibold'>{data.title}</span>
                                            <div className='flex flex-col items-end text-sm text-secondary dark:text-secondlight'>
                                                <span>Date: {data.dateCreated.split('T')[0]}</span>
                                                <span>Time: {data.dateCreated.split('T')[1].split('.')[0]}</span>
                                            </div>
                                        </div>
                                        <div className='text-sm text-secondary dark:text-secondlight'>{data.description}</div>
                                    </div>
                                    <div className='flex justify-between items-center mt-2'>
                                        {/* <NextButton onPress={onOpen} className="border-1 bg-green-200 border-green-500 text-background rounded h-9 px-[14px] text-center" onClick={() => handleEdit(data._id)}>
                                            Watch Video
                                        </NextButton> */}
                                        <NextButton onPress={onOpen} className="border-1 bg-green-200 border-green-500 text-background rounded h-9 px-[14px] text-center" onClick={() => handleEdit(data)}>
                                            Watch Video
                                        </NextButton>
                                        <NextButton className="border-1 bg-sky-200 border-sky-600 text-background rounded h-9 px-[14px] text-center" onClick={() => handleEdit(data._id)}>
                                            Edit
                                        </NextButton>
                                        <NextButton className="border-1 bg-red-200 border-red-500 text-background rounded rounded-br-lg h-9 px-[14px] text-center" onClick={() => handleDelete(data._id)}>
                                            Delete
                                        </NextButton>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                ))
                }

                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">
                                    {selectedWorkout ? selectedWorkout.title : "Title"}
                                </ModalHeader>
                                <ModalBody>
                                    <video src={selectedWorkout.videoPath} className='border-1 border-success-400' controls></video>
                                </ModalBody>
                                <ModalFooter>
                                    <NextButton className="border-1 bg-sky-200 border-sky-600 text-background rounded h-9 px-[14px] text-center" onClick={() => handleEdit(data._id)}>
                                        Edit
                                    </NextButton>
                                    <NextButton className="border-1 bg-red-200 border-red-500 text-background rounded rounded-br-lg h-9 px-[14px] text-center" onClick={() => handleDelete(data._id)}>
                                        Delete
                                    </NextButton>
                                    <Button color="danger" className='border-red-500 border-1' variant="light" onPress={onClose}>
                                        Close
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </div>
        </>
    )
}

export default Workout