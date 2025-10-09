import React from "react";

function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-teal-50 backdrop-blur-3xl px-3 sm:px-6">
      <div className="bg-white/60 backdrop-blur-2xl rounded-2xl p-4 sm:p-6 md:p-8 text-center shadow-md border border-gray-200 max-w-4xl w-full">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-400 drop-shadow-sm tracking-tight">
          FEBE
        </h1>

        <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 mt-3 leading-snug tracking-tight">
          <span className="font-semibold text-gray-900">Feel Everything,</span>{" "}
          <span className="text-teal-600">Back Everyone</span>
        </p>

        <div className="flex justify-center gap-1 mt-6">
          <button className="bg-teal-600 text-white border border-teal-600 px-6 sm:px-8 py-2 sm:py-2.5 rounded-l-full font-semibold tracking-tight shadow-sm hover:bg-teal-700 hover:shadow-md transition-all duration-300">
            FE
          </button>
          <button className="border border-teal-600 text-teal-600 px-6 sm:px-8 py-2 sm:py-2.5 rounded-r-full font-semibold tracking-tight hover:bg-teal-50 hover:shadow-sm transition-all duration-300">
            BE
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
