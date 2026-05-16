import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-screen bg-primary flex justify-center items-center fixed top-0 left-0 z-[100]">
      <div className="flex flex-col items-center justify-center">
        <img
          src="/images/rk-logo.avif"
          alt="Loading"
          className="w-32 h-32 animate-pulse"
        />
        <p className="text-secondary mt-4 font-poppins font-semibold text-xl">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;
