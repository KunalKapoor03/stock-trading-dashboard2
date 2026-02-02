import React from "react";

function Brokerage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 border-t">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-center md:text-left">
        {/* Brokerage Calculator */}
        <div className="md:col-span-8">
          <a
            href=""
            className="inline-block mb-6 text-blue-600 hover:text-blue-700 transition"
          >
            <h3 className="text-lg font-medium">Brokerage calculator</h3>
          </a>

          <ul className="list-disc list-inside text-gray-500 text-sm leading-8 text-left">
            <li>
              Call &amp; Trade and RMS auto-squareoff: Additional charges of ₹50
              + GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>

        {/* Charges Link */}
        <div className="md:col-span-4 flex items-start justify-center md:justify-end">
          <a href="" className="text-blue-600 hover:text-blue-700 transition">
            <h3 className="text-lg font-medium">List of charges</h3>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Brokerage;
