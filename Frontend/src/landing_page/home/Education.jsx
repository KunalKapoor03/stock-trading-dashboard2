import React from "react";
import { MdArrowForward } from "react-icons/md";

function Education() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src="./public/media/education.svg"
            alt="Education"
            className="w-[70%]"
          />
        </div>

        {/* Right Content */}
        <div>
          <h1 className="mb-4 text-3xl font-semibold">
            Free and open market education
          </h1>

          <p className="text-gray-600 mb-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a
            href=""
            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 transition"
          >
            Varsity
            <MdArrowForward className="text-lg" />
          </a>

          <p className="mt-10 text-gray-600 mb-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <a
            href=""
            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 transition"
          >
            TradingQ&amp;A
            <MdArrowForward className="text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
