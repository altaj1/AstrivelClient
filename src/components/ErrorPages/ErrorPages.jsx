import { Link } from "react-router-dom";


const ErrorPages = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/yF5sQw0/error.png')]  bg-no-repeat bg-cover " >
            <Link to='/'>Go Back To Home</Link>
        </div>
    );
};

export default ErrorPages;