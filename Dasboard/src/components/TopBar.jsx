import React from 'react'
import Menu from './Menu'

const TopBar = () => {
  return (
    <div className="w-full h-[64px] flex items-center bg-white border-b border-gray-200 z-10">
      {/* Indices section */}
      <div className="w-[32%] h-full flex items-center justify-around gap-16 border-r border-gray-200 px-4">
        {/* NIFTY */}
        <div className="flex items-center gap-4">
          <p className="text-[11px] font-medium uppercase text-gray-500">
            NIFTY 50
          </p>
          <p className="text-[11px] font-medium text-red-500">100.2</p>
        </div>

        {/* SENSEX */}
        <div className="flex items-center gap-4">
          <p className="text-[11px] font-medium uppercase text-gray-500">
            SENSEX
          </p>
          <p className="text-[11px] font-medium text-red-500">100.2</p>
        </div>
      </div>

      {/* Menu section */}
      <div className="w-[68%] flex items-center justify-end pr-6">
        <Menu />
      </div>
    </div>
  )
}

export default TopBar
