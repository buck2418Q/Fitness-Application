import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RoutesData } from './AdminRoutesData';

const SideMenu = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const [collapsed, setCollapsed] = useState(false);

    const handleMouseEnter = (index) => {
        setOpenMenu(index);
    };

    const handleMouseLeave = () => {
        setOpenMenu(null);
    };

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className={`h-full bg-gray-800 text-white ${collapsed ? 'w-20' : 'w-64'} transition-all duration-300`}>
            <div className='flex justify-between items-center'>
                <h1 className="text-2xl mb-4">Admin</h1>
                <button
                    className="text-white py-4 pr-4"
                    onClick={toggleCollapse}
                >
                    {collapsed ? '▶' : '◀'}
                </button>
            </div>
            <ul className={`transition-all duration-200 ease-in-out ${collapsed ? 'ml-4' : ''}`}>
                {RoutesData.map((menu, index) => (
                    <li
                        key={index}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        className="relative"
                    >
                        <Link
                            to={menu.path}
                            className="flex items-center p-2 hover:bg-gray-700 transition duration-200 ease-in-out"
                        >
                            {menu.icon}
                            <span className={`ml-2 transition-opacity duration-200 ${collapsed ? 'opacity-0' : 'opacity-100'}`}>
                                {menu.title}
                            </span>
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
                                            className="flex items-center p-2 hover:bg-gray-600 transition duration-200 ease-in-out"
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
        </div >
    );
};

export default SideMenu;
