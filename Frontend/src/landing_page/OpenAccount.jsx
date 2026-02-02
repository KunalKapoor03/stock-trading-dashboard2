import React from "react";
import { useNavigate } from "react-router-dom";

function OpenAccount() {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 text-center">
      <h1 className="mt-6 text-3xl font-semibold text-gray-900">
        Open a Zerodha account
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
        F&amp;O trades.
      </p>

      <button
        onClick={() => navigate("/signup")}
        className="
          mt-10
          px-6
          py-3
          text-lg
          font-medium
          text-white
          bg-blue-600
          rounded-md
          hover:bg-blue-700
          transition
          duration-200
          w-full
          sm:w-auto
        "
      >
        Sign up Now
      </button>
    </div>
  );
}

export default OpenAccount;
