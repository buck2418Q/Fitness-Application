import { Card, CardBody, CircularProgress } from "@nextui-org/react"
import { fadeIn } from "../../assets/utils/motion"
import { motion } from "framer-motion"
import { traineeLoader, trainerLoader } from "../../components/icons"
function Dashboard() {
  return (

    <>
      <div className="flex gap-5">
        {/* trainer  */}
        <div className=" w-2/6 bg-green-50 border border-green-200 rounded-xl p-4 flex justify-between hover:shadow-md hover:bg-green-100 hover:border-green-300 transition ease-in-out duration-300">
          <div className="flex flex-col justify-evenly items-center ">
            <Card className="bg-red-200 bg-transparent shadow-none">
              <CardBody className="justify-center items-center py-0">
                <div className="relative flex justify-center items-center w-full h-full">

                  <CircularProgress
                    classNames={{
                      svg: "w-36 h-36 drop-shadow-md",
                      indicator: "stroke-primary",
                      track: "stroke-primary/10",
                    }}
                    value='50'
                    strokeWidth={4}
                    showValueLabel={false}
                  />
                  <span className="absolute text-3xl font-semibold dark:text-background">50</span>
                </div>
              </CardBody>
            </Card>
            <p className="dark:text-background">Total Trainers: 50</p>
          </div>
          <motion.img
            initial='hidden'
            animate={'show'}
            variants={fadeIn("up", "", 0.6, 0.5)} src={trainerLoader} alt="" className="h-56 aspect-auto hover:cursor-pointer" />
        </div>

        {/* trainee */}
        <div className="w-2/6 bg-green-50 border border-green-200 rounded-xl p-4 flex justify-between hover:shadow-md hover:bg-green-100 hover:border-green-300 transition ease-in-out duration-300">
          <div className="flex flex-col justify-center items-center ">
            <Card className="bg-red-200 bg-transparent shadow-none">
              <CardBody className="justify-center items-center py-0">
                <div className="relative flex justify-center items-center w-full h-full">

                  <CircularProgress
                    classNames={{
                      svg: "w-36 h-36 drop-shadow-md",
                      indicator: "stroke-primary",
                      track: "stroke-primary/10",
                    }}
                    value='50'
                    strokeWidth={4}
                    showValueLabel={false}
                  />
                  <p className="absolute text-3xl font-semibold dark:text-background">50</p>
                </div>
              </CardBody>
            </Card>
            <p className="dark:text-background">Total Users: 50</p>
          </div>
          <motion.img
            initial='hidden'
            animate={'show'}
            variants={fadeIn("up", "", 0.6, 0.5)}
            src={traineeLoader} alt="" className="h-56 aspect-auto  hover:cursor-pointer" />
        </div>

        {/* <div className="w-2/6 flex flex-col gap-5">
          <div className="border border-yellow-200 rounded-xl p-4 flex flex-col justify-between h-[50%] dark:text-light">
            <Progress className="max-w-md" size="lg" value={totalWorkout} />
            <p>Total Workouts: {totalWorkout}
            </p>
          </div>
          <div className=" bg-blue-50 border border-blue-200 rounded-xl p-4 flex justify-between h-[50%] dark:text-light">

          </div>
        </div> */}
      </div>
    </>
  )
}

export default Dashboard