// import React from 'react'
import logo from './../assets/logos/logo.png'

function navbar() {
    return (


        <nav className='navbar'>
            <div >
                <img src={logo} alt="logo" />
            </div>
            <div className='navbar'>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Trainers</a>
                <a href="#">Review</a>
                <a href="#">Plans</a>
            </div>
            <div >
                <button>Join Now</button>
            </div>
        </nav>


    )
}

export default navbar
