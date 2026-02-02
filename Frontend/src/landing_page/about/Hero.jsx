import React from "react";

function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Top Heading */}
      <div className="py-20 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
          We pioneered the discount broking model in India
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      {/* Content Section */}
      <div className="border-t py-16 text-gray-600 text-lg leading-relaxed">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            <p>
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>

            <p>
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>

            <p>
              Over 1+ Crore clients place millions of orders every day through
              our powerful ecosystem of investment platforms, contributing over
              15% of all Indian retail trading volumes.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <p>
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
            </p>

            <p>
              <a
                href=""
                className="text-blue-600 hover:text-blue-700 transition"
              >
                Rainmatter
              </a>
              , our fintech fund and incubator, has invested in several fintech
              startups with the goal of growing the Indian capital markets.
            </p>

            <p>
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our blog or see what the media is saying
              about us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
