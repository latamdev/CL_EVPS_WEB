import React, { FC } from "react";

const TopNavbar: FC<{ pathName: string }> = ({ pathName }) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-semibold font-face-bb leading-relaxed text-gray-800">
          {pathName}
        </h1>
      </div>
    </div>
  );
};

export default TopNavbar;
