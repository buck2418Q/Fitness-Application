import { motion, useInView } from "framer-motion";
import { fadeIn } from "../../assets/utils/motion";
import { useRef } from "react";

const webData = [
    { number: '500+', label: 'Happy Members', description: 'Our community is growing fast' },
    { number: '5+', label: 'Years Experience', description: 'Experience in various workouts' },
    { number: '13+', label: 'Certified Trainers', description: 'Guidance at every step' },
    { number: '90%', label: 'Customer Satisfaction', description: 'We ensure your progress satisfaction' },
];

function StatBanner() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className="w-full flex flex-wrap justify-around c-bg-black c-text-white py-8 mt-[-98px]" role="region" aria-labelledby="stat-banner">
            <h2 id="stat-banner" className="sr-only">Statistics Banner</h2>
            {isInView && (
                <>
                    {webData.map((data, index) => (
                        <motion.div
                            initial='hidden'
                            animate='show'
                            variants={fadeIn("right", "spring", index * 0.4, 0.75)}
                            key={index}
                            className="card flex flex-col items-center text-center mb-6 w-full md:w-1/2 lg:w-1/4"
                        >
                            <h3 className='text-4xl font-extrabold mb-4'>{data.number}</h3>
                            <p className="card-details font-semibold">{data.label}</p>
                            <p className="card-details">{data.description}</p>
                        </motion.div>
                    ))}
                </>
            )}
        </section>
    );
}

export default StatBanner;
