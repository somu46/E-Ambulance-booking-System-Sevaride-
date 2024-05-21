// src/components/LoadingSpinner.js
import React from 'react';
import { Spinner } from "@material-tailwind/react";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-28 w-28 border-t-4 border-blue-600"></div>
    </div>
  );
};

export const CustomSpinner=()=> {
  return( 
    <div className="flex items-center justify-center h-screen">
     <Spinner className=" h-16 w-16 text-orange-500" />
     </div>
);
}

export default LoadingSpinner;
