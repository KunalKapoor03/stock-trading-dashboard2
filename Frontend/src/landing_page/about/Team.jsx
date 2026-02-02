import React from "react";

function Team() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Section Title */}
      <div className="pt-16 pb-8 border-t">
        <h1 className="text-center text-3xl font-semibold">People</h1>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-600 text-lg leading-relaxed pb-20">
        {/* Left: Image + Name */}
        <div className="text-center">
          <img
            src="./public/media/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="mx-auto w-1/2 rounded-full"
          />

          <h4 className="mt-8 text-xl font-medium text-gray-900">
            Nithin Kamath
          </h4>

          <h6 className="text-gray-500">Founder, CEO</h6>
        </div>

        {/* Right: Description */}
        <div className="space-y-6">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700">
              Homepage
            </a>{" "}
            /{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700">
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
