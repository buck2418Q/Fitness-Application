import SideMenu from "./SideMenu";
import TopMenu from "./TopMenu";
import { RoutesData } from "./TrainerRoutesData";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="flex h-screen bg-light dark:bg-background text-background dark:text-light">
            <SideMenu RoutesData={RoutesData} />
            <div className="flex-1 flex flex-col">
                <TopMenu RoutesData={RoutesData} />
                <div className="flex-1 py-4 px-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
