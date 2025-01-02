import { motion, useInView } from "framer-motion";
import { fadeIn } from "../../assets/utils/motion";

const webData = [
    { number: '500+', label: 'Happy Members', description: 'Our community is growing fast' },
    { number: '5+', label: 'Years Experience', description: 'Experience in various workouts' },
    { number: '13+', label: 'Certified Trainers', description: 'Guidance at every step' },
    { number: '90%', label: 'Customer Satisfaction', description: 'We ensure your progress satisfaction' },
];

function StatBanner() {


    return (
        <section className="w-full flex flex-wrap justify-around 
        bg-light text-background dark:bg-background dark:text-light py-8 mt-[-98px] " role="region" aria-labelledby="stat-banner">
            <h2 id="stat-banner" className="sr-only">Statistics Banner</h2>


            {webData.map((data, index) => (
                <motion.div
                    // whileInView="show"
                    // initial="hidden"
                    // animate='show'
                    // viewport={{ once: false, amount: 0.2 }}
                    // variants={fadeIn("up", "spring", index * 0.4, 0.75)}
                    whileInView="show"
                    initial="hidden"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={fadeIn("up", "", index * 0.15, 0.5)}
                    key={index}
                    className="card flex flex-col items-center text-center mb-6 w-full md:w-1/2 lg:w-1/4 dtu_appear p-0 m-0"
                >
                    <h3 className='text-4xl font-extrabold mb-4'>{data.number}</h3>
                    <p className="card-details font-semibold">{data.label}</p>
                    <p className="card-details">{data.description}</p>
                </motion.div>
            ))}


        </section>
    );
}

export default StatBanner;
