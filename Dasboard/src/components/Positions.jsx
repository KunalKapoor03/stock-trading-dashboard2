import React from "react";
import { positions } from "../data/data";

const Positions = () => {
  return (
    <div className="space-y-8">
      {/* Title */}
      <h3 className="text-xl font-light text-gray-700">
        Positions ({positions.length})
      </h3>

      {/* Table */}
      <div className="border border-gray-200">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-y border-gray-200">
              {[
                "Product",
                "Instrument",
                "Qty.",
                "Avg.",
                "LTP",
                "P&L",
                "Chg.",
              ].map((heading, index) => (
                <th
                  key={index}
                  className={`px-3 py-4 text-xs font-light text-gray-400 ${
                    index < 2 ? "text-left" : "text-right"
                  }`}
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {positions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0;
              const profitClass = isProfit
                ? "text-green-500"
                : "text-orange-500";
              const dayClass = stock.isLoss
                ? "text-orange-500"
                : "text-green-500";

              return (
                <tr
                  key={index}
                  className="border-y border-gray-100 text-sm text-gray-700"
                >
                  <td className="px-3 py-3 text-left">{stock.product}</td>
                  <td className="px-3 py-3 text-left">{stock.name}</td>
                  <td className="px-3 py-3 text-right">{stock.qty}</td>
                  <td className="px-3 py-3 text-right">
                    {stock.avg.toFixed(2)}
                  </td>
                  <td className="px-3 py-3 text-right">
                    {stock.price.toFixed(2)}
                  </td>
                  <td className={`px-3 py-3 text-right ${profitClass}`}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={`px-3 py-3 text-right ${dayClass}`}>
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Positions;
