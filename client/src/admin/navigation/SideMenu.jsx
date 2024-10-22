import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RoutesData } from './AdminRoutesData';
import logo from '../../assets/logos/logo.png';

const SideMenu = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    };

    const handleToggleMenu = (index) => {
        setOpenMenu(openMenu === index ? null : index);
    };

    return (
        <div className={`h-full  border border-r-gray-200 text-black ${collapsed ? 'w-20' : 'w-64'} transition-all duration-300`}>
            <div className='flex justify-between items-center'>
                <h1 className="text-2xl mb-4">
                    <img src={logo} alt="logo" />
                </h1>
                <button
                    className={`text-white py-4 ${collapsed ? 'pr-0' : 'pr-4'}`}
                    onClick={toggleCollapse}
                >
                    {collapsed ? '▶' : '◀'}
                </button>
            </div>
            <ul className={`transition-all duration-200 ease-in-out`}>
                {RoutesData.map((menu, index) => (
                    <li key={index} className="relative">
                        <Link
                            to={menu.path}
                            className={`flex items-center p-2 m-2 rounded-lg hover:bg-gray-200 transition duration-200 ease-in-out ${menu.children ? '' : (location.pathname === menu.path ? 'bg-gray-300' : '')}`}
                            onClick={() => handleToggleMenu(index)}
                        >
                            <span className={` ${collapsed ? 'pl-3' : ''}`}>
                                {menu.icon}
                            </span>
                            <span className={` transition-opacity duration-200 ${collapsed ? 'opacity-0' : 'opacity-100 ml-2'}`}>
                                {menu.title}
                            </span>
                            {menu.children && (
                                <span className={`${openMenu === index ? 'rotate-180' : ''} ${collapsed ? 'hidden' : 'ml-auto  transition-transform duration-200'}`}>
                                    ^
                                </span>
                            )}
                        </Link>

                        {menu.children && openMenu === index && (
                            <ul
                                className="pl-4 transition-all duration-200 ease-in-out text-sm"
                                style={{
                                    maxHeight: openMenu === index ? '200px' : '0',
                                    overflow: 'hidden',
                                }}
                            >
                                {menu.children.map((child, childIndex) => (
                                    <li key={childIndex}>
                                        <Link
                                            to={child.path}
                                            className={`flex items-center hover:bg-gray-200 rounded-lg transition duration-200 ease-in-out my-1 ${collapsed ? 'ml-2 pl-4 w-12' : 'p-2 mr-2'} ${location.pathname === child.path ? 'bg-gray-300' : ''}`}
                                        >
                                            {child.icon}
                                            <span className={`ml-2 transition-opacity duration-200 ${collapsed ? 'opacity-0' : 'opacity-100'}`}>
                                                {child.title}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SideMenu;
