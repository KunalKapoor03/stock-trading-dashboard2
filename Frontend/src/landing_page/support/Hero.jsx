import React from "react";

function Hero() {
  return (
    <section className="bg-gray-50">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <h4 className="text-lg font-medium text-gray-900">Support Portal</h4>
        <a href="" className="text-blue-600 hover:text-blue-700 transition">
          Track tickets
        </a>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div>
            <h1 className="text-xl font-semibold text-gray-900 mb-4">
              Search for an answer or browse help topics to create a ticket
            </h1>

            <input
              type="text"
              placeholder="Eg. how do I activate F&O"
              className="
                w-full
                border
                border-gray-300
                rounded-md
                px-4
                py-3
                mb-6
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />

            <div className="flex flex-wrap gap-4 text-sm">
              <a href="#" className="text-blue-600 hover:text-blue-700">
                Track account opening
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700">
                Track segment activation
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700">
                Intraday margins
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700">
                Kite user manual
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h1 className="text-xl font-semibold text-gray-900 mb-4">
              Featured
            </h1>

            <ol className="list-decimal list-inside space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Current Takeovers and Delisting - January 2024
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Latest Intraday leverages - MIS &amp; CO
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
