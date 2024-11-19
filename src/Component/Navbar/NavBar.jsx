import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import "./navbar.css"



const NavBar = () => {
   const {user, handleLogout} = useContext(authContext)
  

   
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
             <NavLink to="/"> <li><a>Home</a></li></NavLink>
             {
              user ?  <NavLink to="/"> <li><a>Details</a></li></NavLink>  : <div><NavLink to="/login"> <li><a>Login</a></li></NavLink>
              <NavLink to="/register"> <li><a>Register</a></li></NavLink></div>
             }
             
            
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">CareerHub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <NavLink to="/"> <li><a>Home</a></li></NavLink>
          {
              user ?  <NavLink to="/"> <li><a>Details</a></li></NavLink>  : <div className="flex"><NavLink to="/login"> <li><a>Login</a></li></NavLink>
              <NavLink to="/register"> <li><a>Register</a></li></NavLink></div>
             }
           
           
          </ul>
        </div>
        <div className="navbar-end">
        {user ? 
         
        <div className="flex">
          <div>
          <NavLink to="/login"> <a onClick={handleLogout} className="btn">Logout</a></NavLink>
          </div>
           
         <div className="user-container ">
         <img src= {user.photoURL} alt="" className="h-10 w-10 rounded-full border-2 border-red-500 " />
         <div className="user-name">{user.displayName}</div>
         </div>

        </div>
        :<NavLink to="/login"> <a className="btn">Login</a></NavLink>}
          
          
         
        
        </div>
      </div>
    );
};

export default NavBar;