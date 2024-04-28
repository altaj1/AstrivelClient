import { useContext } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRout = ({chidren}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    if(user){
        return chidren
    }
    return <Navigate to = '/login' state={location.pathname}> </Navigate>
};


export default PrivetRout;