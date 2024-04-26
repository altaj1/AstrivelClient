import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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