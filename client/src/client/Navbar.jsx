import React, { Suspense, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
const ButtonUi = React.lazy(() => import('../components/Button'))
import logo from './../assets/logos/logo.png'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const navigate = useNavigate();
    const joinNowClick = () => {
        navigate('/login')
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <img src={logo} alt="logo" className="h-10" />

                <div className={`md:flex items-center gap-6 ${isMenuOpen ? 'flex opacity-100 z-10' : 'opacity-0 invisible z-10'} flex-col md:flex-row absolute md:relative top-16 md:top-0 left-0 md:left-auto w-full md:w-auto bg-gray-100 md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out md:opacity-100 md:visible`}>
                    <Link to="home" className="hover:text-blue-600 transition-colors" onClick={closeMenu}>Home</Link>
                    <Link to="about" className="hover:text-blue-600 transition-colors" onClick={closeMenu}>About</Link>
                    <Link to="trainers" className="hover:text-blue-600 transition-colors" onClick={closeMenu}>Trainers</Link>
                    <Link to="review" className="hover:text-blue-600 transition-colors" onClick={closeMenu}>Review</Link>
                    <Link to="plans" className="hover:text-blue-600 transition-colors" onClick={closeMenu}>Plans</Link>
                </div>

                <div className="hidden md:block">
                    <Suspense fallback={<div>Loading...</div>}>
                        <ButtonUi
                            text="Sign in"
                            onClick={joinNowClick}
                            type="primary"
                            size="medium"
                        />
                    </Suspense>
                </div>

                <button
                    className="md:hidden focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
