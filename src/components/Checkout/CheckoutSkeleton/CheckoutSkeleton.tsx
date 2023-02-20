import React from "react";

function CheckoutSkeleton() {
  return (
    <>
      <div className="animate-pulse">
        <div className="bg-gray-300 bg-slate-700 h-10 w-96 rounded"></div>

        <div className="bg-gray-300 bg-slate-700 h-5 w-1/2 mt-5 rounded"></div>

        <div className="flex lg:flex-row">
          <div className="lg:w-1/2  mt-10">
            {[0, 1, 2, 3].map((el) => {
              return (
                <div
                  key={el}
                  className="flex flex-col lg:flex-row mb-5 w-full space-x-10 pb-2 border-b-2"
                >
                  <div className="bg-gray-300 bg-slate-700 h-32 w-32"></div>
                  <div className="flex lg:flex-col">
                    <div className="mt-3 bg-gray-300 bg-slate-700 h-10 w-48  rounded"></div>
                    <div className="mt-3 bg-gray-300 bg-slate-700 h-5 w-28  rounded"></div>
                  </div>
                  <div className="mt-3 bg-gray-300 bg-slate-700 h-5 w-28  rounded"></div>
                  <div className="mt-3 bg-gray-300 bg-slate-700 h-5 w-28  rounded"></div>
                </div>
              );
            })}
          </div>

          <div className="lg:w-1/2 mt-10 pl-10">
            <div className="mt-3 bg-gray-300 bg-slate-700 h-5 w-32  rounded"></div>
            <div className="mt-3 bg-gray-300 bg-slate-700 h-10 w-60  rounded"></div>
            <div className="mt-3 bg-gray-300 bg-slate-700 h-12 w-80  rounded"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutSkeleton;
