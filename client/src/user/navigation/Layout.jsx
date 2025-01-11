
import { Outlet } from 'react-router-dom';
import SideMenu from './SideMenu';
import TopMenu from './TopMenu';
import { RoutesData } from './UsersRoutesData';

const Layout = () => {
    return (
        <div className="flex bg-light dark:bg-background text-background dark:text-light">
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
