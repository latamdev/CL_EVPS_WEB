import React from "react";

function RecommendSkeleton() {
  return (
    <div className="animate-pulse mt-32">
      <div className="bg-gray-300 bg-slate-700 h-10 w-96 rounded"></div>

      <div className="gap-4 grid grid-cols-2 lg:grid lg:grid-cols-4 2xl:grid-cols-5 justify-between mt-10">
        {[0, 1, 2, 3, 4].map((index) => {
          return (
            <div
              key={index}
              className="bg-gray-300 bg-slate-700 flex-col w-full border p-2 shadow-md rounded-xl"
            >
              <div className="mt-3 bg-gray-200 bg-slate-700 h-40 w-full  rounded"></div>
              <div className="mt-3 bg-gray-200 bg-slate-700 h-5 w-full  rounded"></div>
              <div className="mt-3 bg-gray-200 bg-slate-700 h-5 w-full  rounded"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RecommendSkeleton;
