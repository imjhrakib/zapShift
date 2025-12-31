// Loading.jsx
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      {/* DaisyUI spinner */}
      <div className="radial-progress animate-spin border-t-4 border-blue-500 w-16 h-16 mb-4"></div>
      <p className="text-lg">Loading...</p>
    </div>
  );
};

export default Loading;
