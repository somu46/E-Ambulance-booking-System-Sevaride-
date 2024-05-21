// src/components/LoadingSpinner.js
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-28 w-28 border-t-4 border-blue-600"></div>
    </div>
  );
};

export default LoadingSpinner;
