import { LazyLoadImage } from 'react-lazy-load-image-component';
import trainer1 from '../../assets/images/trainer-1.png'
import trainer2 from '../../assets/images/trainer-2.png'
import trainer3 from '../../assets/images/trainer-3.png'
import { fadeIn } from '../../assets/utils/motion';
import { motion, useInView } from "framer-motion";
import { useRef } from 'react';
const trainers = [
    {
        name: 'Trainer 1',
        image: trainer1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
    },
    {
        name: 'Trainer 2',
        image: trainer2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
    },
    {
        name: 'Trainer 3',
        image: trainer3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
    }
    // Add more trainers as needed
];

function Trainers() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });

    return (
        <section className='w-full h-full border-solid text-center px-6 sm:px-12 lg:px-24 py-10 lg:py-20' ref={ref}>
            {isInView && (
                <>
                    <h2 className='text-4xl sm:text-5xl lg:text-6xl font-black'>Meet Our Trainers</h2>
                    <p className='text-lg sm:text-xl lg:text-2xl m-5 sm:m-10 c-text-gray'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-32 my-10 lg:my-20 p-0 box-border">
                        {trainers.map((trainer, index) => (
                            <motion.div
                                initial='hidden'
                                animate='show'
                                variants={fadeIn("right", "", index * 0.4, 0.75)}
                                key={index}
                                className='relative flex items-center justify-center m-auto overflow-hidden w-5/6 rounded-[32px]'
                            >
                                <LazyLoadImage
                                    src={trainer.image}
                                    alt={trainer.name}
                                    className="object-cover transition duration-300 ease-in-out transform hover:scale-95 hover:blur-sm w-full"
                                />
                                <div className="absolute inset-0 flex flex-col items-start p-6 rounded-[32px] bg-opacity-0 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 backdrop-blur-sm hover:bg-[#00000070]">
                                    <h6 className='text-2xl sm:text-3xl font-bold mb-2 text-white'>{trainer.name}</h6>
                                    <div className="c-text-white text-left">
                                        {trainer.description}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </>
            )}
        </section>
    );

}

export default Trainers