import React from "react";

function Awards() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="./public/media/largestBroker.svg"
            alt="Largest Broker"
            className="max-w-full"
          />
        </div>

        {/* Right Content */}
        <div className="mt-10 md:mt-0">
          <h1 className="text-3xl font-semibold text-gray-900">
            Largest stock broker in India
          </h1>

          <p className="mt-6 mb-10 text-gray-600 text-lg">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            <ul className="space-y-3 list-disc list-inside text-gray-700">
              <li>Futures and Options</li>
              <li>Commodity derivatives</li>
              <li>Currency derivatives</li>
            </ul>

            <ul className="space-y-3 list-disc list-inside text-gray-700">
              <li>Stocks & IPOs</li>
              <li>Direct mutual funds</li>
              <li>Bonds and Govt. Securities</li>
            </ul>
          </div>

          <img
            src="./public/media/pressLogos.png"
            alt="Press Logos"
            className="w-[90%]"
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
