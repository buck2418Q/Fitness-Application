
import { Outlet } from 'react-router-dom';
import SideMenu from './SideMenu';
import TopMenu from './TopMenu';
import { RoutesData } from './RoutesData.js';

const Layout = () => {
    return (
        <div className="flex h-screen">
            <SideMenu RoutesData={RoutesData} />
            <div className="flex-1 flex flex-col">
                <TopMenu RoutesData={RoutesData} />
                <div className="flex-1 p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
