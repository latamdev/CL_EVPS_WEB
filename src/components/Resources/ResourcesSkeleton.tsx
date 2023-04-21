import React from "react";

const ResourcesSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 bg-slate-700 h-10 w-96 rounded"></div>

      <div className="flex flex-col lg:flex-row">
        <div className="w-full  lg:mr-10 mt-7">
          {[0, 1, 2, 3, 4].map((el) => {
            return (
              <div key={el} className="flex flex-row ">
                <div className="flex flex-1  lg:mr-10 mt-7">
                  <div className="mt-3 bg-gray-300 bg-slate-700 h-10 w-full  rounded"></div>
                </div>
                <div className="flex flex-1  lg:mr-10 mt-7">
                  <div className="mt-3 bg-gray-300 bg-slate-700 h-10 w-full  rounded"></div>
                </div>
                <div className="flex flex-1  lg:mr-10 mt-7">
                  <div className="mt-3 bg-gray-300 bg-slate-700 h-10 w-full  rounded"></div>
                </div>
                <div className="flex flex-1  lg:mr-10 mt-7">
                  <div className="mt-3 bg-gray-300 bg-slate-700 h-10 w-full  rounded"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResourcesSkeleton;
