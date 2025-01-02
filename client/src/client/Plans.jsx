// import React from 'react'
import { fadeIn } from "../assets/utils/motion";
import { motion } from "framer-motion";
function Plans() {
  return (
    <>
      <section className="py-16 px-4 sm:py-28 sm:px-8 lg:py-52 lg:px-32 bg-light text-background  dark:bg-background dark:text-light flex flex-col justify-center items-center gap-6 sm:gap-8">
        <motion.h2
          whileInView="show"
          initial="hidden"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeIn("up", "", 0.2, 0.5)}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide fade_appear text-center">
          Our Plans
        </motion.h2>
        <motion.p
          whileInView="show"
          initial="hidden"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeIn("up", "", 0.3, 0.5)}
          className="text-base sm:text-lg lg:text-xl text-center sm:m-5 lg:m-10 text-secondary dark:text-secondlight">
          Fitness360 is a results-driven fitness organization offering tailored training programs, expert coaching, and community support. We prioritize health, strength, and mental well-being, helping members achieve their fitness goals with dedication.
        </motion.p>
      </section>


      <section className="bg-secondary h-[2px]"></section>
    </>
  )
}

export default Plans
