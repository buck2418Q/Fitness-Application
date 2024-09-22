import React, { Suspense } from 'react';
// import React from 'react'
import { Link } from 'react-router-dom'
// import Button from '../components/Button';
const ButtonUi = React.lazy(() => import('../components/Button'))
import logo from './../assets/logos/logo.png'
import '../styleSheets/navbar.css'
function Navbar() {
    const handleClick = () => alert('hey Groot!');
    return (

        <>
            <nav className='navbar'>
                <div >
                    <img src={logo} alt="logo" />
                </div>
                <div className='navbar'>

                    <Link to="home">Home</Link>
                    <Link to="about">About</Link>
                    <Link to="trainers">Trainers</Link>
                    <Link to="review">Review</Link>
                    <Link to="plans">Plans</Link>
                </div>
                <div >
                    <Suspense fallback={<div>Loading...</div>}>
                        <ButtonUi
                            text="Join Now"
                            onClick={handleClick}
                            type="primary"
                            size="medium"
                        />

                    </Suspense>
                </div>
            </nav>

        </>

    )
}

export default Navbar
