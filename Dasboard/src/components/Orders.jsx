import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="h-[90vh] w-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <p className="mb-6 text-gray-400 text-base font-light">
          You haven&apos;t placed any orders today
        </p>

        <Link
          to="/"
          className="px-5 py-2 text-white text-sm rounded-sm bg-blue-600 hover:bg-blue-500 transition"
        >
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;
