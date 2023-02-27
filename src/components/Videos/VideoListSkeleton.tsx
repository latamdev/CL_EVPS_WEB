import React from "react";

function VideoListSkeleton() {
  return (
    <div className=" top-[4.5rem]">
      <div className=" flex p-3 ">
        <div className="rounded-md  w-full">
          <div className="animate-pulse items-center">
            {[0, 1, 2, 3].map((index) => {
              return (
                <div key={index} className="flex flex-col pb-8 mb-2">
                  <div className="flex items-center justify-between gap-6">
                    <div className="bg-gray-300  bg-slate-700 h-16 w-20 rounded-xl"></div>
                    <div className="bg-gray-300 flex-1 space-y-6 py-1">
                      <div className="h-4 bg-slate-700 rounded"></div>
                    </div>

                    <div className="bg-gray-300 flex-1 space-y-6 py-1">
                      <div className="h-4 bg-slate-700 rounded"></div>
                    </div>

                    <div className="bg-gray-300 flex-1 space-y-6 py-1">
                      <div className="h-4 bg-slate-700 rounded"></div>
                    </div>

                    <div className="bg-gray-300 flex-1 space-y-6 py-1">
                      <div className="h-4 bg-slate-700 rounded"></div>
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

export default VideoListSkeleton;
