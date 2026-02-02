import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Funds from './Funds'
import Holdings from './Holdings'
import Orders from './Orders'
import Positions from './Positions'
import Summary from './Summary'
import WatchList from './WatchList'
import { GeneralContextProvider } from './GeneralContext'

const Dashboard = () => {
  return (
    <div className="w-full h-[90vh] flex">
      <GeneralContextProvider>
        {/* Watchlist */}
        <div className="w-[32%] border-r border-gray-200">
          <WatchList />
        </div>

        {/* Main content */}
        <div className="w-[68%] overflow-y-auto px-6 py-6">
          <Routes>
            <Route path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
          </Routes>
        </div>
      </GeneralContextProvider>
    </div>
  )
}

export default Dashboard
