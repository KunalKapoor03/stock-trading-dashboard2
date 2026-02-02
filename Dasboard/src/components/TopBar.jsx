import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="w-full h-[10vh] flex items-center shadow-sm bg-white z-10">
      {/* Indices */}
      <div className="w-[32%] h-full px-5 flex items-center justify-around border-r border-gray-200">
        {/* NIFTY */}
        <div className="flex items-center gap-2">
          <p className="text-xs font-medium uppercase text-gray-600 whitespace-nowrap">
            NIFTY 50
          </p>
          <p className="text-xs font-medium text-red-500">100.2</p>
          <p className="text-xs font-normal text-gray-400"></p>
        </div>

        {/* SENSEX */}
        <div className="flex items-center gap-2">
          <p className="text-xs font-medium uppercase text-gray-600 whitespace-nowrap">
            SENSEX
          </p>
          <p className="text-xs font-medium text-red-500">100.2</p>
          <p className="text-xs font-normal text-gray-400"></p>
        </div>
      </div>

      {/* Menu */}
      <Menu />
    </div>
  );
};

export default TopBar;
