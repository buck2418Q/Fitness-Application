import '../styleSheets/Home.css'
import React, { Suspense } from 'react'
const Loader = React.lazy(() => import('../components/Button'))
const Banner = React.lazy(() => import('./home/Banner.jsx'));
const StatBanner = React.lazy(() => import('./home/StatBanner.jsx'));
const ChooseUs = React.lazy(() => import('./home/ChooseUs.jsx'));
const Trainers = React.lazy(() => import('./home/Trainers.jsx'));
const Coaches = React.lazy(() => import('./home/Coaches.jsx'));
const JoinToday = React.lazy(() => import('./home/JoinToday.jsx'));
const Review = React.lazy(() => import('./home/Review.jsx'));
const CallUs = React.lazy(() => import('./home/CallUs.jsx'));



import LazyLoad from './../components/LazyLoad.jsx'

function Home() {
  const components = [Banner, StatBanner, ChooseUs, Trainers, Coaches, JoinToday, Review, CallUs];

  return (
    <>
      <Suspense fallback={<div>
        <Loader />
      </div>}>
        {components.map((Component, index) => (
          <LazyLoad key={index}>
            <Component />
          </LazyLoad>
        ))}

        <section className='m-20'>
        </section>

      </Suspense>
    </>
  )
}

export default Home
