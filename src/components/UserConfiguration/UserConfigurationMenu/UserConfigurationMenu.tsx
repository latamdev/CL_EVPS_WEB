import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import ResourceImage from "../../Resources/ResourceImage/ResourceImage";
import { IMG_USER_DEFAULT } from "../constants";
import UserConfigurationMenuOptions from "../UserConfigurationMenuOptions/UserConfigurationMenuOptions";

const UserConfigurationMenu: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center hover:cursor-pointer "
      >
        <div className="flex items-center">
          <ResourceImage
            img={IMG_USER_DEFAULT}
            className="h-16 w-20 absolute self-center border-black border-2  rounded-lg hover:bg-gray-100"
          />
          <span className="bg-red-600 text-white text-sm font-bold pl-1 pr-1 rounded-full relative left-16  bottom-6">
            0
          </span>
        </div>
        <div className="pl-20 mr-10">
          <FaArrowDown />
        </div>

        <div className="absolute">
          <UserConfigurationMenuOptions
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
        </div>
      </div>
    </>
  );
};

export default UserConfigurationMenu;
