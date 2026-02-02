import { useState, useEffect } from 'react'
import axios from 'axios'
import { VerticalGraph } from './VerticalGraph'
const API = import.meta.env.VITE_API_URL

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get(`${API}/allHoldings`)
      .then((res) => {
        setAllHoldings(res.data)
      })
      .catch(() => {
        setError('Failed to load holdings')
      })
  }, [])

  const labels = allHoldings.map((stock) => stock.name)

  const data = {
    labels,
    datasets: [
      {
        label: 'Stock Price',
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: 'rgba(65,132,243,0.6)',
      },
    ],
  }

  return (
    <div className="max-w-[1100px]">
      {/* Title */}
      <h3 className="text-base font-normal text-gray-700 mb-3">
        Holdings ({allHoldings.length})
      </h3>

      {error && <p className="text-sm text-red-500 mb-3">{error}</p>}

      {/* Table */}
      <div className="border border-gray-200">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="border-b border-gray-200">
              {[
                'Instrument',
                'Qty.',
                'Avg. cost',
                'LTP',
                'Cur. val',
                'P&L',
                'Net chg.',
                'Day chg.',
              ].map((h, i) => (
                <th
                  key={i}
                  className={`px-3 py-2 font-normal text-gray-400 ${
                    i === 0 ? 'text-left' : 'text-right'
                  }`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty
              const pnl = curValue - stock.avg * stock.qty
              const pnlClass = pnl >= 0 ? 'text-green-500' : 'text-orange-500'
              const dayClass = stock.isLoss
                ? 'text-orange-500'
                : 'text-green-500'

              return (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="px-3 py-2 text-left text-gray-700">
                    {stock.name}
                  </td>
                  <td className="px-3 py-2 text-right">{stock.qty}</td>
                  <td className="px-3 py-2 text-right">
                    {stock.avg.toFixed(2)}
                  </td>
                  <td className="px-3 py-2 text-right">
                    {stock.price.toFixed(2)}
                  </td>
                  <td className="px-3 py-2 text-right">
                    {curValue.toFixed(2)}
                  </td>
                  <td className={`px-3 py-2 text-right ${pnlClass}`}>
                    {pnl.toFixed(2)}
                  </td>
                  <td className={`px-3 py-2 text-right ${pnlClass}`}>
                    {stock.net}
                  </td>
                  <td className={`px-3 py-2 text-right ${dayClass}`}>
                    {stock.day}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="flex justify-between mt-8">
        <div>
          <h5 className="text-xl font-light text-gray-700">
            29,875.<span className="text-sm">55</span>
          </h5>
          <p className="text-xs text-gray-400 mt-1">Total investment</p>
        </div>

        <div>
          <h5 className="text-xl font-light text-gray-700">
            31,428.<span className="text-sm">95</span>
          </h5>
          <p className="text-xs text-gray-400 mt-1">Current value</p>
        </div>

        <div>
          <h5 className="text-xl font-light text-green-500">
            1,553.40 (+5.20%)
          </h5>
          <p className="text-xs text-gray-400 mt-1">P&amp;L</p>
        </div>
      </div>

      {/* Graph */}
      <div className="mt-10 max-w-[900px]">
        <VerticalGraph data={data} />
      </div>
    </div>
  )
}

export default Holdings
