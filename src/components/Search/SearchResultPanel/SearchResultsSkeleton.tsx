import React from "react";

function SearchResultsSkeleton() {
  return (
    <div className=" w-1/2 absolute z-10  top-[4.5rem] pl-[4.6rem] pr-[4.6rem]">
      <div className="bg-gray-100  flex p-3">
        <div className="rounded-md max-w-sm w-full">
          <div className="animate-pulse items-center">
            {[0, 1, 2, 3].map((index) => {
              return (
                <div key={index} className="flex flex-col pb-8">
                  <div className="bg-gray-300 flex-1 space-y-6 py-1 p-b-2">
                    <div className="h-2 bg-slate-700 rounded mb-2"></div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-300 rounded-full bg-slate-700 h-10 w-10"></div>
                    <div className="bg-gray-300 flex-1 space-y-6 py-1">
                      <div className="h-2 bg-slate-700 rounded"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResultsSkeleton;
