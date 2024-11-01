import { motion } from "framer-motion";
import { fadeIn } from "../../assets/utils/motion";

const webData = [
    { number: '500+', label: 'Happy Members', description: 'Our Community is growing fast' },
    { number: '5+', label: 'Years Experience', description: 'Experience in various Workouts' },
    { number: '13+', label: 'Certified Trainers', description: 'Guidance at every step' },
    { number: '90%', label: 'Customer Satisfaction', description: 'We ensure your progress satisfaction' },
];

function StatBanner() {
    return (
        <>
            <section className="w-full flex flex-wrap justify-around c-bg-black c-text-white py-8 mt-[-98px]">
                {webData.map((data, index) => (
                    <motion.div
                        initial='hidden'
                        animate='show'
                        variants={fadeIn("right", "spring", index * 0.4, 0.75)}
                        key={index} className="card flex flex-col items-center text-center mb-6 w-full md:w-1/2 lg:w-1/4">
                        <h4 className='text-4xl font-extrabold mb-4' aria-level="2">{data.number}</h4>
                        <p className="card-details">{data.label}</p>
                        <p className="card-details">{data.description}</p>
                    </motion.div>
                ))}
            </section>
        </>
    )
}

export default StatBanner