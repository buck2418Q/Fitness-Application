import React from 'react'
import { motion } from 'framer-motion'
import { Accordion, AccordionItem } from '@nextui-org/react'
import { fadeIn } from '../../assets/utils/motion';

function faq() {
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <>
            <section className="flex flex-col md:flex-row w-full gap-4 h-full border-solid px-6 sm:px-12 lg:px-24 py-10 lg:py-20 text-background bg-light dark:bg-background dark:text-light">
                <div className='w-full md:w-4/12'>
                    <motion.h2
                        whileInView="show"
                        initial="hidden"
                        viewport={{ once: false, amount: 0.2 }}
                        variants={fadeIn("up", "", 0.2, 0.5)}
                        className='text-xl sm:text-2xl lg:text-3xl font-black  text-left'>Meet Out Trainers</motion.h2>
                    <motion.p
                        whileInView="show"
                        initial="hidden"
                        viewport={{ once: false, amount: 0.2 }}
                        variants={fadeIn("up", "", 0.3, 0.5)} className='text-sm sm:text-lg lg:text-xl my-2 sm:my-4 c-text-gray text-left text-secondary dark:text-secondlight'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsa deleniti, ipsum saepe earum obcaecati praesentium officiis maxime hic ullam.
                    </motion.p>
                </div>


                <Accordion variant="bordered" className='w-full md:w-8/12'>
                    <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
                        {defaultContent}
                    </AccordionItem>
                    <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                        {defaultContent}
                    </AccordionItem>
                </Accordion>


            </section >



        </>
    )
}

export default faq