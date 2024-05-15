import React from "react";

const Button = (props) => {
  return (
    <>
      <button className=" min-w-[100%] bg-white border-2 border-rose-500 text-rose-500 text-xl py-2 px-5 font-semibold cursor-pointer rounded-lg mt-3 w-[70%] hover:border-blue-400 hover:text-blue-400 transition-all duration-300 ease-in-out hover:tracking-wider">
        <p className="font-mono">{props.title.toUpperCase()}</p>
      </button>
    </>
  );
};

export default Button;
