import React from "react";

const Button = (props) => {
  return (
    <>
    <div className="relative flex flex-wrap cursor-pointer items-center justify-center w-full">
      <button className=" flex flex-wrap items-center justify-center relative w-full  bg-white border-2 border-rose-500 text-rose-500 text-xl py-2 px-5 font-semibold cursor-pointer rounded-lg mt-3 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 ease-in-out hover:tracking-wider">
        <p className="font-mono">{props.title}</p>
      </button>
      </div>
    </>
  );
};

export default Button;
