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
import Button from '../components/Button.jsx'

function home() {

  const handleClick = () => {
    alert('working')
  }
  return (
    <div>
      <section className=" w-full flex justify-around c-bg-black  c-text-white my-8 py-8">
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
                <img src={workoutImage1} alt="Workout Image 1" className="my-6 mb-4 sm:mb-0" />
                <img src={workoutImage2} alt="Workout Image 2" className='mt-5 mb-6' />
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
            <img
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
            <img
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
            <img
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
            <img
              src={workoutImage3}
              alt="Workout Image 3"
              className="w-full h-full object-cover transform scale-100 transition-all duration-300 ease-in-out hover:scale-100"
            />
          </div>

          <div className="mx-0 sm:mx-4 w-1/2 overflow-hidden sm:w-1/2 mt-4 sm:mt-0 transition-all duration-300 ease-in-out hover:w-full h-96 rounded-3xl test">
            <img
              src={workoutImage3}
              alt="Workout Image 3"
              className="w-full h-full object-cover transform scale-110 transition-all duration-300 ease-in-out"
            />
          </div>
        </div>
        <div className="text-left flex flex-col content-between  box-border w-7/12 relative ml-16">
          <p className='text-2xl mb-6 opacity-85 font-bold'>Are you looking for a Mentor?</p>
          <h2 className='text-6xl font-extrabold'>Meet Our Trainers </h2>
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

      
      {/* call us today */}
      <section className='text-center py-24 px-[24%] bg-callbanner bg-cover bg-center h-auto c-text-white'>
        <p className='text-3xl font-semibold'>Call us Today</p>
        <h4 className='text-6xl font-bold my-8'>+91 - 1010101010</h4>
        <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
      </section>


      <section className='m-20'></section>



    </div>
  )
}

export default home
