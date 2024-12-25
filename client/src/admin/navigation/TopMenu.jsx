import { useEffect, useState } from 'react';
import { bellIcon } from '../../components/icons'
import ButtonUi from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import profileBanner from '../../assets/images/profileBanner.jpg'
import profilePic from '../../assets/images/profilePic.jpg'
import { searchIcon } from '../../components/icons'
import { motion } from "framer-motion"
import { fadeIn } from '../../assets/utils/motion';
import { jwtDecode } from 'jwt-decode';

const TopMenu = () => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        setUserName(decodedToken.userName);
        setUserEmail(decodedToken.email);
    }, [])
    const [isOpen, setIsOpen] = useState(false);

    const toggleProfileModal = () => {
        setIsOpen(isOpen === true ? false : true)
    }

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            toggleProfileModal();
        }
    };

    const logoutClick = () => {
        localStorage.clear('token');
        sessionStorage.clear('token');
        navigate('/home')
    }
    const profileClick = () => {
        navigate('/admin/profile');
        toggleProfileModal();
    }

    const searchClick = () => {
        alert('searchClick')
    }

    return (
        <>
            <div className=" h-16 flex items-center justify-between px-8 pt-2 m-2">
                <h3 className="text-2xl font-bold">
                    Admin {userName}
                </h3>
                <div className="flex gap-6 items-center">
                    <label className="relative block">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2" onClick={searchClick}>
                            <img src={searchIcon} alt="" className='w-5 opacity-55' />
                        </span>
                        <input
                            className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-gray-300 focus:ring-gray-300 focus:ring-1 sm:text-sm shadow-sm w-72 transition-width duration-300 ease-in-out focus:w-[300px]"
                            placeholder="Search..." type="text" name="search"
                        />
                    </label>
                    <span >
                        <img src={bellIcon} className='shadow-2xl h-5 w-5 hover:shadow-2xl relative ' />
                    </span>
                    <span className="w-12 h-12 bg-gray-200 rounded-full flex justify-center items-center hover:shadow-xl">
                        <img src={profilePic} alt="User" className='border rounded-full h-full cursor-pointer' onClick={toggleProfileModal} />
                    </span>
                </div>
            </div>

            {isOpen && (
                <div
                    className={`fixed inset-0 flex items-start justify-end bg-black bg-opacity-5 z-50 transition ease-in-out duration-700 `}
                    onClick={handleOverlayClick}
                >
                    <motion.div initial='hidden' animate='show' variants={fadeIn("left", "spring", .1, 0.5)} className="bg-white rounded-lg shadow-lg w-1/6 border border-gray-200  top-20 absolute right-8 h-[350px]" onClick={(e) => e.stopPropagation()}>

                        <div className='p-1 flex flex-col items-center justify-center '>
                            <img src={profileBanner} alt="" className='rounded-lg w-full h-40 object-cover' />
                            <img src={profilePic} alt="" className='rounded-full w-24 top-[-48px]  relative shadow-black border-white border-3' />

                        </div>


                        <div className="px-5 relative top-[-40px]">
                            <p className='text-xl text-center font-bold'>{userName}</p>
                            <p className='text-base text-center font-semibold'>{userEmail}</p>
                        </div>

                        <div className="flex justify-evenly p-2  relative top-[-40px]">
                            <p className=' m-2 w-full rounded-lg'>
                                <ButtonUi
                                    text="Profile"
                                    onClick={profileClick}
                                    type="primary"
                                    size="medium"
                                />
                            </p>
                            <p className=' m-2 w-full rounded-lg'>
                                <ButtonUi
                                    text="Logout"
                                    onClick={logoutClick}
                                    type="primary"
                                    size="medium"
                                />
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    );
};

export default TopMenu;
