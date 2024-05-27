import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
 

  const handleHistory=()=>{
    window.screenTop(0,0);
  }

  return (
    <footer className="footer overflow-x-hidden min-w-[100%]">
      <div class=" relative flex flex-wrap flex-row justify-evenly min-w-full min-h-10 p-4 bg-white mx-1 mt-3 element ">
        <div className="relative flex flex-wrap flex-row justify-evenly m-5">
          <div className=" relative flex flex-wrap flex-col justify-center text-left max-w-[25%] h-autotext-black font-semibold m-3 p-3 min-h-9">
            <Link
              href="/"
              className="text-3xl font-bold m-3 text-left hover:text-pink-700 hover:scale-110 hover:border-2 transition-all duration-300 ease-in-out hover:tracking-wider "
            >
              <p className="seva">Seva</p><p className="ride">Ride</p>
            </Link>
            <p className="text-sm ">
              The driver showed concern by waiting after the drop, to make sure
              the patient's home oxygen concentrator was working properly. 
            </p>
          </div>
          <div className=" relative flex flex-wrap flex-col  max-w-[25%] h-auto text-black font-semibold m-3 p-4 min-h-9">
            <Link
              to="/Services"
              className="text-xl text-center font-bold m-3 border-b-2 border-red-600 hover:text-red-600"
            >
              <p>Training</p>
            </Link>
            <Link to="/Services" className="text-sm items-start text-left m-1  hover:text-red-600 ">
              Driver Training
            </Link>
            <a href="###" className="text-sm items-start text-left m-1  hover:text-red-600 ">
              Paramedical Training Institute
            </a>
          </div>
          <div className=" relative flex flex-wrap flex-col  max-w-[25%] h-auto text-black font-semibold m-3 p-4 min-h-9">
            <Link
              href="/"
              className="text-xl font-bold m-3  border-b-2 border-red-600  hover:text-red-600"
            >
              <p>SERVICES</p>
            </Link>
            <Link to="/Contact" onClick={handleHistory} className="text-sm items-start text-left m-1   hover:text-red-600 ">
              Contact Us
            </Link>
            <Link href="###" className="text-sm items-start text-left m-1   hover:text-red-600 ">
              Payment Methods
            </Link>
            <Link to="/Services" className="text-sm  items-start text-left m-1  hover:text-red-600 ">
              Delivary
            </Link>
            <a href="###" className="text-sm items-start text-left m-1  hover:text-red-600 ">
              Return & Exchanges
            </a>
          </div>
          <div className=" relative flex flex-wrap flex-col  max-w-[25%] h-auto text-black font-semibold m-3 p-4 min-h-9">
            <p
              href="/"
              className="text-xl font-bold m-3 border-b-2 border-red-600 max-w-[120px]  hover:text-red-600 "
            >
              NEWSLETTER
            </p>
            <p className="text-sm items-start text-left m-1 ">
              Be the first to know about new arrivals, look books, sales &
              promos!
            </p>
            <div className="relative flex  flex-row m-3">
              <input type="email" name="Email" id="" className=" border-gray-500 rounded-xl w-full md:w-64 lg:w-75 xl:w-120 border px-4 py-2" />
              <button
                type="submit"
               className=" bg-sky-500 rounded-md ml-3  p-2 border shadow-md cursor-pointer hover:scale-105 transition duration-300 ease-in-out "
              >
                <p className=" text-white">
                  Submit
                </p>
              </button>
            </div>
          </div>
        </div>
        
        <div className="relative flex flex-wrap flex-row justify-evenly min-w-screen m-3 p-1 border-t-2 border-[#292929] min-w-[75%]">
          <p className="text-black font-semibold">
            Copyright © 2024 All rights reserved | This Awesome site is made
            with SASSS  Group
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
