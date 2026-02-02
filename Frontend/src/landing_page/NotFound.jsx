import React from "react";

function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="mt-5 text-4xl font-semibold text-gray-900">
          404 Not Found
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
