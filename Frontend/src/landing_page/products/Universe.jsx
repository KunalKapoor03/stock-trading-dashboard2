import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-center">
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-gray-900 mb-4">
        The Zerodha Universe
      </h1>

      <p className="text-lg text-gray-600 mb-12">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>

      {/* Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 mb-16">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <img
              src="./public/media/smallcaseLogo.png"
              alt="Partner platform"
              className="h-12 object-contain"
            />
            <p className="text-sm text-gray-500">
              Thematic investment platform
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <Link
        to="/signup"
        className="
          px-6
          py-3
          text-lg
          font-medium
          text-white
          bg-blue-600
          rounded-md
          hover:bg-blue-700
          transition
          w-full
          sm:w-auto
        "
      >
        Signup Now
      </Link>
    </section>
  );
}

export default Universe;
