import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import GeneralContext from './GeneralContext'

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1)
  const [stockPrice, setStockPrice] = useState(0.0)

  const generalContext = useContext(GeneralContext)

  const handleBuyClick = () => {
    axios.post('http://localhost:3002/newOrder', {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: 'BUY',
    })

    generalContext.closeBuyWindow()
  }

  const handleCancelClick = () => {
    generalContext.closeBuyWindow()
  }

  return (
    <div
      draggable
      className="absolute top-120 left-[35%] w-[40%] h-[10%]
                 bg-gray-100 border border-gray-200 rounded
                 cursor-move z-100 flex flex-col"
    >
      <div className="bg-gray-100 z-100">
        {/* Body */}
        <div className=" px-6 py-4 flex-1">
          {/* Inputs */}
          <div className="flex justify-between mt-4 mb-4">
            {/* Qty */}
            <fieldset className="border border-gray-300 max-w-120px">
              <legend className="ml-2 px-1 text-sm text-gray-700">Qty.</legend>
              <input
                type="number"
                value={stockQuantity}
                onChange={(e) => setStockQuantity(e.target.value)}
                className="w-full bg-white px-3 py-2 text-lg outline-none"
              />
            </fieldset>

            {/* Price */}
            <fieldset className="border border-gray-300 max-w-120px">
              <legend className="ml-2 px-1 text-sm text-gray-400">Price</legend>
              <input
                type="number"
                step="0.05"
                value={stockPrice}
                onChange={(e) => setStockPrice(e.target.value)}
                className="w-full bg-white px-3 py-2 text-lg outline-none"
              />
            </fieldset>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-4 relative top-[10%]">
          <span className="text-xs text-gray-700">Margin required ₹140.65</span>

          <div className="flex gap-2">
            <button
              onClick={handleBuyClick}
              className="px-5 py-2 text-white bg-blue-500 rounded
                       hover:bg-blue-400 text-sm"
            >
              Buy
            </button>

            <button
              onClick={handleCancelClick}
              className="px-5 py-2 bg-gray-300 text-gray-600 rounded
                       hover:bg-gray-500 hover:text-white text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyActionWindow
