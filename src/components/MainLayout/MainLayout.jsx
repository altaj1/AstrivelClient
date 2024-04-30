import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Footer from "../Footer/Footer";

const MainLayout = () => {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div >
           <div className=" lg:h-24 "> 
           <Navbar setDarkMode={setDarkMode} darkMode={darkMode}></Navbar>
           </div>
           
           <div  className={`${darkMode ? "bg-slate-600  h-full text-white" : ""} dark:bg-[#0F172A] `}>
           <div 
            // style={{ minHeight: "calc(100vh - 370px)" }}
            className='min-h-[calc(100vh-124px)] pt-20 lg:pt-0'>
            <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
           </div>
            <ToastContainer />
        </div>
    );
};

export default MainLayout;