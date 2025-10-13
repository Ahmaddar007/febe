import React from "react";

function HeroSection() {
  return (
    <section className="bg-[url(/herobg.jpg)] min-h-screen flex items-center justify-start bg-gradient-to-br from-teal-50 via-white to-gray-100 backdrop-blur-3xl px-4 sm:px-8 pt-24 sm:pt-28">
      <div className="bg-white/60 backdrop-blur-2xl rounded-2xl p-6 sm:p-8 md:p-10 text-center shadow-md border border-gray-200 max-w-2xl w-full">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-500 to-teal-400 drop-shadow-sm tracking-tight">
          FEBE
        </h1>

        <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 mt-4 leading-snug tracking-tight">
          <span className="font-semibold text-gray-900">Fast Ever,</span>{" "}
          <span className="text-teal-600">Best Ever</span>
        </p>

        <div className="flex justify-center gap-2 mt-8">
          <button className="bg-green-600 text-white border border-teal-600 px-7 sm:px-9 py-2.5 sm:py-3 rounded-l-full font-semibold tracking-tight shadow-sm hover:bg-green-800 hover:shadow-md transition-all duration-300">
            FE
          </button>
          <button className="border border-green-600 text-teal-600 px-7 sm:px-9 py-2.5 sm:py-3 rounded-r-full font-semibold tracking-tight hover:bg-green-50 hover:shadow-sm transition-all duration-300">
            BE
          </button>
        </div>

        <div className="mt-10 text-gray-500 text-sm sm:text-base">
          <p>Innovating connections, empowering creativity.</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
