import { Link } from "react-router-dom";


const ErrorPages = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/yF5sQw0/error.png')]  bg-no-repeat bg-cover h-screen  flex items-end  justify-center" >
            <Link to='/' className="text-xl font-medium text-yellow-50 btn bg-slate-500  mb-40">Go Back To Home</Link>
        </div>
    );
};

export default ErrorPages;