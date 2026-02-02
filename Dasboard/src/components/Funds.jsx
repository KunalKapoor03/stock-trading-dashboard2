import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <div className="space-y-10">
      {/* Top actions (funds) */}
      <div className="flex items-center justify-end gap-2">
        <p className="text-xs text-gray-400 mr-2">
          Instant, zero-cost fund transfers with UPI
        </p>

        <Link
          to="#"
          className="px-5 py-2 text-white text-sm rounded-sm bg-green-500 hover:bg-green-400 transition"
        >
          Add funds
        </Link>

        <Link
          to="#"
          className="px-5 py-2 text-white text-sm rounded-sm bg-blue-500 hover:bg-blue-400 transition"
        >
          Withdraw
        </Link>
      </div>

      {/* Main row */}
      <div className="flex flex-col lg:flex-row justify-between gap-12">
        {/* Equity column */}
        <div className="w-full lg:w-[48%]">
          <div className="flex items-center mb-4">
            <p className="text-lg font-light text-gray-700">Equity</p>
          </div>

          <div className="border border-gray-300 px-10 py-6 text-sm">
            {/* Data rows */}
            {[
              ["Available margin", "4,043.10", "text-blue-500 text-2xl"],
              ["Used margin", "3,757.30", "text-2xl"],
              ["Available cash", "4,043.10", "text-2xl"],
            ].map(([label, value, style], i) => (
              <div key={i} className="flex justify-between items-center mb-6">
                <p className="text-gray-400">{label}</p>
                <p className={`font-light text-gray-800 ${style}`}>{value}</p>
              </div>
            ))}

            <hr className="my-6 bg-gray-300 h-px border-0" />

            {[
              ["Opening balance", "4,043.10"],
              ["Previous balance", "3,736.40"],
              ["Payin", "4,064.00"],
              ["SPAN", "0.00"],
              ["Delivery margin", "0.00"],
              ["Exposure", "0.00"],
              ["Options premium", "0.00"],
            ].map(([label, value], i) => (
              <div key={i} className="flex justify-between items-center mb-4">
                <p className="text-gray-400">{label}</p>
                <p>{value}</p>
              </div>
            ))}

            <hr className="my-6 bg-gray-300 h-px border-0" />

            {[
              ["Collateral (Liquid funds)", "0.00"],
              ["Collateral (Equity)", "0.00"],
              ["Total collateral", "0.00"],
            ].map(([label, value], i) => (
              <div key={i} className="flex justify-between items-center mb-4">
                <p className="text-gray-400">{label}</p>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Commodity column */}
        <div className="w-full lg:w-[48%] flex items-center justify-center">
          <div className="text-center px-10">
            <p className="text-gray-300 mb-10">
              You don&apos;t have a commodity account
            </p>

            <Link
              to="#"
              className="px-5 py-2 text-white text-sm rounded-sm bg-blue-500 hover:bg-blue-400 transition"
            >
              Open account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;
