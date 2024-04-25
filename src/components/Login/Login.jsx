import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Authprovider/AuthProvider";
import { LiaEyeSlashSolid, LiaEyeSolid } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";


const Login = () => {
    const [error, setError] = useState("")
    const location = useLocation()
    const navigate = useNavigate()
  const {loginUser,  gitHubLogin, user, userLogInGoogle} = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const[isLoading, setLoading] = useState(false)
    const notify = () => toast("Congratulations login successfully!!");
    const notify2 = () => toast.warning("Please check out email and password");
    const notify3 = () => toast.warning("Must have an Uppercase letter & Lowercase letter in the password");
    const notify4 = () => toast.warning("Length must be at least 6 character");


    const handelShowPass = ()=>{
        setShowPass(!showPass)
    
      }

    
    const handelGoogleLogin= ()=>{
        setLoading(!isLoading)
         userLogInGoogle()
         .then(res=>{
           setLoading(isLoading)
           notify()
        //    navigate(location.state)
         })
     
       }

    const handelGithubLogin =()=>{
        setLoading(!isLoading)
        
        gitHubLogin()
        .then(res=>{
          setLoading(isLoading)
          notify()
        //   navigate(location.state)
        })
      }

    const handelLogin = (e)=>{
        e.preventDefault();
        setLoading(!isLoading)
        
    
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        if(password.length<6){
          notify4()
          setError("Length must be at least 6 character")
          return
        }
        const regex = /^(?=.*[a-z])(?=.*[A-Z])/;
        if(!regex.test(password)){
          notify3()
          setError("Must have an Uppercase letter & Lowercase letter in the password")
          return
        }
    
        loginUser(email, password)
        .then(res=>{   
                setLoading(isLoading)          
                notify()  
                // navigate(location.state)
        })
        .catch((error)=>{
          setLoading(isLoading) 
            console.log(error);
            notify2()
        })
       
    }
   
    return (
        <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      {
        isLoading?<span className="loading loading-spinner loading-lg"></span>:
        ""
      }
      <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center h-52 items-center rounded-lg shadow-lg justify-center p-20 hover:bg-purple-500 flex flex-col  lg:text-left bg-purple-600 text-white opacity-85">
          <h1 className="font-bold text-2xl animate__animated animate__backInDown">WELCOME</h1>
          <hr />
          <p className="animate__animated animate__backInLeft">Login to Access Dashbord</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handelLogin}  className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input "
                required
              />
              <hr />
            </div>

            <div className="flex items-center">
             <div>
             <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPass? "text": "password"}
                placeholder="password..."
                name="password"
                className="input w-[300px] relative "
                required
              />
               
              <hr />
             </div>
              <div onClick={handelShowPass} type="submit" name = "password" className=" mt-10 ml-[260px] absolute  ">
                {
                    !showPass?<LiaEyeSlashSolid  className="text-xl opacity-80"/> :   <LiaEyeSolid className="text-xl opacity-80" />
                }
              </div>
             </div>

            <div className="flex items-center justify-around">
              <div className="form-control mt-6">
                <button className="btn btn-primary w-auto">Login</button>
              </div>
              <div>
              <button className="btn btn-outline btn-primary mt-[21px]">
                <NavLink
                  to="/create-accound" 
                >
                  Create Account?
                </NavLink>
              </button>
              </div>
            </div>
          </form>
          <div className="text-center">
          <button onClick={ handelGoogleLogin} className="btn btn-wide bg-red-300 text-3xl">
          <FcGoogle />
          </button>
          </div>
          <div className="text-center mt-5">
          <button onClick={ handelGithubLogin} className="btn btn-wide bg-red-300 text-3xl">
          <FaGithub />
          </button>
          </div>
        </div>
      </div>
     
    </div>
    </div>
    );
};

export default Login;