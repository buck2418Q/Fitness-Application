import { useState } from 'react';
import review1 from '../../assets/images/review1.jpg'
import review2 from '../../assets/images/review2.jpg'
import review3 from '../../assets/images/review3.jpg'
import review4 from '../../assets/images/review4.jpg'

function Review() {
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
        <>
            <section className='py-24 px-20 bg-cover h-auto'>
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
        </>
    )
}

export default Review