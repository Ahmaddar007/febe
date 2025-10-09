import React from "react";

function HeroSection() {
  return (
    <div className="h-screen flex items-center justify-start bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="tracking-tight text-6xl md:text-7xl lg:text-9xl font-bold text-teal-600">
          FEBE
        </h1>
        <p className="tracking-tight text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mt-3">
          Feel Everything, Back Everyone
        </p>
        <div className="flex gap-8 mt-5">
          <span className="border-2 px-8 py-2 rounded-full tracking-tighter font-semibold cursor-pointer">
            Get plus+
          </span>
          <span className="border-2 px-8 py-2 rounded-full tracking-tighter font-semibold cursor-pointer">
            Dive In
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
