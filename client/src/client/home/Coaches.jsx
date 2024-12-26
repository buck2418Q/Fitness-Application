
import coach1 from '../../assets/images/coach1.avif'
import coach2 from '../../assets/images/coach2.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { motion } from "framer-motion";
import { fadeIn } from "../../assets/utils/motion";
import { NextButton } from '../../components/NextButton';


function Coaches() {

    const handleClick = () => {
        alert('working')
    }

    return (
        <>
            <section className='w-full h-full border-solid px-24 py-20 flex bg-background'>
                <div className="flex flex-col sm:flex-row w-full sm:w-8/12 lg:w-5/12">

                    <motion.div
                        whileInView="show"
                        initial="hidden"
                        viewport={{ once: false, amount: 0.2 }}
                        variants={fadeIn("", "fade", 0.4, 0.5)}
                        className="mx-0 sm:mx-4 w-1/2 overflow-hidden sm:w-1/2 mt-4 sm:mt-0 transition-all duration-300 ease-in-out hover:w-full h-96 rounded-3xl	">
                        <LazyLoadImage
                            src={coach1}
                            alt="Workout Image 3"
                            className="w-full h-full object-cover transform scale-100 transition-all duration-300 ease-in-out hover:scale-100"
                        />
                    </motion.div>

                    <motion.div
                        whileInView="show"
                        initial="hidden"
                        viewport={{ once: false, amount: 0.2 }}
                        variants={fadeIn("", "", 0.6, 0.5)}
                        className="mx-0 sm:mx-4 w-1/2 overflow-hidden sm:w-1/2 mt-4 sm:mt-0 transition-all duration-300 ease-in-out hover:w-full h-96 rounded-3xl test">
                        <LazyLoadImage
                            src={coach2}
                            alt="Workout Image 3"
                            className="w-full h-full object-cover transform scale-110 transition-all duration-300 ease-in-out"
                        />
                    </motion.div>
                </div>
                <div className="text-left flex flex-col content-between  box-border w-7/12 relative ml-16">
                    <motion.p
                        whileInView="show"
                        initial="hidden"
                        viewport={{ once: false, amount: 0.2 }}
                        variants={fadeIn("left", "", 0.3, 0.5)}
                        className='text-2xl mb-6 opacity-85 font-bold'>Are you looking for a Mentor?</motion.p>
                    <motion.h2
                        whileInView="show"
                        initial="hidden"
                        viewport={{ once: false, amount: 0.2 }}
                        variants={fadeIn("left", "", 0.5, 0.5)}
                        className='text-6xl font-extrabold'>Coaches</motion.h2>
                    <motion.p
                        whileInView="show"
                        initial="hidden"
                        viewport={{ once: false, amount: 0.2 }}
                        variants={fadeIn("left", "", 0.6, 0.5)} className='text-xl my-6 mx-2 c-text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </motion.p>

                    <motion.div whileInView="show"
                        initial="hidden"
                        viewport={{ once: false, amount: 0.2 }}
                        variants={fadeIn("left", "", 0.6, 0.5)} className='absolute bottom-0 mb-4 shadow-2xl '>
                        <NextButton
                            onClick={handleClick}
                            color="secondary"
                        >Join Now</NextButton>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Coaches