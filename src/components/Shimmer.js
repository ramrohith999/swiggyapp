import React from "react";

const Shimmer = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-6 py-10">
      {Array(12)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-64 h-64 bg-gray-200 rounded-lg animate-pulse shadow-md"
          >
            <div className="w-full h-40 bg-gray-300 rounded-t-lg"></div>
            <div className="p-3 space-y-2">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2"></div>
              <div className="h-3 bg-gray-300 rounded w-2/3"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;