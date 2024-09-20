// import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button';
import logo from './../assets/logos/logo.png'
import '../styleSheets/navbar.css'

function navbar() {
    const handleClick = () => alert('hey Groot!');
    return (


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
                {/* <button>Join Now</button> */}
                <Button
                    text="Join Now"
                    onClick={handleClick}
                    type="primary"
                    size="medium"
                />

            </div>
        </nav>


    )
}

export default navbar
