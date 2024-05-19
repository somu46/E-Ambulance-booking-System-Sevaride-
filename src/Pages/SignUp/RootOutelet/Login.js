import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";


const Login = () => {

  // const [userRoll,setUserRoll]=useState("");
  // const [driverRoll,setDriverRoll]=useState("");
 const navigate=useNavigate();

 
  const handlePatientClick = () => {
    // setUserRoll("user")
    navigate("/login/user",{
      state:{
        Roll:"user",
      }
    });
  };

  const handleDriverClick = () => {
    // setDriverRoll("driver");
    navigate("/login/driver",{
      state:{
        Roll:"driver",
      }
    });

  };

  // console.log(`userRoll: ${userRoll?userRoll:"Value is null"} : driverRoll:${driverRoll}`)

  return (
    <>
      <div className="container">
        <div className="user-container">
          <div >
            {/* <from action='/login/user' method="GET" > */}
            <button
            onClick={handlePatientClick}
              type="button"
              className=" flex justify-center align-middle w-[220px] h-[60px] p-3 rounded-md text-xl ml-10 mr-auto bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
            >
             <p className="font-semibold text-xl p-1 text-black">Patient</p>
            </button>
            {/* </from> */}
          </div>
          <div
          
          >
          
            <button
              onClick={handleDriverClick}
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
