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
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar / Watchlist */}
      <GeneralContextProvider>
        <div className="w-80 border-r bg-white overflow-y-auto">
          <WatchList />
        </div>
      </GeneralContextProvider>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  )
}

export default Dashboard
