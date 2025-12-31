// Forbidden.jsx
import React from "react";
import Lottie from "lottie-react";
import forbiddenAnimation from "../../assets/forbidden403.json";

const Forbidden = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 text-white relative overflow-hidden bg-gray-900">
      {/* Dark animated gradient overlay */}
      <div
        className="absolute inset-0 -z-10 animate-gradient bg-[length:400%_400%]"
        style={{
          backgroundImage:
            "linear-gradient(270deg, #1f2937, #111827, #1f2937, #111827)",
        }}
      ></div>

      {/* Lottie Animation */}
      <div className="w-72 h-72 mb-6 transform transition-transform duration-700 hover:scale-105">
        <Lottie animationData={forbiddenAnimation} loop={true} />
      </div>

      {/* Title */}
      <h1 className="text-5xl font-extrabold mb-2 text-red-500 drop-shadow-lg">
        403 Forbidden
      </h1>

      {/* Description */}
      <p className="text-center mb-6 text-lg md:text-xl drop-shadow-md text-gray-300">
        Oops! You don’t have permission to access this page.
      </p>

      {/* Button */}
      <button
        className="btn btn-primary btn-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:btn-secondary"
        onClick={() => (window.location.href = "/")}
      >
        Go to Home
      </button>

      {/* Gradient animation */}
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            animation: gradient 15s ease infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Forbidden;
