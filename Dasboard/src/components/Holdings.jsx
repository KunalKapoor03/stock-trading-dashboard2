import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings").then((res) => {
      setAllHoldings(res.data);
    });
  }, []);

  const labels = allHoldings.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="space-y-10">
      {/* Title */}
      <h3 className="text-xl font-light text-gray-700">
        Holdings ({allHoldings.length})
      </h3>

      {/* Table */}
      <div className="border border-gray-200">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-y border-gray-200">
              {[
                "Instrument",
                "Qty.",
                "Avg. cost",
                "LTP",
                "Cur. val",
                "P&L",
                "Net chg.",
                "Day chg.",
              ].map((h, i) => (
                <th
                  key={i}
                  className={`px-3 py-4 text-xs font-light text-gray-400 ${
                    i === 0 ? "text-left" : "text-right"
                  }`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => {
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
                  <td className="px-3 py-3 text-left">{stock.name}</td>
                  <td className="px-3 py-3 text-right">{stock.qty}</td>
                  <td className="px-3 py-3 text-right">
                    {stock.avg.toFixed(2)}
                  </td>
                  <td className="px-3 py-3 text-right">
                    {stock.price.toFixed(2)}
                  </td>
                  <td className="px-3 py-3 text-right">
                    {curValue.toFixed(2)}
                  </td>
                  <td className={`px-3 py-3 text-right ${profitClass}`}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={`px-3 py-3 text-right ${profitClass}`}>
                    {stock.net}
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

      {/* Summary Row */}
      <div className="flex justify-between items-center">
        <div>
          <h5 className="text-2xl font-light text-gray-700">
            29,875.<span className="text-sm">55</span>
          </h5>
          <p className="text-xs text-gray-400 mt-1">Total investment</p>
        </div>

        <div>
          <h5 className="text-2xl font-light text-gray-700">
            31,428.<span className="text-sm">95</span>
          </h5>
          <p className="text-xs text-gray-400 mt-1">Current value</p>
        </div>

        <div>
          <h5 className="text-2xl font-light text-green-500">
            1,553.40 (+5.20%)
          </h5>
          <p className="text-xs text-gray-400 mt-1">P&amp;L</p>
        </div>
      </div>

      {/* Graph */}
      <VerticalGraph data={data} />
    </div>
  );
};

export default Holdings;
