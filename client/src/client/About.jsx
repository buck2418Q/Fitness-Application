import { fadeIn } from "../assets/utils/motion";
import { motion } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { treeCompany, cocoCompany, leafCompany, coffeeCompany, mixlrCompany, gym1Company, gym2Company } from "../components/images";
import Button from "../components/Button";
import { aboutUs } from "../components/images";
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

  const cardData = [
    {
      imgSrc: "glove",
      title: "Expert Team",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem. ",
    },
    {
      imgSrc: "Fun Mentoring",
      title: "Facility Amenities",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem. ",
    },
    {
      imgSrc: "moneyBag",
      title: "Event Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem. ",
    },
  ];

  const seeMoreClick = () => {
    alert('see more')
  }

  return (
    <>
      {/* our team section */}
      <section className="py-16 px-4 sm:py-28 sm:px-8 lg:py-52 lg:px-32 bg-background text-light flex flex-col justify-center items-center gap-6 sm:gap-8">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide fade_appear text-center">
          Our Team
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-center sm:m-5 lg:m-10 text-secondlight">
          Fitness360 is a results-driven fitness organization offering tailored training programs, expert coaching, and community support. We prioritize health, strength, and mental well-being, helping members achieve their fitness goals with dedication.
        </p>
      </section>

      {/* marquee  */}
      <section className="py-1 sm:py-2 md:py-2 lg:py-4 xl:py-6 px-2 sm:px-10 md:px-18 lg:px-24 xl:px-32 bg-secondary overflow-hidden ">
        <div className="marquee-container relative ">
          {/* The following 8 divs are the blocks that move */}
          <div className="marquee-content flex gap-16 animate-marquee">
            {companies.map((company, index) => (
              <div
                key={index}
                className="w-auto h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24 flex-shrink-0  cursor-pointer flex items-center justify-center gap-4 grayscale hover:grayscale-0  transition ease-in-out duration-300"
              >
                <img src={company.image} alt="" className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20" />
                <p className="text-lg sm: md:text-xl lg:text-2xl xl:text-3xl text-light">{company.CompanyName}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* why choose us */}
      <section className="w-full h-full border-solid 
px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 
py-8 sm:py-12 md:py-20 lg:py-28 xl:py-32 
flex flex-wrap lg:flex-nowrap items-center text-light bg-background gap-8">

        <div className="w-full md:w-1/2 lg:w-2/6 flex flex-col items-start gap-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black fade_appear">
            <span className="block mb-4 sm:mb-5">Why</span> Choose Us
          </h2>
          <motion.p
            whileInView="show"
            initial="hidden"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeIn("up", "", 0.6, 0.5)}
            className="text-base sm:text-lg md:text-xl lg:text-xl my-4 sm:my-5 lg:my-10 text-secondlight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </motion.p>

          <div className="w-full">
            <motion.div
              whileInView="show"
              initial="hidden"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeIn("up", "", 0.6, 0.5)}
              className="">
              <Button text="See More" onClick={seeMoreClick} type="secondary" size="medium" />
            </motion.div>
          </div>
        </div>

        <motion.div
          whileInView="show"
          initial="hidden"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeIn("", "", 0.6, 0.5)}
          className="w-full md:w-1/2 lg:w-2/6 rounded-xl 
    p-4 sm:p-6 md:p-8 lg:p-12">
          <LazyLoadImage
            key="{index}"
            src={aboutUs}
            alt=""
            className="rounded-2xl w-full h-full"
          />
        </motion.div>

        <div className="w-full md:w-1/2 lg:w-2/6 flex flex-col gap-4">
          {cardData.map((card, index) => (
            <motion.div
              whileInView="show"
              initial="hidden"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeIn("left", "", 0.6, 0.5)}
              key={index}
              className="m-2 sm:m-4 flex ">
              <div className="mx-2 sm:mx-4 my-2 p-2 sm:p-4 rounded-full bg-primary h-fit">
                <img src={card.imgSrc} className="w-8 sm:w-10 md:w-12 aspect-square" />
              </div>
              <div className="h-fit">
                <h6 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{card.title}</h6>
                <div className="text-secondlight text-sm sm:text-base md:text-medium">{card.description}</div>
              </div>
            </motion.div>
          ))}
        </div>

      </section>


      {/* join our newsoutlet section */}
      <section className="flex text-secondlight">

        <div className="bg-background flex flex-col justify-center items-center 
        px-2 sm:px-8 md:px-16 lg:px-24 xl:px-36
        py-2 sm:py-8 md:py-16 lg:py-24 xl:py-20
        w-full">
          <div className="w-full md:flex justify-between items-center gap-8  
         sm:px-4 md:px-8 lg:px-10 xl:px-12 
         py-2 sm:py-4 md:py-8 lg:py-10 xl:py-10
         rounded-xl sm:rounded[20px] md:rounded[35px] lg:rounded[45px] xl:rounded-[60px] bg-primary mx-40">
            <div className="flex flex-col gap-4 w-full md:w-1/2 mb-4 md:mb-0">
              <h2 className="text-4xl font-bold tracking-wide">Join Our Newsoutlet</h2>
              <p className="text-xl">Sign up for our newsletter to receive the latest news, updates, and special offers from Fitness360.</p>
            </div>
            <div className="flex gap-4  w-full md:w-1/2 ">
              <input type="text" placeholder="Enter your email" className="w-4/6  px-4 rounded-lg" />
              <button className="bg-background text-light py-4 px-8 rounded-lg w-2/6">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default About


