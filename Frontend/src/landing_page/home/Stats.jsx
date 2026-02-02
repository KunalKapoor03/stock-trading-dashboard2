import React from "react";
import { MdArrowForward } from "react-icons/md";

function Stats() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left Content */}
        <div>
          <h1 className="text-3xl font-semibold mb-10">
            Trust with confidence
          </h1>

          <h2 className="text-xl font-medium mb-2">Customer-first always</h2>
          <p className="text-gray-600 mb-6">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>

          <h2 className="text-xl font-medium mb-2">No spam or gimmicks</h2>
          <p className="text-gray-600 mb-6">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h2 className="text-xl font-medium mb-2">The Zerodha universe</h2>
          <p className="text-gray-600 mb-6">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="text-xl font-medium mb-2">Do better with money</h2>
          <p className="text-gray-600">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        {/* Right Image + Links */}
        <div className="text-center md:text-left">
          <img
            src="./public/media/ecosystem.png"
            alt="Ecosystem"
            className="w-[90%] mx-auto md:mx-0 mb-10"
          />

          <div className="flex justify-center md:justify-start gap-10 text-blue-600">
            <a
              href=""
              className="flex items-center gap-1 hover:text-blue-700 transition"
            >
              Explore our products
              <MdArrowForward className="text-lg" />
            </a>

            <a
              href=""
              className="flex items-center gap-1 hover:text-blue-700 transition"
            >
              Try Kite demo
              <MdArrowForward className="text-lg" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <img
          className="w-[70%] mt-10 -mb-5"
          src="./public/media/pressLogos.png"
          alt="PressLogos"
        />
      </div>
    </div>
  );
}

export default Stats;
