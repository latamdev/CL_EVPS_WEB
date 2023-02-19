import React, { FC } from "react";

const TopNavbar: FC<{ pathName: string }> = ({pathName}) => {
    return (<div className="flex items-center justify-between py-7 px-10">
    <div>
      <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">{pathName}</h1>
    </div>
  </div>)
}

export default TopNavbar;