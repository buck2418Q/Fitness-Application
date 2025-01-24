import { fadeIn } from "../assets/utils/motion";
import { motion } from "framer-motion";
import { treeCompany, cocoCompany, leafCompany, coffeeCompany, mixlrCompany, gym1Company, gym2Company, watchVideo } from "../components/images";
import '../styleSheets/about.css'
import { NextButton } from "../components/NextButton";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { useState } from "react";
import { Icon } from "@iconify/react";

function About() {

  const companies = [
    {
      CompanyName: 'groot',
      description: "A gymnast boom bam",
      image: cocoCompany,
    },
    {
      CompanyName: 'TechNova',
      description: "Innovative tech solutions for the future",
      image: treeCompany,
    },
    {
      CompanyName: 'GreenLeaf',
      description: "Sustainable energy and green technologies",
      image: leafCompany,
    },
    {
      CompanyName: 'groot',
      description: "A gymnast boom bam",
      image: coffeeCompany,
    },
    {
      CompanyName: 'groot',
      description: "A gymnast boom bam",
      image: mixlrCompany,
    },
    {
      CompanyName: 'TechNova',
      description: "Innovative tech solutions for the future",
      image: gym1Company,
    },
    {
      CompanyName: 'GreenLeaf',
      description: "Sustainable energy and green technologies",
      image: gym2Company,
    },
    {
      CompanyName: 'groot',
      description: "A gymnast boom bam",
      image: cocoCompany,
    },
    {
      CompanyName: 'TechNova',
      description: "Innovative tech solutions for the future",
      image: treeCompany,
    },
    {
      CompanyName: 'GreenLeaf',
      description: "Sustainable energy and green technologies",
      image: leafCompany,
    },
    {
      CompanyName: 'groot',
      description: "A gymnast boom bam",
      image: coffeeCompany,
    },
    {
      CompanyName: 'groot',
      description: "A gymnast boom bam",
      image: mixlrCompany,
    },
    {
      CompanyName: 'TechNova',
      description: "Innovative tech solutions for the future",
      image: gym1Company,
    },
    {
      CompanyName: 'GreenLeaf',
      description: "Sustainable energy and green technologies",
      image: gym2Company,
    },
  ];


  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handlePlayPause = () => {
    const video = document.querySelector('video');
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };

  return (
    <>

      <section className="py-16 px-4 sm:py-28 sm:px-8 lg:py-52 lg:px-32 bg-light text-background  dark:bg-background dark:text-light flex flex-col justify-center items-center gap-6 sm:gap-8">
        <motion.h2
          whileInView="show"
          initial="hidden"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeIn("up", "", 0.2, 0.5)}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide fade_appear text-center">
          About Fitness360
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




      <section className='w-full h-full border-solid text-center px-4 sm:px-12 md:px-28 lg:px-40 xl:px-60 2xl:px-80 py-10 lg:py-20 text-secondary bg-secondlight dark:bg-secondary dark:text-light flex items-center justify-center'>
        <div
          className="w-full h-full flex items-center justify-center rounded-full relative xl:w-10/12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <video
            src={watchVideo}
            className="w-full rounded-xl"
            controls={false}
            onClick={handlePlayPause}
          />
          {!(isPlaying) && isHovered && (
            <button
              className={`absolute flex items-center justify-center text-white text-6xl font-bold cursor-pointer bg-light/50 p-0 hover:p-4 rounded-full border-light/60 border-1 transition-all ease-in-out duration-300 transform hover:scale-110 `}
              onClick={handlePlayPause}
            >
              <Icon
                className="bg-light rounded-full p-3"
                icon="solar:play-bold"
                color="#16b650"
              />
            </button>

          )}

          {isPlaying && isHovered && (
            <button
              className={`absolute flex items-center justify-center text-white text-6xl font-bold cursor-pointer bg-light/50 p-0 hover:p-4 rounded-full border-light/60 border-1 transition-all ease-in-out duration-300 transform hover:scale-110 `}
              onClick={handlePlayPause}
            >
              <Icon
                className="bg-light rounded-full p-3"
                icon="solar:pause-bold"
                color="#16b650"
              />
            </button>
          )}

          {!isPlaying &&
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold absolute right-0 top-0 p-2 text-light/60">Watch Video</p>
          }
        </div>
      </section>



      {/* marquee  */}
      <section className="py-1 sm:py-2 md:py-2 lg:py-4 xl:py-6 px-2 sm:px-10 md:px-18 lg:px-24 xl:px-32 bg-secondlight dark:bg-background overflow-hidden">
        <motion.div
          whileInView="show"
          initial="hidden"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeIn("left", "", 0.4, 1)}
          className="marquee-container relative ">
          <div className="marquee-content flex gap-16 animate-marquee">

            {companies.map((company, index) => (
              <div
                key={index}
                className="w-auto h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24 flex-shrink-0 cursor-pointer flex items-center justify-center gap-4 hover:grayscale-0 grayscale transition ease-in-out duration-300"
              >
                <img src={company.image} alt="" className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20" />
                <p className="text-lg sm: md:text-xl lg:text-2xl xl:text-3xl text-background dark:text-light">{company.CompanyName}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

    </>
  )
}

export default About


