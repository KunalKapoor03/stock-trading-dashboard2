import React, { useState, useContext } from "react";
import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import GeneralContext from "./GeneralContext";
import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnoutChart";

const labels = watchlist.map((s) => s.name);

const WatchList = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((s) => s.price),
        backgroundColor: [
          "rgba(255,99,132,0.5)",
          "rgba(54,162,235,0.5)",
          "rgba(255,206,86,0.5)",
          "rgba(75,192,192,0.5)",
          "rgba(153,102,255,0.5)",
          "rgba(255,159,64,0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-[32%] h-full shadow-sm overflow-y-auto bg-white relative">
      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
          className="w-full px-5 py-4 text-sm border-b border-gray-200 focus:outline-none"
        />
        <span className="absolute right-5 top-1/2 -translate-y-1/2 text-sm text-gray-400">
          {watchlist.length} / 50
        </span>
      </div>

      {/* List */}
      <ul className="pb-32">
        {watchlist.map((stock, i) => (
          <WatchListItem key={i} stock={stock} />
        ))}
      </ul>

      {/* Chart */}
      <div className="absolute bottom-0 w-full bg-white border-t">
        <DoughnutChart data={data} />
      </div>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <li
      className="relative border-b border-gray-200 px-4 py-3 hover:bg-gray-100 cursor-move"
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="flex justify-between items-center text-xs font-light">
        <span className={stock.isDown ? "text-red-500" : "text-green-500"}>
          {stock.name}
        </span>

        <div className="flex items-center gap-2">
          <span className="text-gray-400">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="text-red-500 scale-75" />
          ) : (
            <KeyboardArrowUp className="text-green-500 scale-75" />
          )}
          <span className="text-gray-600">{stock.price}</span>
        </div>
      </div>

      {showActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  return (
    <div className="absolute inset-0 flex justify-end items-center pr-3 bg-white/80">
      <div className="flex gap-2">
        <Tooltip title="Buy (B)" arrow TransitionComponent={Grow}>
          <button
            onClick={() => generalContext.openBuyWindow(uid)}
            className="w-10 h-8 text-xs bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Buy
          </button>
        </Tooltip>

        <Tooltip title="Sell (S)" arrow TransitionComponent={Grow}>
          <button className="w-10 h-8 text-xs bg-orange-500 text-white rounded hover:bg-orange-600">
            Sell
          </button>
        </Tooltip>

        <Tooltip title="Analytics (A)" arrow TransitionComponent={Grow}>
          <button className="w-10 h-8 border rounded hover:bg-gray-200">
            <BarChartOutlined className="scale-75 text-gray-600" />
          </button>
        </Tooltip>

        <Tooltip title="More" arrow TransitionComponent={Grow}>
          <button className="w-10 h-8 border rounded hover:bg-gray-200">
            <MoreHoriz className="scale-75 text-gray-600" />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};
