import React from "react";

const ResourceListItemSkeleton = () => {
  return (
    <div className="animate-pulse w-full">
      <div className="flex flex-row ">
        <div className="flex flex-1 mr-10 mt-7">
          <div className="mt-3 bg-gray-300 bg-slate-700 h-10 w-full  rounded"></div>
        </div>
        <div className="flex flex-1 mr-10 mt-7">
          <div className="mt-3 bg-gray-300 bg-slate-700 h-10 w-full  rounded"></div>
        </div>
        <div className="flex flex-1 mr-10 mt-7">
          <div className="mt-3 bg-gray-300 bg-slate-700 h-10 w-full  rounded"></div>
        </div>
        <div className="flex flex-1 mr-10 mt-7">
          <div className="mt-3 bg-gray-300 bg-slate-700 h-10 w-full  rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ResourceListItemSkeleton;
