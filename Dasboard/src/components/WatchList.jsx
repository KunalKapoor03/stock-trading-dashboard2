import React, { useState, useContext } from 'react'
import { Tooltip, Grow } from '@mui/material'
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  BarChartOutlined,
  MoreHoriz,
} from '@mui/icons-material'

import GeneralContext from './GeneralContext'
import { watchlist } from '../data/data'
import { DoughnutChart } from './DoughnutChart'

const WatchList = () => {
  const labels = watchlist.map((s) => s.name)

  const data = {
    labels,
    datasets: [
      {
        label: 'Price',
        data: watchlist.map((s) => s.price),
        backgroundColor: [
          '#f87171',
          '#60a5fa',
          '#facc15',
          '#34d399',
          '#a78bfa',
          '#fb923c',
        ],
      },
    ],
  }

  return (
    <aside className="w-full h-[90vh] border-r border-gray-200 flex flex-col bg-white">
      {/* Search */}
      <div className="px-4 py-3 border-b border-gray-200">
        <input
          type="text"
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
          className="w-full text-sm px-3 py-2 border rounded outline-none focus:border-blue-400"
        />
        <div className="text-xs text-gray-400 text-right mt-1">
          {watchlist.length} / 50
        </div>
      </div>

      {/* Watchlist */}
      <ul className="flex-1 overflow-y-auto">
        {watchlist.map((stock, i) => (
          <WatchListItem key={i} stock={stock} />
        ))}
      </ul>

      {/* Chart */}
      <div className=" flex justify-center mx-auto border-t w-[70%] h-[50%] border-gray-200 p-4">
        <DoughnutChart data={data} />
      </div>
    </aside>
  )
}

export default WatchList

/* ========================= */

const WatchListItem = ({ stock }) => {
  const [hover, setHover] = useState(false)

  return (
    <li
      className="px-4 py-3 border-b border-gray-100 hover:bg-gray-50 relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex items-center justify-between text-sm">
        <span className={stock.isDown ? 'text-red-500' : 'text-green-500'}>
          {stock.name}
        </span>

        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="text-red-500" fontSize="small" />
          ) : (
            <KeyboardArrowUp className="text-green-500" fontSize="small" />
          )}
          <span>{stock.price}</span>
        </div>
      </div>

      {hover && <WatchListActions uid={stock.name} />}
    </li>
  )
}

/* ========================= */

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext)

  return (
    <div className="absolute inset-0 bg-white/90 flex items-center justify-end pr-3 gap-2">
      <Tooltip title="Buy (B)" arrow TransitionComponent={Grow}>
        <button
          onClick={() => generalContext.openBuyWindow(uid)}
          className="px-2 py-1 text-xs bg-blue-500 text-white rounded"
        >
          Buy
        </button>
      </Tooltip>

      <Tooltip title="Sell (S)" arrow TransitionComponent={Grow}>
        <button className="px-2 py-1 text-xs bg-orange-500 text-white rounded">
          Sell
        </button>
      </Tooltip>

      <Tooltip title="Analytics" arrow TransitionComponent={Grow}>
        <button className="p-1 border rounded">
          <BarChartOutlined fontSize="small" />
        </button>
      </Tooltip>

      <Tooltip title="More" arrow TransitionComponent={Grow}>
        <button className="p-1 border rounded">
          <MoreHoriz fontSize="small" />
        </button>
      </Tooltip>
    </div>
  )
}
