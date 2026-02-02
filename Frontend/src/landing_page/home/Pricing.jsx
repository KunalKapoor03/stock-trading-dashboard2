import React from "react";
import { MdArrowForward } from "react-icons/md";

function Pricing() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        {/* Left Content */}
        <div className="md:col-span-4">
          <h1 className="mb-4 text-3xl font-semibold">Unbeatable pricing</h1>

          <p className="text-gray-600 mb-6">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <a
            href=""
            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 transition"
          >
            See Pricing
            <MdArrowForward className="text-lg" />
          </a>
        </div>

        {/* Spacer (Bootstrap col-2 equivalent) */}
        <div className="hidden md:block md:col-span-2" />

        {/* Pricing Boxes */}
        <div className="md:col-span-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 text-center border rounded-md overflow-hidden">
            <div className="p-6 border-b sm:border-b-0 sm:border-r">
              <h1 className="mb-3 text-3xl font-semibold">₹0</h1>
              <p className="text-gray-600">
                Free equity delivery and <br />
                direct mutual funds
              </p>
            </div>

            <div className="p-6">
              <h1 className="mb-3 text-3xl font-semibold">₹20</h1>
              <p className="text-gray-600">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
