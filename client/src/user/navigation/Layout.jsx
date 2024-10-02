
import { Outlet } from 'react-router-dom';
import SideMenu from './SideMenu';
import TopMenu from './TopMenu';
import { menuData } from './data';

const Layout = () => {
    return (
        <div className="flex h-screen">
            <SideMenu menuData={menuData} />
            <div className="flex-1 flex flex-col">
                <TopMenu menuData={menuData} />
                <div className="flex-1 p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
