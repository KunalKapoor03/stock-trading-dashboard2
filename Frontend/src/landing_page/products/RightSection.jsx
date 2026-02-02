import React from "react";
import { MdArrowForward } from "react-icons/md";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Left: Content */}
        <div>
          <h1 className="text-3xl font-semibold text-gray-900 mb-6">
            {productName}
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
            {productDesription}
          </p>

          <a
            href={learnMore}
            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium transition"
          >
            Learn more
            <MdArrowForward />
          </a>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center md:justify-end">
          <img src={imageURL} alt={productName} className="max-w-full" />
        </div>
      </div>
    </section>
  );
}

export default RightSection;
