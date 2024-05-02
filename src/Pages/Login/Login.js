import React, { useState } from "react";
import "./Login.css";
import user from "../../Assets/person.png";
import email from "../../Assets/email.png";
import lock from "../../Assets/password.png";
import mobile from "../../Assets/phone.png";

const Login = () => {
  const [action, setAction] = useState(null); // Initialize action as null
  const [driverInputVisible, setDriverInputVisible] = useState(false);
  const [selectionMade, setSelectionMade] = useState(false); // Track whether selection is made or not

  const handleUserClick = () => {
    setAction("User");
    setDriverInputVisible(false); // Hide driver-specific input fields
    setSelectionMade(true); // Set selection made to true
  };

  const handleDriverClick = () => {
    setAction("Driver");
    setDriverInputVisible(true); // Show driver-specific input fields
    setSelectionMade(true); // Set selection made to true
  };

  const handleSignUpClick = () => {
    setAction("Sign Up");
  };

  const handleLogInClick = () => {
    setAction("Login");
  };

  return (
    <>
      <form className="container">
        {!selectionMade && ( // Render user selection buttons if selection is not made
          <div className="user-container">
            <div
              className={action === "User" ? "submit gray" : "alluser"}
              onClick={handleUserClick}
              color="#324595"
            >
              User
            </div>
            <div
              className={action === "Driver" ? "submit gray" : "alluser"}
              onClick={handleDriverClick}
              color="#e50614"
            >
              Driver
            </div>
          </div>
        )}

        {selectionMade && ( // Render greeting if selection is made
          <div className="header">
            {/* Render greeting based on user selection */}
            <div className="greeting">
              {action === "User" ? "Hello User" : "Hello Partner"}
            </div>
            <div className="underline"></div>
          </div>
        )}

        {selectionMade && ( // Render sign-up and login options if selection is made
          <div className="container-submit">
            <div
              className={action === "Sign Up" ? "submit gray" : "submit"}
              onClick={handleSignUpClick}
            >
              Sign Up
            </div>
            <div
              className={action === "Login" ? "submit gray" : "submit"}
              onClick={handleLogInClick}
            >
              Log In
            </div>
          </div>
        )}

        {selectionMade && ( // Render inputs if selection is made
          <div className="inputs">
            {action !== "Login" && (
              <div className="input">
                <img src={user} alt="user" />
                <input type="text" className="inputBox" placeholder="Name" />
              </div>
            )}

            <div className="input">
              <img src={mobile} alt="email" />
              <input
                type="number"
                className="inputBox"
                placeholder="Mobile Number"
              />
            </div>

            <div className="input">
              <img src={email} alt="email" />
              <input type="email" className="inputBox" placeholder="Email" />
            </div>

            <div className="input">
              <img src={lock} alt="password" />
              <input
                type="password"
                className="inputBox"
                placeholder="Password"
              />
            </div>

            {driverInputVisible && ( // Render additional inputs for driver
              <div className="input">
                {/* Additional inputs for driver */}
                <input
                  type="text"
                  className="inputBox"
                  placeholder="Driver License"
                />
              </div>
            )}
          </div>
        )}

        {selectionMade &&
          action !== "Sign Up" && ( // Render forgot password link if selection is made and action is not sign up
            <div className="relative flex flex-col flex-wrap justify-center items-center">
              {" "}
              <button className="  min-w-[100px] mt-8 border-2 shadow-lg border-red-500 p-2 rounded-md font-semibold text-gray-900 hover:border-blue-500 hover:border-2 transition-all duration-300 ease-in-out hover:tracking-wider">
                submit
              </button>
              <div className="fogot-password">
                Forgot Password?<span>click here</span>
              </div>
             
            </div>
          )}
      </form>
    </>
  );
};
export default Login;
