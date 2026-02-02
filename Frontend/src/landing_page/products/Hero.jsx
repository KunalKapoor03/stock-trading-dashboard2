import React from "react";
import { MdArrowForward } from "react-icons/md";

function Hero() {
  return (
    <div className="border-b border-b-gray-200 w-[70%] mx-auto mb-6">
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl font-semibold text-gray-900">Technology</h1>

        <h3 className="mt-4 text-xl text-gray-500">
          Sleek, modern and intuitive trading platforms
        </h3>

        <p className="mt-6">
          Check out our{" "}
          <a
            href=""
            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 transition"
          >
            investment offerings
            <MdArrowForward className="text-lg" />
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
