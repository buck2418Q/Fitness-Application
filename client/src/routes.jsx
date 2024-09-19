// import React from 'react'
import Home from './client/home'
import About from './client/About'
import Trainers from './client/Trainers'
import Review from './client/Review'
import Plans from './client/Plans'
import Navbar from './client/navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function routes() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/trainers" element={<Trainers />} />
                    <Route path="/review" element={<Review />} />
                    <Route path="/plans" element={<Plans />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default routes