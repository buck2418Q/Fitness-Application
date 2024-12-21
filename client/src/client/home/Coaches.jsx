
import coach1 from '../../assets/images/coach1.avif'
import coach2 from '../../assets/images/coach2.jpg'
import ButtonUi from '../../components/Button.jsx'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Coaches() {

    const handleClick = () => {
        alert('working')
    }

    return (
        <>
            <section className='w-full h-full border-solid px-24 py-20 flex bg-background'>
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
                        <ButtonUi
                            text="Join Now"
                            onClick={handleClick}
                            type="secondary"
                            size="medium"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Coaches