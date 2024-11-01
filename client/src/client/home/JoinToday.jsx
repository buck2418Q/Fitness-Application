/* eslint-disable no-unused-vars */
import ButtonUi from '../../components/Button.jsx';
import check from '../../assets/icons/check.png';
import { motion } from "framer-motion";
import { fadeIn } from '../../assets/utils/motion.js';
import { useEffect, useState } from 'react';

function JoinToday() {
    const [isMonth, setIsMonth] = useState(false);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                observer.disconnect(); // Stop observing once in view
            }
        });

        const section = document.querySelector('.yearly-packs');
        if (section) observer.observe(section);

        return () => {
            observer.disconnect(); // Cleanup on unmount
        };
    }, []);

    const monthYearToggle = () => {
        setIsMonth(prevMonth => !prevMonth);
    };

    const handleClick = () => {
        alert('Join Now button clicked');
    };

    return (
        <section className='py-24 px-5 md:px-10 lg:px-20 bg-cover h-auto'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div>
                    <p className='text-xl mx-2 c-text-gray'>Pricing Plan</p>
                    <h2 className='text-4xl md:text-6xl my-2 font-extrabold'>Join Today</h2>
                </div>
                <div>
                    <div className="relative w-36 h-[36px] mt-[-20px] mx-auto overflow-hidden drop-shadow-xl bg-white rounded-xl cursor-pointer" onClick={monthYearToggle}>
                        <div className="absolute inset-0 flex items-center justify-start z-20 transition-all duration-300 ease-linear ">
                            <span className={isMonth === true ? 'absolute left-2  z-10 transition-all duration-300 ease-linear m-2 text-white' : 'absolute left-2  z-10 transition-all duration-300 ease-linear m-2'}>Month</span>
                            <span className={isMonth === false ? 'absolute right-3 top-[-2px] z-10 transition-all duration-300 ease-linear m-2 text-white' : 'absolute right-3 top-[-2px] z-10 transition-all duration-300 ease-linear m-2'}>Year</span>

                            <div className={`${isMonth ? 'absolute left-0 top-1 w-20 h-[28px] bg-black rounded-xl transition-all duration-300 ease-linear' : 'absolute left-[76px] top-1 w-16 h-[28px] bg-black rounded-xl transition-all duration-300 ease-linear  '}`}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Monthly Packs */}
            <div className={`${isMonth ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12' : 'hidden'}`}>
                {Array(3).fill().map((_, index) => (
                    <motion.div
                        initial='hidden'
                        animate='show'
                        variants={fadeIn("left", "spring", index * 0.2, 0.75)}
                        key={index}
                        className="text-left flex flex-col border rounded-2xl my-4 py-4 px-5 transition duration-300 ease-in-out">
                        <p className='text-xl mb-2 opacity-85 font-bold'>Beginner Plan</p>
                        <h2 className='text-4xl font-extrabold'>$19.9 <span className="text-sm font-bold">/Month</span></h2>
                        <p className='mt-4 c-text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <ul className='c-text-gray mt-8 mb-12'>
                            {Array(5).fill('Lorem ipsum dolor sit amet,').map((text, i) => (
                                <li key={i} className='flex items-center my-2'>
                                    <img src={check} alt="check icon" className='mr-2 w-4 h-4' /> {text}
                                </li>
                            ))}
                        </ul>
                        <ButtonUi text="Join Now" onClick={handleClick} type="secondary" size="medium" />
                    </motion.div>
                ))}
            </div>

            {/* Yearly Packs */}
            <div className={`yearly-packs ${isMonth ? 'hidden' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12'}`}>
                {Array(3).fill().map((_, index) => (
                    <motion.div
                        initial='hidden'
                        animate={inView ? 'show' : 'hidden'}
                        variants={fadeIn("right", "spring", index * 0.2, 0.75)}
                        key={index}
                        className="text-left flex flex-col border rounded-2xl my-4 py-4 px-5 transition duration-300 ease-in-out bg-white">
                        <p className='text-xl mb-2 opacity-85 font-bold'>Beginner Plan</p>
                        <h2 className='text-4xl font-extrabold'>$99.9 <span className="text-sm font-bold">/Year</span></h2>
                        <p className='mt-4 c-text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <ul className='c-text-gray mt-8 mb-12'>
                            {Array(7).fill('Lorem ipsum dolor sit amet,').map((text, i) => (
                                <li key={i} className='flex items-center my-2'>
                                    <img src={check} alt="check icon" className='mr-2 w-4 h-4' /> {text}
                                </li>
                            ))}
                        </ul>
                        <ButtonUi text="Join Now" onClick={handleClick} type="secondary" size="medium" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default JoinToday;
