import { motion } from "framer-motion";
import MyButton from '../../components/Button.jsx'
import bannerBg from '../../assets/videos/bannerBg2.mp4'
import { fadeIn } from "../../assets/utils/motion";

function Banner() {
    return (
        <>
            <section
                className='w-full h-screen flex flex-col justify-center items-center relative top-[-100px] p-4 overflow-hidden'
                style={{ backgroundColor: bannerBg, backgroundPosition: 'center' }}
            >
                <video
                    autoPlay
                    loop
                    muted
                    className='backdrop-sepia bg-black/90 absolute top-0 left-0 w-full h-full object-cover '
                    style={{ zIndex: -1, objectFit: 'cover' }}
                >
                    <source src={bannerBg} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <motion.div
                    initial='hidden'
                    animate={'show'}
                    variants={fadeIn("up", "", 0.6, 0.5)}
                    className='relative z-10' 
                >
                    <h1 className='font-extrabold text-4xl sm:text-5xl md:text-6xl text-center mb-8 text-white'>
                        Scenes to take your <br /> breath away
                    </h1>
                    <div className='flex gap-6 justify-around items-center'>
                        <span className='w-full sm:w-1/2 h-14'>
                            <MyButton text="Shop Trend" type="primary" size="medium" />
                        </span>
                        <span className='w-full sm:w-1/2 h-14'>
                            <MyButton text="kya hal h" type="secondary" size="medium" />
                        </span>
                    </div>
                </motion.div>
            </section>
        </>

    )
}

export default Banner