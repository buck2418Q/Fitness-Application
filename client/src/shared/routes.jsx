import React, { Suspense } from 'react'


const Home = React.lazy(() => import('../client/Home'));
const Trainers = React.lazy(() => import('../client/Trainers'));
const Review = React.lazy(() => import('../client/Review'));
const Plans = React.lazy(() => import('../client/Plans'));
const Navbar = React.lazy(() => import('../client/Navbar'));
const Footer = React.lazy(() => import('../client/Footer'));
const About = React.lazy(() => import('../client/About'));
const Loader = React.lazy(() => import('../components/Button'))

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function routes() {
    return (
        <>
            <Suspense fallback={<div><Loader /></div>}>
                <BrowserRouter>

                    <Navbar />
                    <Routes>
                        <Route path="" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/trainers" element={<Trainers />} />
                        <Route path="/review" element={<Review />} />
                        <Route path="/plans" element={<Plans />} />
                    </Routes>
                    <Suspense fallback={<div>
                        <Loader />
                    </div>}>
                        <Footer></Footer>
                    </Suspense>

                </BrowserRouter>
            </Suspense>

        </>
    )
}

export default routes