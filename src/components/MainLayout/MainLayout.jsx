import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { ToastContainer } from "react-toastify";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            this is mainlayout
            <Outlet></Outlet>
            <ToastContainer />
        </div>
    );
};

export default MainLayout;