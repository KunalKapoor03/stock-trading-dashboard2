import React from "react";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="py-16 border-b text-center">
        <h1 className="text-3xl font-semibold text-gray-900">Pricing</h1>

        <h3 className="mt-4 text-lg text-gray-500">
          Free equity investments and flat ₹20 intraday and F&amp;O trades
        </h3>
      </div>

      {/* Pricing Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 text-center">
        {/* Card 1 */}
        <div className="space-y-4">
          <img
            src="./public/media/pricingEquity.svg"
            alt="Free equity delivery"
            className="mx-auto h-24"
          />
          <h1 className="text-xl font-semibold">Free equity delivery</h1>
          <p className="text-gray-500">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹0
            brokerage.
          </p>
        </div>

        {/* Card 2 */}
        <div className="space-y-4">
          <img
            src="./public/media/intradayTrades.svg"
            alt="Intraday trades"
            className="mx-auto h-24"
          />
          <h1 className="text-xl font-semibold">Intraday and F&amp;O trades</h1>
          <p className="text-gray-500">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>

        {/* Card 3 */}
        <div className="space-y-4">
          <img
            src="./public/media/pricingEquity.svg"
            alt="Free direct MF"
            className="mx-auto h-24"
          />
          <h1 className="text-xl font-semibold">Free direct MF</h1>
          <p className="text-gray-500">
            All direct mutual fund investments are absolutely free — ₹0
            commissions &amp; DP charges.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
