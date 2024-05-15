import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Assets/Sevaride.png";
import "./navbar.css";



const Navbar = () => {
   


  return (
    <>
    <nav className="navbar border-2 ">
      <a href="https://sasss.shop/">
        <img src={logo} alt="logo" className="logo" />
      </a>

      <div className="navMenu hover:cursor-grab  ">
       
      <NavLink
            to="/"
            className={({ isActive }) =>
              ` ${isActive ? "text-orange-500 " : "text-gray-600"} py-2 px-1 mt-1 mr-8 text-black  text-md font-semibold no-underline pr-8 hover:text-orange-600`
            }
            style={{ textDecoration: "none", cursor:"pointer" }}
          >
            Home
          </NavLink>
       
        <NavLink
            to="/services"
            className={({ isActive }) =>
              ` ${isActive ? "text-orange-500" : "text-gray-600"} py-2 px-1 mt-1 mr-8 text-black  text-md font-semibold no-underline pr-8 hover:text-orange-600`
            }
            style={{ textDecoration: "none", cursor:"pointer" }}
          >
            Services
          </NavLink>
        <NavLink
            to="/about-us"
            className={({ isActive }) => 
              ` ${isActive ? "text-orange-500" : "text-gray-600"} py-2 px-1 mt-1 mr-8 text-black text-md font-semibold no-underline pr-8  hover:text-orange-600`
            }
            style={{ textDecoration: "none" , cursor:"pointer"}}
          >
         About us
          </NavLink>
        <NavLink
            to="/contact"
            className={({ isActive }) =>
              ` ${isActive ? "text-orange-500" : "text-gray-600"}  py-2 px-1 mt-1 mr-8 text-black text-md font-semibold no-underline pr-8  hover:text-orange-600`
            }
            style={{ textDecoration: "none", cursor:"pointer" }}
          >
            Contact
          </NavLink>
      </div>

      <div className="flex justify-end">
    
        <button className=" bg-red-400 mt-5 mr-3 text-white border-none py-2.5 px-5 text-md  rounded-md  hover:scale-100 transition duration-300 ease-in-out">
        
          <Link to="/login" className=" text-xl px-1 transition-all duration-300 ease-in-out hover:tracking-wider"> Login</Link>
        </button>
      </div>
    </nav>
    </>
  );
};
export default Navbar;
