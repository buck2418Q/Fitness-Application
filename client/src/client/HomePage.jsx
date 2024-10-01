import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"


function HomePage() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default HomePage