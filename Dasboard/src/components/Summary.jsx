import React from "react";

const Summary = () => {
  return (
    <div className="space-y-10">
      {/* Greeting */}
      <div>
        <h6 className="text-2xl font-normal text-gray-700 mb-5">Hi, User!</h6>
        <hr className="h-px bg-gray-300 border-0" />
      </div>

      {/* Equity Section */}
      <div className="pb-4">
        <div className="flex items-center mb-4">
          <p className="text-lg font-light text-gray-700">Equity</p>
        </div>

        <div className="flex items-center justify-between w-1/2">
          {/* Left */}
          <div>
            <h3 className="text-4xl font-light text-gray-700">3.74k</h3>
            <p className="text-xs text-gray-400">Margin available</p>
          </div>

          {/* Divider */}
          <div className="h-16 w-px bg-gray-200" />

          {/* Right */}
          <div className="space-y-3">
            <p className="text-xs text-gray-400 whitespace-nowrap">
              Margins used <span className="ml-2 text-sm text-gray-600">0</span>
            </p>
            <p className="text-xs text-gray-400 whitespace-nowrap">
              Opening balance{" "}
              <span className="ml-2 text-sm text-gray-600">3.74k</span>
            </p>
          </div>
        </div>

        <hr className="h-px bg-gray-300 border-0 mt-6" />
      </div>

      {/* Holdings Section */}
      <div className="pb-4">
        <div className="flex items-center mb-4">
          <p className="text-lg font-light text-gray-700">Holdings (13)</p>
        </div>

        <div className="flex items-center justify-between w-1/2">
          {/* Left */}
          <div>
            <h3 className="text-4xl font-light text-green-500">
              1.55k{" "}
              <small className="text-sm font-light text-green-500">
                +5.20%
              </small>
            </h3>
            <p className="text-xs text-gray-400">P&amp;L</p>
          </div>

          {/* Divider */}
          <div className="h-16 w-px bg-gray-200" />

          {/* Right */}
          <div className="space-y-3">
            <p className="text-xs text-gray-400 whitespace-nowrap">
              Current value{" "}
              <span className="ml-2 text-sm text-gray-600">31.43k</span>
            </p>
            <p className="text-xs text-gray-400 whitespace-nowrap">
              Investment{" "}
              <span className="ml-2 text-sm text-gray-600">29.88k</span>
            </p>
          </div>
        </div>

        <hr className="h-px bg-gray-300 border-0 mt-6" />
      </div>
    </div>
  );
};

export default Summary;
