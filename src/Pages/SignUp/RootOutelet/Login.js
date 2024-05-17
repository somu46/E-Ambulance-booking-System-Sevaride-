import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Outlet } from "react-router-dom";


const Login = () => {

 const navigate=useNavigate();
  const handlePatientClick = () => {
    navigate("/login/user");
  };

  const handleDriverClick = () => {
    navigate("/login/driver");
  };

  return (
    <>
      <div className="container">
        <div className="user-container">
          <div onClick={handlePatientClick}>
            <button
              type="button"
              className=" flex justify-center align-middle w-[220px] h-[60px] p-3 rounded-md text-xl ml-10 mr-auto bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
            >
             <p className="font-semibold text-xl p-1 text-black">Patient</p>
            </button>
          </div>
          <div
            onClick={handleDriverClick}
          >
          
            <button
              type="button"
              className=" flex justify-center align-middle w-[220px] h-[60px] p-3 rounded-md text-xl ml-10 mr-auto bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-500 "
            >
            <p className="font-semibold text-xl p-1 text-black">Driver</p> 
            </button>
          </div>
        </div>
      </div>
      
    </>
  );
};
export default Login;
