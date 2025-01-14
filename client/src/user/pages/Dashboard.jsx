import { Icon } from "@iconify/react/dist/iconify.js"
import { Card, CardBody, CardFooter, Image, Modal, ModalBody, ModalContent, ModalHeader, Tooltip, useDisclosure } from "@nextui-org/react"
import { useEffect, useState } from "react";
import { useApplicationUser } from "../../utils/ApplicationUserContext";
import { getEnrolledWorkoutData } from "../../services/userServices/EnrollWorkout";

function Dashboard() {
  const [workout, setWorkout] = useState([]);
  const { appUserName, appUserId } = useApplicationUser()
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const { isOpen: isOpenWorkout, onOpen: onOpenWorkout, onClose: onCloesWorkout, onOpenChange: onOpenChangeWorkout } = useDisclosure();



  useEffect(() => {
    getEnrolledWorkout(appUserId);
  }, [])


  const getEnrolledWorkout = async (appUserId) => {
    try {
      const result = await getEnrolledWorkoutData(appUserId)
      setWorkout(result.data);
    } catch (e) {
      console.log('error', e)
    }
  }


  const workoutDetails = async (data) => {
    setSelectedWorkout(data)
    onOpenWorkout()
  }
  return (
    <>
      <h2 className="mb-1">Welcome {appUserName}</h2>
      <h2 className="font-semibold text-xl mb-6">Your Enrolled Workout </h2>

      {/* cards  */}
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(450px,1fr))] ">
        {workout.map((data, index) => (
          <Card key={index} isPressable shadow="sm" onPress={() => workoutDetails(data)} className="hover:scale-[.98]">
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


      {/* workout  modal  */}
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

export default Dashboard