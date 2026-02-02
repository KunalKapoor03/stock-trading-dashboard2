import React from "react";

function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 text-center">
      <img
        src="./public/media/homeHero.png"
        alt="Hero Image"
        className="mx-auto mb-12"
      />

      <h1 className="mt-10 text-4xl font-semibold text-gray-900">
        Invest in everything
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        Online platform to invest in stocks, derivatives, mutual funds, and more
      </p>

      <button
        className="
          mt-10
          px-6
          py-3
          text-lg
          font-medium
          text-white
          bg-blue-600
          rounded-md
          hover:bg-blue-700
          transition
          duration-200
          w-full
          sm:w-auto
        "
      >
        Signup Now
      </button>
    </div>
  );
}

export default Hero;
