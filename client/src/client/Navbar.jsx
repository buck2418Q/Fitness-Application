import React, { Suspense, useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from './../assets/logos/logo.png';
import { motion } from 'framer-motion';
import { fadeIn } from '../assets/utils/motion.js';

const ButtonUi = React.lazy(() => import('../components/Button'));

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const menuRef = useRef(null);

    const joinNowClick = () => navigate('/login');

    // Toggle Menu Function
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    // Close menu when clicked outside
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, []);

    // Define Navbar Links
    const navbarLinks = [
        { to: 'home', label: 'Home' },
        { to: 'about', label: 'About' },
        { to: 'trainers', label: 'Trainers' },
        { to: 'review', label: 'Review' },
        { to: 'plans', label: 'Plans' },
    ];

    return (
        <nav className="py-2">
            <div
                className="mx-4 rounded-xl p-2 flex justify-between"
                style={{ backgroundColor: 'rgba(0, 0, 0, .5)' }}
            >
                {/* Logo */}
                <img src={logo} alt="logo" className="h-10" />

                {/* Desktop Menu */}
                <div className={`md:flex items-center gap-6 invisible md:visible z-10 flex-col md:flex-row`}>
                    {navbarLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            aria-current={location.pathname === link.to ? 'page' : undefined}
                            className="hover:text-blue-600 transition-colors text-white"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Sign-in Button */}
                <div className="hidden md:block">
                    <Suspense fallback={<div>Loading...</div>}>
                        <ButtonUi text="Sign in" onClick={joinNowClick} type="primary" size="medium" />
                    </Suspense>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden focus:outline-none z-50"
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div
                    ref={menuRef}
                    initial="hidden"
                    animate="show"
                    variants={fadeIn('right', 'spring', 0, 0.75)}
                    className="h-96 w-full bg-transparent absolute z-20 flex items-start justify-end"
                >
                    <div
                        className="rounded-xl flex flex-col w-full float-right items-end pr-4 pl-16 py-4 mx-4 mt-4"
                        style={{ backgroundColor: 'rgba(0, 0, 0, .8)' }}
                    >
                        {navbarLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={() => setIsMenuOpen(false)}
                                className="hover:text-blue-600 transition-colors text-white text-lg mb-2"
                                aria-current={location.pathname === link.to ? 'page' : undefined}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className='w-5/12'>
                            <ButtonUi text="Sign in" onClick={joinNowClick} type="primary" size="medium" />
                        </div>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}

export default Navbar;
