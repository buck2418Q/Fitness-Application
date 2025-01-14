import { Icon } from "@iconify/react/dist/iconify.js"
import { Card, CardBody, CardFooter, Image, Tooltip } from "@nextui-org/react"
import { useEffect, useState } from "react";
import { useApplicationUser } from "../../utils/ApplicationUserContext";
import { getEnrolledWorkoutData } from "../../services/userServices/EnrollWorkout";

function Dashboard() {
  const [workout, setWorkout] = useState([]);
  const { appUserName, appUserId } = useApplicationUser()
  useEffect(() => {
    getEnrolledWorkout(appUserId);
  }, [])


  const getEnrolledWorkout = async (appUserId) => {
    try {
      const result = await getEnrolledWorkoutData(appUserId)
      setWorkout(result.data)
    } catch (e) {
      console.log('error', e)
    }
  }
  return (
    <>
      <h2>{appUserName}</h2>

      <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(450px,1fr))] ">

        {workout.map((data, index) => (

          <Card key={index} isPressable shadow="sm" onPress={() => workoutDetails(data)}>
            <CardBody className="overflow-visible p-0">
              {/* {data?.price != 0 &&
                <Tooltip content='Premium' color='success'>
                  <Icon
                    className="pointer-events-none text-2xl text-default-400 absolute z-40 right-[1px] top-[1px] h-8 w-8 p-1 shadow-inner bg-gradient-to-bl from-light to-secondlight rounded-xl"
                    icon="solar:crown-bold"
                    color="green"
                  />
                </Tooltip>} */}
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
    </>
  )
}

export default Dashboard