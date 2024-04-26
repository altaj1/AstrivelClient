import { Link, NavLink } from "react-router-dom";
import { TbLayoutNavbarExpand } from "react-icons/tb";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const { user, userLogOut, setUser } = useContext(AuthContext);
  // console.log(name);
  const listItems = (
    <div className=" lg:flex  items-center gap-7">
      <div className="flex  md:flex-row md:gap-6 flex-col lg:flex-row lg:gap-7 lg:space-y-0 space-y-4 ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-rose-500 font-bold lg:mt-0 mt-4"
              : "font-bold mt-4 lg:mt-0"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/all-tourists"
          className={({ isActive }) =>
            isActive ? "text-rose-500 font-bold" : "font-bold"
          }
        >
          All Tourists Spot
        </NavLink>

        <NavLink
          to="/add-tourists"
          className={({ isActive }) =>
            isActive ? "text-rose-500 font-bold" : "font-bold"
          }
        >
          Add Tourists Spot
        </NavLink>

        <NavLink
          to="/my-list"
          className={({ isActive }) =>
            isActive ? "text-rose-500 font-bold" : "font-bold"
          }
        >
          My List
        </NavLink>
      </div>
    </div>
  );
  console.log(user)
  useEffect(()=>{
    if(user){
      setUser(user)
    }
  },[user])
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost md:hidden lg:hidden"
          >
            <TbLayoutNavbarExpand className="text-3xl" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2  shadow bg-base-100 rounded-box w-52"
          >
            {listItems}
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <img
            className=" lg:h-20 md:h-16 h-11  "
            src="https://i.ibb.co/kHRLsmw/astro-home-1-removebg-preview-1.png"
            alt=""
          />
          <h1 className="text-2xl font-bold">Astrovel</h1>
        </div>
      </div>
      <div className="navbar-center">
        <div className=" md:block   hidden lg:flex">
          <ul className="menu menu-horizontal   px-1">{listItems}</ul>
        </div>
      </div>

      <div className="navbar-end space-x-3">
        {/* <div
          className="hover:tooltip tooltip-primary tooltip-open tooltip-bottom"
          data-tip={user?.displayName}
        >
          <Link to="/profile">
            
            <img
              className="h-14 rounded-full"
              src={user ? user.photoURL : <CgProfile className="text-5xl" />}
              alt=""
            />
          </Link>
        </div> */}

        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className=" m-1">
          <Link to="/profile">
            
            <img
              className="h-14 rounded-full"
              src={user ? user.photoURL : <CgProfile className="text-5xl" />}
              alt=""
            />
          </Link>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>{user?.displayName}</a>
            </li>
            <li>
              <a><button  onClick={() => userLogOut()} className="btn btn-success w-full">
            Logout
          </button></a>
            </li>
          </ul>
        </div>

        {user ? (
          ""
        ) : (
          <Link className="btn btn-success" to="/login">
            {" "}
            Login
          </Link>
        )}

        <div>
          {user ? (
            ""
          ) : (
            <NavLink to="/register" className="btn btn-success">
              Register
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
