import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Orders = () => {
  const [allOrders, setAllOrders] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3002/allOrders')
      .then((res) => {
        setAllOrders(res.data || [])
      })
      .catch((err) => {
        console.error('Error fetching orders:', err)
      })
  }, [])

  // 🔹 Empty state (same feel as Zerodha)
  if (allOrders.length === 0) {
    return (
      <div className="h-[90vh] w-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <p className="mb-6 text-gray-400 text-base font-light">
            You haven&apos;t placed any orders yet
          </p>

          <Link
            to="/"
            className="px-5 py-2 text-white text-sm rounded-sm
                       bg-blue-600 hover:bg-blue-500 transition"
          >
            Get started
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-[1100px]">
      {/* Title */}
      <h3 className="text-base font-normal text-gray-700 mb-3">
        Orders ({allOrders.length})
      </h3>

      {/* Table */}
      <div className="border border-gray-200">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="border-b border-gray-200">
              {['Time', 'Instrument', 'Type', 'Qty.', 'Price', 'Status'].map(
                (h, i) => (
                  <th
                    key={i}
                    className={`px-3 py-2 font-normal text-gray-400 ${
                      i <= 1 ? 'text-left' : 'text-right'
                    }`}
                  >
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody>
            {allOrders.map((order, index) => {
              const typeClass =
                order.mode === 'BUY' ? 'text-green-500' : 'text-orange-500'

              return (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="px-3 py-2 text-left text-gray-600">
                    {order.createdAt
                      ? new Date(order.createdAt).toLocaleTimeString()
                      : '--'}
                  </td>

                  <td className="px-3 py-2 text-left text-gray-700">
                    {order.name}
                  </td>

                  <td className={`px-3 py-2 text-right ${typeClass}`}>
                    {order.mode}
                  </td>

                  <td className="px-3 py-2 text-right">{order.qty}</td>

                  <td className="px-3 py-2 text-right">
                    {(Number(order.price) || 0).toFixed(2)}
                  </td>

                  <td className="px-3 py-2 text-right text-gray-500">
                    COMPLETE
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Orders
