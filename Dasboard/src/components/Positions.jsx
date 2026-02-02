import { useEffect, useState } from 'react'
import axios from 'axios'

const Positions = () => {
  const [allPositions, setAllPositions] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3002/allPositions')
      .then((res) => {
        setAllPositions(res.data || [])
      })
      .catch((err) => {
        console.error('Error fetching positions:', err)
      })
  }, [])

  return (
    <div className="max-w-[1100px]">
      {/* Title */}
      <h3 className="text-base font-normal text-gray-700 mb-3">
        Positions ({allPositions.length})
      </h3>

      {/* Table */}
      <div className="border border-gray-200">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="border-b border-gray-200">
              {[
                'Product',
                'Instrument',
                'Qty.',
                'Avg.',
                'LTP',
                'P&L',
                'Net chg.',
                'Day chg.',
              ].map((h, i) => (
                <th
                  key={i}
                  className={`px-3 py-2 font-normal text-gray-400 ${
                    i <= 1 ? 'text-left' : 'text-right'
                  }`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {allPositions.map((stock, index) => {
              // ✅ SAFE numeric values
              const qty = Number(stock.qty) || 0
              const avg = Number(stock.avg) || 0
              const price = Number(stock.price) || 0

              const pnl = (price - avg) * qty

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
                    {stock.product || '-'}
                  </td>

                  <td className="px-3 py-2 text-left text-gray-700">
                    {stock.name || '-'}
                  </td>

                  <td className="px-3 py-2 text-right">{qty}</td>

                  <td className="px-3 py-2 text-right">{avg.toFixed(2)}</td>

                  <td className="px-3 py-2 text-right">{price.toFixed(2)}</td>

                  <td className={`px-3 py-2 text-right ${pnlClass}`}>
                    {pnl.toFixed(2)}
                  </td>

                  <td className={`px-3 py-2 text-right ${pnlClass}`}>
                    {stock.net || '-'}
                  </td>

                  <td className={`px-3 py-2 text-right ${dayClass}`}>
                    {stock.day || '-'}
                  </td>
                </tr>
              )
            })}

            {allPositions.length === 0 && (
              <tr>
                <td colSpan="8" className="text-center py-6 text-gray-400">
                  No positions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Positions
