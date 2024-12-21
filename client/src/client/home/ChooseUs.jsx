import workoutImage1 from '../../assets/images/home-img-1.png'
import workoutImage2 from '../../assets/images/home-img-2.png'
import workoutImage3 from '../../assets/images/home-img-3.png'
import glove from '../../assets/icons/glove.png'
import time from '../../assets/icons/time.png'
import dubbel from '../../assets/icons/dumbbel.png'
import moneyBag from '../../assets/icons/money-bag.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function ChooseUs() {
    return (
        <>
            <section className='w-full h-full border-solid text-center px-4 sm:px-12 lg:px-24 py-10 lg:py-20  text-light bg-background'>
                <h2 className='text-4xl sm:text-5xl lg:text-6xl font-black'>Why Choose Us</h2>
                <p className='text-lg sm:text-xl lg:text-2xl m-5 lg:m-10 text-secondlight'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <div className="flex flex-col lg:flex-row items-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 m-0 p-0 box-border w-full lg:w-8/12">

                        {/* card 1 */}
                        <div className="m-4 flex">
                            <div className='mx-4 my-2 p-2 rounded-full c-bg-black h-fit'>
                                <img src={glove} alt="" className='w-12 aspect-square' />
                            </div>
                            <div className="h-fit">
                                <h6 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-2'>
                                    Trainer Qualifications
                                </h6>
                                <div className="text-secondlight">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                </div>
                            </div>
                        </div>

                        {/* card 2 */}
                        <div className="m-4 flex">
                            <div className='mx-4 my-2 p-2 rounded-full c-bg-black h-fit'>
                                <img src={dubbel} alt="" className='w-12 aspect-square' />
                            </div>
                            <div className="h-fit">
                                <h6 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-2'>
                                    Facility Amenities
                                </h6>
                                <div className="text-secondlight">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                </div>
                            </div>
                        </div>

                        {/* card 3 */}
                        <div className="m-4 flex">
                            <div className='mx-4 my-2 p-2 rounded-full c-bg-black h-fit'>
                                <img src={moneyBag} alt="" className='w-12 aspect-square' />
                            </div>
                            <div className="h-fit">
                                <h6 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-2'>
                                    Membership Cost
                                </h6>
                                <div className="text-secondlight">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                </div>
                            </div>
                        </div>

                        {/* card 4 */}
                        <div className="m-4 flex">
                            <div className='mx-4 my-2 p-2 rounded-full c-bg-black h-fit'>
                                <img src={time} alt="" className='w-12 aspect-square ' />
                            </div>
                            <div className="h-fit">
                                <h6 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-2'>
                                    Operating Hours
                                </h6>
                                <div className="text-secondlight">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-4/12 flex flex-col">
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
        </>
    )
}

export default ChooseUs