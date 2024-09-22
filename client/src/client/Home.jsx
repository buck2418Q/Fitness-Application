import '../styleSheets/home.css'
import workoutImage1 from '../assets/images/home-img-1.png'
import workoutImage2 from '../assets/images/home-img-2.png'
import workoutImage3 from '../assets/images/home-img-3.png'
import glove from '../assets/icons/glove.png'
import time from '../assets/icons/time.png'
import dubbel from '../assets/icons/dumbbel.png'
import moneyBag from '../assets/icons/money-bag.png'
import trainer1 from '../assets/images/trainer-1.png'
import trainer2 from '../assets/images/trainer-2.png'
import trainer3 from '../assets/images/trainer-3.png'
import coach1 from '../assets/images/coach1.avif'
import coach2 from '../assets/images/coach2.jpg'
import Button from '../components/Button.jsx'
import check from '../assets/icons/check.png'
import React, { Suspense, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Loader = React.lazy(() => import('../components/Button'))
import review1 from '../assets/images/review1.jpg'
import review2 from '../assets/images/review2.jpg'
import review3 from '../assets/images/review3.jpg'
import review4 from '../assets/images/review4.jpg'



function Home() {
  const [isMonth, setIsMonth] = useState(false);

  const monthYearToggle = () => {
    setIsMonth(previsMonth => !previsMonth);
  };

  const handleClick = () => {
    alert('working')
  }


  const cards = [
    { id: 1, name: 'Raj', rating: '1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { id: 2, name: 'Yash Sharman', rating: '2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { id: 3, name: 'John', rating: '3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { id: 4, name: 'RDJ', rating: '4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { id: 5, name: 'Raj Kishor', rating: '5', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const getPreviousIndex = (index) => (index - 1 + cards.length) % cards.length;
  const getNextIndex = (index) => (index + 1) % cards.length;

  const nextCard = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = getNextIndex(prevIndex);
      return nextIndex;
    });
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => {
      const previousIndex = getPreviousIndex(prevIndex);
      return previousIndex;
    });
  };

  const previousIndex = getPreviousIndex(currentIndex);
  const nextIndex = getNextIndex(currentIndex);




  return (
    <div>
      <Suspense fallback={<div>
        <Loader></Loader>
      </div>}>


        <section className=" w-full flex justify-around c-bg-black c-text-white my-8 py-8">
          <div className="card">
            <h4 className='text-4xl font-extrabold mb-4'>
              500+
            </h4>

            <div className="card-details">
              Happy Members
            </div>
            <div className="card-details">
              Our Community is growing fast
            </div>

          </div>
          <div className="card">
            <h4 className='text-4xl font-extrabold mb-4'>
              5+
            </h4>

            <div className="card-details">
              Years Experience
            </div>
            <div className="card-details">
              Experience in various Workouts
            </div>

          </div>
          <div className="card">
            <h4 className='text-4xl font-extrabold mb-4'>
              13+
            </h4>

            <div className="card-details">
              Certified Trainers
            </div>
            <div className="card-details">
              Guiance at every step
            </div>

          </div>
          <div className="card">
            <h4 className='text-4xl font-extrabold mb-4'>
              90%
            </h4>

            <div className="card-details">
              Customer Satisfaction
            </div>
            <div className="card-details">
              We ensure your progress satisfaction
            </div>

          </div>
        </section>


        {/* why choose us  */}
        <section className='w-full h-full border-solid text-center px-24 py-20'>
          <h2 className='text-6xl font-black'>Why Choose Us</h2>
          <p className='text-2xl m-10 c-text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

          <div className="flex items-center">
            <div className="text-left grid grid-cols-2 gap-8 m-0 p-0 box-border w-8/12">

              {/* card 1  */}
              <div className="m-4 flex pr-8">
                <div className='mx-4 my-2 p-2 rounded-full c-bg-black h-fit'>
                  <img src={glove} alt="" className=' w-12 aspect-square' />
                </div>
                <div className="h-fit">
                  <h6 className='text-3xl font-bold mb-2'>
                    Trainer Qualifications
                  </h6>
                  <div className="c-text-gray">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  </div>
                </div>
              </div>

              {/* card 2  */}
              <div className="m-4 flex pr-8">
                <div className='mx-4 my-2 p-2 rounded-full c-bg-black h-fit'>
                  <img src={dubbel} alt="" className=' w-12 aspect-square' />
                </div>
                <div className="h-fit">
                  <h6 className='text-3xl font-bold mb-2'>
                    Facility Amenities
                  </h6>
                  <div className="c-text-gray">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  </div>
                </div>
              </div>

              {/* card 3  */}
              <div className="m-4 flex pr-8">
                <div className='mx-4 my-2 p-2 rounded-full c-bg-black h-fit'>
                  <img src={moneyBag} alt="" className=' w-12 aspect-square' />
                </div>
                <div className="h-fit">
                  <h6 className='text-3xl font-bold mb-2'>
                    Membership Cost
                  </h6>
                  <div className="c-text-gray">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  </div>
                </div>
              </div>

              {/* card 4  */}
              <div className="m-4 flex pr-8">
                <div className='mx-4 my-2 p-2 rounded-full c-bg-black h-fit'>
                  <img src={time} alt="" className=' w-12 aspect-square ' />
                </div>
                <div className="h-fit">
                  <h6 className='text-3xl font-bold mb-2'>
                    Operating Hours
                  </h6>
                  <div className="c-text-gray">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-8/12 lg:w-4/12">
              <div className="m-4 flex flex-col sm:flex-row">
                <div className="mx-0 sm:mx-4 w-full sm:w-1/2">
                  <LazyLoadImage src={workoutImage1} alt="Workout Image 1" className="my-6 mb-4 sm:mb-0" />
                  <LazyLoadImage src={workoutImage2} alt="Workout Image 2" className='mt-5 mb-6' />
                </div>
                <div className="mx-0 sm:mx-4 w-full sm:w-1/2 mt-4 sm:mt-0">
                  <img src={workoutImage3} alt="Workout Image 3" className='my-6' />
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* Meet Our Trainers  */}
        <section className='w-full h-full border-solid text-center px-24 py-20'>
          <h2 className='text-6xl font-black'>Meet Our Trainers </h2>
          <p className='text-2xl m-10 c-text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

          <div className="text-left grid grid-cols-3 gap-32 my-20 p-0 box-border w-8/12r ">

            <div className='relative flex items-center content-center m-auto overflow-hidden  w-5/6 rounded-[32px] '>
              <LazyLoadImage
                src={trainer1}
                alt="Trainer"
                className="object-cover transition duration-300 ease-in-out transform hover:scale-65 hover:blur-sm  w-full"
              />
              <div className="absolute inset-0 flex flex-col items-left p-8 rounded-[32px] bg-opacity-0 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 backdrop-blur-sm hover:bg-[#00000070]">
                <h6 className='text-3xl font-bold mb-2 text-white'>Name</h6>
                <div className="c-text-white text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </div>
              </div>
            </div>

            <div className='relative flex items-center content-center m-auto overflow-hidden  w-5/6 rounded-[32px] '>
              <LazyLoadImage
                src={trainer2}
                alt="Trainer"
                className="object-cover transition duration-300 ease-in-out transform hover:scale-65 hover:blur-sm  w-full"
              />
              <div className="absolute inset-0 flex flex-col items-left p-8 rounded-[32px] bg-opacity-0 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 backdrop-blur-sm hover:bg-[#00000070]">
                <h6 className='text-3xl font-bold mb-2 text-white'>Name</h6>
                <div className="c-text-white text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </div>
              </div>
            </div>

            <div className='relative flex items-center content-center m-auto overflow-hidden  w-5/6 rounded-[32px] '>
              <LazyLoadImage
                src={trainer3}
                alt="Trainer"
                className="object-cover transition duration-300 ease-in-out transform hover:scale-65 hover:blur-sm  w-full"
              />
              <div className="absolute inset-0 flex flex-col items-left p-8 rounded-[32px]  bg-opacity-0 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 backdrop-blur-sm hover:bg-[#00000070]">
                <h6 className='text-3xl font-bold mb-2 text-white'>Name</h6>
                <div className="c-text-white text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* Coaches */}
        <section className='w-full h-full border-solid  px-24 py-20 flex '>
          <div className="flex flex-col sm:flex-row w-full sm:w-8/12 lg:w-5/12">
            <div className="mx-0 sm:mx-4 w-1/2 overflow-hidden sm:w-1/2 mt-4 sm:mt-0 transition-all duration-300 ease-in-out hover:w-full h-96 rounded-3xl	">
              <LazyLoadImage
                src={coach1}
                alt="Workout Image 3"
                className="w-full h-full object-cover transform scale-100 transition-all duration-300 ease-in-out hover:scale-100"
              />
            </div>

            <div className="mx-0 sm:mx-4 w-1/2 overflow-hidden sm:w-1/2 mt-4 sm:mt-0 transition-all duration-300 ease-in-out hover:w-full h-96 rounded-3xl test">
              <LazyLoadImage
                src={coach2}
                alt="Workout Image 3"
                className="w-full h-full object-cover transform scale-110 transition-all duration-300 ease-in-out"
              />
            </div>
          </div>
          <div className="text-left flex flex-col content-between  box-border w-7/12 relative ml-16">
            <p className='text-2xl mb-6 opacity-85 font-bold'>Are you looking for a Mentor?</p>
            <h2 className='text-6xl font-extrabold'>Coaches</h2>
            <p className='text-xl my-6 mx-2 c-text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <div className='absolute bottom-0 mb-4 shadow-2xl '>
              <Button
                text="Join Now"
                onClick={handleClick}
                type="secondary"
                size="medium"
              />
            </div>
          </div>
        </section>


        {/* join today  */}
        <section className='py-24 px-20 bg-cover h-auto '>
          <div className='flex justify-between items-center'>
            <div>
              <p className='text-xl  mx-2 c-text-gray'>Pricing Plan</p>
              <h2 className='text-6xl my-2 font-extrabold'>Join Today</h2>
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

          {/* monthy packs */}
          <div className={`${isMonth ? 'text-left grid grid-cols-3 gap-32 my-12 px-20 box-border' : 'hidden'}`}>
            {/* card 1*/}
            <div className="text-left flex flex-col content-between box-border relative border rounded-2xl my-4 py-4 px-5 transition duration-300 ease-in-out">
              <p className='text-xl mb-2 opacity-85 font-bold'>Beginner Plan</p>
              <h2 className='text-4xl font-extrabold'>$05 <span className="text-sm font-bold">/Month</span></h2>
              <p className='text-m mt-4 c-text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>

              <ul className='c-text-gray mt-8 mb-12'>
                <li className='flex items-center my-2'><img src={check} alt="check cion" className=' mr-2 w-4 h-4' /> Lorem ipsum dolor sit amet,</li>
                <li className='flex items-center my-2'><img src={check} alt="check cion" className=' mr-2 w-4 h-4' /> Lorem ipsum dolor sit amet,</li>
                <li className='flex items-center my-2'><img src={check} alt="check cion" className=' mr-2 w-4 h-4' /> Lorem ipsum dolor sit amet,</li>
                <li className='flex items-center my-2'><img src={check} alt="check cion" className=' mr-2 w-4 h-4' /> Lorem ipsum dolor sit amet,</li>
                <li className='flex items-center my-2'><img src={check} alt="check cion" className=' mr-2 w-4 h-4' /> Lorem ipsum dolor sit amet,</li>
              </ul>
              <Button
                text="Join Now"
                onClick={handleClick}
                type="secondary"
                size="medium"
              />
            </div>

            {/* card 2*/}
            <div className="text-left flex flex-col content-between box-border relative border rounded-2xl my-4 py-4 px-5">
              <p className='text-xl mb-2 opacity-85 font-bold'>Beginner Plan</p>
              <h2 className='text-4xl font-extrabold'>$05 <span className="text-sm font-bold">/Month</span></h2>
              <p className='text-m mt-4 c-text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>

              <ul className='c-text-gray mt-8 mb-12'>
                <li className='flex items-center my-2'><img src={check} alt="check cion" className=' mr-2 w-4 h-4' /> Lorem ipsum dolor sit amet,</li>
                <li className='flex items-center my-2'><img src={check} alt="check cion" className=' mr-2 w-4 h-4' /> Lorem ipsum dolor sit amet,</li>
                <li className='flex items-center my-2'><img src={check} alt="check cion" className=' mr-2 w-4 h-4' /> Lorem ipsum dolor sit amet,</li>
                <li className='flex items-center my-2'><img src={check} alt="check cion" className=' mr-2 w-4 h-4' /> Lorem ipsum dolor sit amet,</li>
                <li className='flex items-center my-2'><img src={check} alt="check cion" className=' mr-2 w-4 h-4' /> Lorem ipsum dolor sit amet,</li>
              </ul>
              <Button
                text="Join Now"
                onClick={handleClick}
                type="secondary"
                size="medium"
              />
            </div>

            {/* card 3*/}
            <div className="text-left flex flex-col content-between box-border relative border rounded-2xl my-4 py-4 px-5">
              <p className='text-xl mb-2 opacity-85 font-bold'>Beginner Plan</p>
              <h2 className='text-4xl font-extrabold'>$05 <span className="text-sm font-bold">/Month</span></h2>
              <p className='text-m mt-4 c-text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>

              <ul className='c-text-gray mt-8 mb-12'>
                <li className='flex items-center my-2'><img src={check} alt="check cion" className=' mr-2 w-4 h-4' /> Lorem ipsum dolor sit amet,</li>
                <li className='flex items-center my-2'><img src={check} alt="check cion" className=' mr-2 w-4 h-4' /> Lorem ipsum dolor sit amet,</li>
                <li className='flex items-center my-2'><img src={check} alt="check cion" className=' mr-2 w-4 h-4' /> Lorem ipsum dolor sit amet,</li>
                <li className='flex items-center my-2'><img src={check} alt="check cion" className=' mr-2 w-4 h-4' /> Lorem ipsum dolor sit amet,</li>
                <li className='flex items-center my-2'><img src={check} alt="check cion" className=' mr-2 w-4 h-4' /> Lorem ipsum dolor sit amet,</li>
              </ul>
              <Button
                text="Join Now"
                onClick={handleClick}
                type="secondary"
                size="medium"
              />
            </div>





          </div>

          {/* yearky packs */}
          <div className={`${isMonth ? 'hidden' : 'text-left grid grid-cols-3 gap-32 my-12 px-20 box-border '}`}>
            {/* card 1*/}
            <div className="text-left flex flex-col content-between box-border relative border rounded-2xl my-4 py-4 px-5 hover:c-bg-black transition duration-300 ease-in-out">
              <p className='text-xl mb-2 opacity-85 font-bold'>Beginner Plan</p>
              <h2 className='text-4xl font-extrabold'>$05 <span className="text-sm font-bold">/Year</span></h2>
              <p className='text-m mt-4 c-text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>

              <ul className='c-text-gray mt-8 mb-12'>
                <li className='flex items-center my-2'><img src={check} alt="check cion" className=' mr-2 w-4 h-4' /> Lorem ipsum dolor sit amet,</li>
                <li className='flex items-center my-2'><img src={check} alt="check cion" className=' mr-2 w-4 h-4' /> Lorem ipsum dolor sit amet,</li>
                <li className='flex items-center my-2'><img src={check} alt="check cion" className=' mr-2 w-4 h-4' /> Lorem ipsum dolor sit amet,</li>
                <li className='flex items-center my-2'><img src={check} alt="check cion" className=' mr-2 w-4 h-4' /> Lorem ipsum dolor sit amet,</li>
                <li className='flex items-center my-2'><img src={check} alt="check cion" className=' mr-2 w-4 h-4' /> Lorem ipsum dolor sit amet,</li>
              </ul>
              <Button
                text="Join Now"
                onClick={handleClick}
                type="secondary"
                size="medium"
              />
            </div>

            {/* card 2*/}
            <div className="text-left flex flex-col content-between box-border relative border rounded-2xl my-4 py-4 px-5">
              <p className='text-xl mb-2 opacity-85 font-bold'>Beginner Plan</p>
              <h2 className='text-4xl font-extrabold'>$05 <span className="text-sm font-bold">/Year</span></h2>
              <p className='text-m mt-4 c-text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>

              <ul className='c-text-gray mt-8 mb-12'>
                <li className='flex items-center my-2'><img src={check} alt="check cion" className=' mr-2 w-4 h-4' /> Lorem ipsum dolor sit amet,</li>
                <li className='flex items-center my-2'><img src={check} alt="check cion" className=' mr-2 w-4 h-4' /> Lorem ipsum dolor sit amet,</li>
                <li className='flex items-center my-2'><img src={check} alt="check cion" className=' mr-2 w-4 h-4' /> Lorem ipsum dolor sit amet,</li>
                <li className='flex items-center my-2'><img src={check} alt="check cion" className=' mr-2 w-4 h-4' /> Lorem ipsum dolor sit amet,</li>
                <li className='flex items-center my-2'><img src={check} alt="check cion" className=' mr-2 w-4 h-4' /> Lorem ipsum dolor sit amet,</li>
              </ul>
              <Button
                text="Join Now"
                onClick={handleClick}
                type="secondary"
                size="medium"
              />
            </div>

            {/* card 3*/}
            <div className="text-left flex flex-col content-between box-border relative border rounded-2xl my-4 py-4 px-5">
              <p className='text-xl mb-2 opacity-85 font-bold'>Beginner Plan</p>
              <h2 className='text-4xl font-extrabold'>$05 <span className="text-sm font-bold">/Year</span></h2>
              <p className='text-m mt-4 c-text-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>

              <ul className='c-text-gray mt-8 mb-12'>
                <li className='flex items-center my-2'><img src={check} alt="check cion" className=' mr-2 w-4 h-4' /> Lorem ipsum dolor sit amet,</li>
                <li className='flex items-center my-2'><img src={check} alt="check cion" className=' mr-2 w-4 h-4' /> Lorem ipsum dolor sit amet,</li>
                <li className='flex items-center my-2'><img src={check} alt="check cion" className=' mr-2 w-4 h-4' /> Lorem ipsum dolor sit amet,</li>
                <li className='flex items-center my-2'><img src={check} alt="check cion" className=' mr-2 w-4 h-4' /> Lorem ipsum dolor sit amet,</li>
                <li className='flex items-center my-2'><img src={check} alt="check cion" className=' mr-2 w-4 h-4' /> Lorem ipsum dolor sit amet,</li>
              </ul>
              <Button
                text="Join Now"
                onClick={handleClick}
                type="secondary"
                size="medium"
              />
            </div>





          </div>

        </section>



        {/* review  */}
        <section className='py-24 px-20 bg-cover h-auto '>
          <div className='flex justify-between items-center'>
            <div>
              <p className='text-xl  mx-2 c-text-gray'>Reviews</p>
              <h2 className='text-6xl my-2 font-extrabold uppercase'>From you</h2>
            </div>
          </div>

          <div className="flex items-center justify-between">


            <div className=' m-1 px-2 w-4/12'>
              <div className="relative w-[500px] h-[500px] mx-auto">
                <div className="absolute w-48 h-48 rounded-full overflow-hidden shadow-lg top-0 left-1/4 transform -translate-x-1/2 drop-shadow-3xl">
                  <img src={review1} alt="Person 1" className="w-full h-full object-cover" />
                </div>
                <div className="absolute w-36 h-36 rounded-full overflow-hidden shadow-lg top-[10%] right-20 drop-shadow-3xl">
                  <img src={review2} alt="Person 2" className="w-full h-full object-cover" />
                </div>
                <div className="absolute w-56 h-56 rounded-full overflow-hidden shadow-lg bottom-[15%] left-20 drop-shadow-3xl">
                  <img src={review3} alt="Person 3" className="w-full h-full object-cover" />
                </div>
                <div className="absolute w-40 h-40 rounded-full overflow-hidden shadow-lg bottom-28 right-4 drop-shadow-3xl">
                  <img src={review4} alt="Person 4" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>



            <div className='m-1 px-2 wrapperflex w-8/12' >



              <div className="flex gap-8 ali justify-evenly items-center  overflow-hidden rounded-3xl">


                <div className="shrink-0 grid place-content-top w-[clamp(12rem,1rem+50vw,32rem)] p-6 aspect-[16/9] font-semibold border-2 rounded-3xl">
                  <h4 className='text-3xl font-bold'>{cards[previousIndex].name}</h4>
                  <p className='my-2'>{cards[previousIndex].rating}</p>
                  <p className='text-lg'>{cards[previousIndex].description}</p>
                </div>
                <div className="shrink-0 grid place-content-top w-[clamp(12rem,1rem+50vw,32rem)] p-6 aspect-[16/9] font-semibold border-2 rounded-3xl">
                  <h4 className='text-3xl font-bold'>{cards[currentIndex].name}</h4>
                  <p className='my-2'>{cards[currentIndex].rating}</p>
                  <p className='text-lg'>{cards[currentIndex].description}</p>
                </div>
                <div className="shrink-0 grid place-content-top w-[clamp(12rem,1rem+50vw,32rem)] p-6 aspect-[16/9] font-semibold border-2 rounded-3xl">
                  <h4 className='text-3xl font-bold'>{cards[nextIndex].name}</h4>
                  <p className='my-2'>{cards[nextIndex].rating}</p>
                  <p className='text-lg'>{cards[nextIndex].description}</p>
                </div>
                {/* <div className="shrink-0 grid place-content-center w-[clamp(12rem,1rem+50vw,32rem)] p-4 aspect-[16/9] font-semibold border-2 rounded-3xl">
                  {cards[previousIndex].content}
                </div>
                <div className="shrink-0 grid place-content-center w-[clamp(12rem,1rem+50vw,32rem)] p-4 aspect-[16/9] font-semibold border-2 rounded-3xl">
                  {cards[currentIndex].content}
                </div>

                <div className="shrink-0 grid place-content-center w-[clamp(12rem,1rem+50vw,32rem)] p-4 aspect-[16/9] font-semibold border-2 rounded-3xl">
                  {cards[nextIndex].content}
                </div> */}


              </div>



              <div className="flex justify-end mt-4">
                <button onClick={prevCard} className="border-2 c-border-black h-12 w-12 hover:bg-black hover:text-white transition ease-in-out duration-300 p-2 mx-2 rounded-full text-xl font-black"> ⬅ </button>
                <button onClick={nextCard} className="border-2 c-border-black h-12 w-12 hover:bg-black hover:text-white transition ease-in-out duration-300 p-2 mx-2 rounded-full text-xl font-black"> ➡ </button>
              </div>
            </div>



          </div>

        </section>











        {/* call us today */}
        <section className='text-center py-24 px-[24%] bg-callbanner bg-cover bg-center h-auto c-text-white'>
          <p className='text-3xl font-semibold'>Call us Today</p>
          <h4 className='text-6xl font-bold my-8'>+91 - 1010101010</h4>
          <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
        </section>


        <section className='m-20'>






        </section>


      </Suspense>

    </div>
  )
}

export default Home
