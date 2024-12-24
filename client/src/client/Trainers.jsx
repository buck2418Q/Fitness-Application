// import React from 'react'
import { Card, CardFooter, Image, } from "@nextui-org/react";
import { fadeIn } from "../assets/utils/motion";
import { motion } from "framer-motion";
import { facebookIcon, instagramIcon, twitterIcon } from "../components/icons";
import {
  trainer4,
  trainer5,
  trainer6,
  trainer7
} from "../components/images";

const trainersData = [
  {
    name: "Alice Johnson",
    specialization: "Yoga",
    image: trainer6,
    instagramId: "https://github.com/AliceYoga",
    twitterId: "https://github.com/AliceYoga",
    facebookId: "https://github.com/AliceYoga",
  },
  {
    name: "Bob Smith",
    specialization: "Cardio",
    image: trainer7,
    instagramId: "https://github.com/BobCardio",
    twitterId: "https://github.com/BobCardio",
    facebookId: "https://github.com/BobCardio",
  },
  {
    name: "Carla Green",
    specialization: "Strength Training",
    image: trainer5,
    instagramId: "https://github.com/CarlaStrength",
    twitterId: "https://github.com/CarlaStrength",
    facebookId: "https://github.com/CarlaStrength",
  },
  {
    name: "David Lee",
    specialization: "Pilates",
    image: trainer4,
    instagramId: "https://github.com/DavidPilates",
    twitterId: "https://github.com/DavidPilates",
    facebookId: "https://github.com/DavidPilates",
  },
  {
    name: "Emily White",
    specialization: "CrossFit",
    image: trainer7,
    instagramId: "https://github.com/EmilyCrossFit",
    twitterId: "https://github.com/EmilyCrossFit",
    facebookId: "https://github.com/EmilyCrossFit",
  },
  {
    name: "Frank Black",
    specialization: "HIIT",
    image: trainer6,
    instagramId: "https://github.com/FrankHIIT",
    twitterId: "https://github.com/FrankHIIT",
    facebookId: "https://github.com/FrankHIIT",
  },
  {
    name: "Grace Brown",
    specialization: "Body Building",
    image: trainer4,
    instagramId: "https://github.com/GraceBodyBuilding",
    twitterId: "https://github.com/GraceBodyBuilding",
    facebookId: "https://github.com/GraceBodyBuilding",
  },
  {
    name: "Henry Adams",
    specialization: "Boxing",
    image: trainer5,
    instagramId: "https://github.com/HenryBoxing",
    twitterId: "https://github.com/HenryBoxing",
    facebookId: "https://github.com/HenryBoxing",
  },
  {
    name: "Isla Scott",
    specialization: "Martial Arts",
    image: trainer7,
    instagramId: "https://github.com/IslaMartialArts",
    twitterId: "https://github.com/IslaMartialArts",
    facebookId: "https://github.com/IslaMartialArts",
  },
  {
    name: "Jack Thompson",
    specialization: "Functional Training",
    image: trainer6,
    instagramId: "https://github.com/JackFunctionalTraining",
    twitterId: "https://github.com/JackFunctionalTraining",
    facebookId: "https://github.com/JackFunctionalTraining",
  },
  {
    name: "Kelly Martinez",
    specialization: "Swimming",
    image: trainer5,
    instagramId: "https://github.com/KellySwimming",
    twitterId: "https://github.com/KellySwimming",
    facebookId: "https://github.com/KellySwimming",
  },
  {
    name: "Liam Harris",
    specialization: "Weight Loss",
    image: trainer4,
    instagramId: "https://github.com/LiamWeightLoss",
    twitterId: "https://github.com/LiamWeightLoss",
    facebookId: "https://github.com/LiamWeightLoss",
  }
];


function Trainers() {
  const onSmClick = (link) => {
    window.open(link, '_blank', 'noopener noreferrer');
  };

  return (
    <>
      <section className="w-full h-full border-solid text-center px-6 sm:px-12 lg:px-24 py-10 lg:py-20 bg-secondary ">
        <motion.h2
          whileInView="show"
          initial="hidden"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeIn("up", "", 0.2, 0.5)}
          className='text-4xl sm:text-5xl lg:text-6xl font-black text-center text-light'>Meet Out Trainers</motion.h2>
        <motion.p
          whileInView="show"
          initial="hidden"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeIn("up", "", 0.3, 0.5)} className='text-lg sm:text-xl lg:text-2xl m-5 sm:m-10 c-text-gray text-center text-secondlight'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsa deleniti, ipsum saepe earum obcaecati praesentium officiis maxime hic ullam.
        </motion.p>

        <motion.div
          whileInView="show"
          initial="hidden"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeIn("up", "", 0.6, 0.5)} className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(320px,1fr))] ">

          {trainersData.map((trainer, index) => (
            <Card key={index} isFooterBlurred className="border-none w-80 bg-background mb-6" radius="lg">
              <Image
                alt="Woman listing to music"
                className="object-cover w-full "
                src={trainer.image}
              />
              <CardFooter className=" before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 justify-between">
                <p className="text-tiny left-0 text-white/80 text-left">
                  <span className="block text-base">{trainer.name}</span>
                  <span>{trainer.specialization}</span>
                </p>

                <p
                  className="text-tiny text-white bg-black/40 flex gap-1 p-1 rounded-full"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  <img src={instagramIcon} className="text-tiny text-white hover:cursor-pointer bg-secondary hover:bg-primary p-1 rounded-full transition ease-in-out duration-800"
                    color="default"
                    radius="lg"
                    size="sm"
                    onClick={() => onSmClick(trainer.instagramId)} />
                  <img src={twitterIcon} className="text-tiny text-white hover:cursor-pointer bg-secondary hover:bg-primary p-1 rounded-full transition ease-in-out duration-800"
                    color="default"
                    radius="lg"
                    size="sm"
                    onClick={() => onSmClick(trainer.twitterId)} />
                  <img src={facebookIcon} className="text-tiny text-white hover:cursor-pointer bg-secondary hover:bg-primary p-1 rounded-full transition ease-in-out duration-800"
                    color="default"
                    radius="lg"
                    size="sm"
                    onClick={() => onSmClick(trainer.facebookId)} />
                </p>
              </CardFooter>
            </Card>))}

        </motion.div>
      </section >
    </>
  )
}

export default Trainers
