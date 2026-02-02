import React from "react";
import { MdArrowForward } from "react-icons/md";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Left: Product Image */}
        <div className="flex justify-center md:justify-start">
          <img src={imageURL} alt={productName} className="max-w-full" />
        </div>

        {/* Right: Content */}
        <div>
          <h1 className="text-3xl font-semibold text-gray-900 mb-6">
            {productName}
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
            {productDesription}
          </p>

          {/* Action Links */}
          <div className="flex items-center gap-10 mb-10">
            <a
              href={tryDemo}
              className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium transition"
            >
              Try demo
              <MdArrowForward />
            </a>

            <a
              href={learnMore}
              className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium transition"
            >
              Learn more
              <MdArrowForward />
            </a>
          </div>

          {/* Store Badges */}
          <div className="flex items-center gap-6">
            <a href={googlePlay}>
              <img
                src="./public/media/googlePlayBadge.svg"
                alt="Get it on Google Play"
                className="h-12"
              />
            </a>

            <a href={appStore}>
              <img
                src="./public/media/appstoreBadge.svg"
                alt="Download on the App Store"
                className="h-12"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeftSection;
