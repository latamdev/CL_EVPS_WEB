import React from "react";

const TeacherCardSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 bg-slate-700 h-10 w-96 rounded"></div>

      <div className="flex flex-col lg:flex-col justify-end">
        <div className="w-fit mt-10 mx-auto">
          <div className="bg-gray-300 bg-slate-700 h-60 w-60"></div>
        </div>

        <div className="w-full mt-7">
          {[0, 1].map((el) => {
            return (
              <div
                key={el}
                className="mt-3 bg-gray-300 bg-slate-700 h-10 w-full  rounded"
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeacherCardSkeleton;
