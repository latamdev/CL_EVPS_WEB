import React from "react";

function ResourceDetailSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 bg-slate-700 h-10 w-96 rounded"></div>

      <div className="flex justify-end">
        <div className="w-fit  mt-10">
          <div className="bg-gray-300 bg-slate-700 h-80 w-80"></div>
        </div>

        <div className="w-full ml-10 mr-10 mt-7">
          {[0, 1, 2, 3, 4].map((el) => {
            return (
              <div
                key={el}
                className="mt-3 bg-gray-300 bg-slate-700 h-10 w-full  rounded"
              ></div>
            );
          })}
          <div className="mt-3 bg-gray-300 bg-slate-700 h-14 w-1/2  rounded mx-auto"></div>
        </div>
      </div>
    </div>
  );
}

export default ResourceDetailSkeleton;
