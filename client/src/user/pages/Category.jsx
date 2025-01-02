import { motion } from "framer-motion";
import { fadeIn } from "../../assets/utils/motion";
import { Card, CardFooter, image, Image, Link } from "@nextui-org/react";
import { categoryimg1, categoryimg2, categoryimg3, categoryimg4, categoryimg5, categoryimg6, categoryimg7, categoryimg8 } from "../../components/images";
import { useNavigate } from "react-router-dom";

function Category() {
    const navigate = useNavigate()
    const categoryData = [
        {
            image: categoryimg1,
            workOut: 'Cardio',
            workoutValue: 'cardio'

        },
        {
            image: categoryimg2,
            workOut: 'Cross Fit',
            workoutValue: 'crossfit'
        },
        {
            image: categoryimg3,
            workOut: 'Build Muscle',
            workoutValue: 'buildmuscle'
        },
        {
            image: categoryimg4,
            workOut: 'Core Stength',
            workoutValue: 'corestrength'
        },
        {
            image: categoryimg5,
            workOut: 'Abs Workout',
            workoutValue: 'absworkout'
        },
        {
            image: categoryimg6,
            workOut: 'Upper Body',
            workoutValue: 'upperbody'
        },
        {
            image: categoryimg7,
            workOut: 'Aerobics',
            workoutValue: 'aerobics'
        },
        {
            image: categoryimg8,
            workOut: 'Lower Body',
            workoutValue: 'lowerbody'
        },
    ]

    const navigateToWorkout = async (workoutValue) => {
        // navigate('/user/workout')
        console.log('value', workoutValue)
        navigate(`/user/workout`);
    }

    return (
        <>
            <motion.div
                whileInView="show"
                initial="hidden"
                viewport={{ once: false, amount: 0.2 }}
                variants={fadeIn("up", "", 0.6, 0.5)} className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(320px,1fr))] ">

                {categoryData.map((trainer, index) => (
                    <motion.div
                        whileInView="show"
                        initial="hidden"
                        viewport={{ once: false, amount: 0.2 }}
                        variants={fadeIn("up", "", index * 0.1, 0.4)}
                        key={index}
                        onClick={() => navigateToWorkout(trainer.workoutValue)}
                    >
                        <Card isFooterBlurred className="border-none w-80 h-44 bg-background dark:bg-secondlight/40 dark:shadow-none mb-6 cursor-pointer" radius="lg">
                            <Image
                                alt="Woman listing to music"
                                className="object-cover w-full "
                                src={trainer.image || trainer4}
                            />
                            <CardFooter className=" before:bg-white/5 border-white/5 overflow-hidden  before:rounded-xl rounded-large  w-full shadow-small z-10 justify-center py-1 absolute bottom-1">
                                <p className="text-base left-0 text-light text-left  ">
                                    <span className="block text-base">{trainer.workOut}</span>
                                </p>

                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </>
    )
}

export default Category