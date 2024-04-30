import { useContext } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRout = ({children}) => {
    const {user,  loading} = useContext(AuthContext);
    const location = useLocation();
    

    if (loading) {
        return <div className="text-center"><span className="loading loading-spinner  loading-lg"></span></div>
     }
    if(user) return children
   
    return <Navigate to='/login' state={location.pathname}  />
    
    
};


export default PrivetRout;