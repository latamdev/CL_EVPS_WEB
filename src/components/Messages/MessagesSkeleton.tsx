import React from "react";

const MessagesSkeleton = () => {
  return (
    <div className="card">
      <div className="animate-pulse">
        <div className="bg-gray-200 bg-slate-700 h-5 w-96 rounded"></div>

        <div className="gap-4 flex flex-col 2xl:grid-cols-5 justify-between mt-10">
          {[0, 1, 2, 3, 4].map((index) => {
            return (
              <div
                key={index}
                className="flex flex-row items-center w-full gap-5 border-b-2 p-2"
              >
                <div className="flex items-center mt-2 space-x-3">
                  <svg
                    className="text-gray-200 w-16 h-16"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>

                <div className="mt-3 bg-gray-200 bg-slate-700 h-5 flex-1  rounded"></div>
                <div className="mt-3 bg-gray-200 bg-slate-700 h-5  flex justify-end w-10 border-2 rounded"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MessagesSkeleton;
