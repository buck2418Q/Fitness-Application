// import React from 'react'
import { fadeIn } from "../assets/utils/motion";
import { motion } from "framer-motion";
import { NextButton } from '../components/NextButton'
import { serviceBg1, serviceBg2 } from "../components/images";

// py - 16 px - 4 sm: py - 28 sm: px - 8 lg: py - 52 lg: px - 32

function Service() {
  return (
    <>
      <section
        className=" bg-background text-light flex  justify-center items-center gap-6 sm:gap-8 py-20">
        <motion.div
          whileInView="show"
          initial="hidden"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeIn("left", "", 0.3, 0.5)}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide  w-[45%] pl-32">
          <h2 className="uppercase text-7xl leading-none font-black	">
            <span className="block">Get the</span>
            <span className="block">right gym</span>
            <span className="block"> for your </span>
            <span className="block"> home </span>
            <div className="p-[1px] flex border-1 border-primary w-fit mt-8">
              <NextButton className="text-lg py-6 px-8 rounded-none">SHOP NOW</NextButton>
            </div>
          </h2>
        </motion.div>
        <motion.div
          whileInView="show"
          initial="hidden"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeIn("left", "", 0.3, 0.5)}
          className="text-base sm:text-lg lg:text-xl text-center  text-secondlight w-[55%] h-[90%]"
        >
          <img src={serviceBg1} alt="Background Image" className="w-full h-full object-cover" />

        </motion.div>
      </section>


      {/* Cardio  */}
      <section
        className=" bg-secondary text-light flex  justify-center items-center gap-12 sm:gap-32 py-20">
        <motion.div
          whileInView="show"
          initial="hidden"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeIn("right", "", 0.3, 0.5)}
          className="text-base sm:text-lg lg:text-xl text-center  text-secondlight w-[65%] h-[90%]"
        >
          <img src={serviceBg2} alt="Background Image" className="w-full h-full object-cover" />

        </motion.div>

        <motion.div
          whileInView="show"
          initial="hidden"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeIn("right", "", 0.3, 0.5)}
          className="font-bold tracking-wide  w-[35%] pr-32">
          <h2 className="uppercase  sm:text-4xl text-primary lg:text-6xl text-6xl leading-none font-black">
            <span className="block">Cardio </span>
            <span className="block">equipment</span>
            <span className="block">for the home gym </span>
            <span className="block">or studio.</span>

          </h2>
          <p className="mt-8 ">
            Write a paragraph that talks about your business here. Convince your prospective clients to choose you for their fitness needs by talking about your unique product offerings.

          </p>
        </motion.div>

      </section>


      <section className="w-full h-full border-solid text-center px-24 sm:px-36 lg:px-64 py-10 lg:py-20 bg-background flex flex-col md:flex-row gap-0">
        <div className="w-1/2 bg-secondary p-6 sm:p-12 lg:p-24  pr-10 sm:pr-16 lg:pr-32">
          <motion.h2
            whileInView="show"
            initial="hidden"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeIn("up", "", 0.2, 0.5)}
            className='sm:text-4xl lg:text-6xl text-6xl  font-black text-left text-primary '>A1 Elliptical Trainer</motion.h2>
          <motion.div
            whileInView="show"
            initial="hidden"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeIn("", "", 0.6, 0.5)} className='text-lg sm:text-xl lg:text-2xl my-4 sm:my-8  text-left text-secondlight'>
            <ul className="list-disc font-bold ml-8">
              <li>Feature your package or plan inclusions</li>
              <li>In bullet form</li>
              <li>For easy readability</li>
              <li>Even for people on mobile</li>
            </ul>
            <div className="flex pt-16 gap-2">
              <NextButton className="text-lg rounded-none ">SHOP NOW</NextButton>

              {/* <div className="p-[1px] flex border-1 border-light w-fit"> */}
              <NextButton className="text-lg  px-8 rounded-none border-1 border-light" color="secondary">Full DETAILS</NextButton>
              {/* </div> */}
            </div>
          </motion.div>
        </div>

        <div className="w-1/2 bg-green-300">

        </div>
      </section>

      <section className="bg-secondary h-[2px]"></section>
    </>
  )
}

export default Service
