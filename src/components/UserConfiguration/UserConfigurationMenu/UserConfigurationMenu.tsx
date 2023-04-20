import React, { useContext, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { UserContext } from "../../../Root";
import ResourceImage from "../../Resources/ResourceImage/ResourceImage";
import { IMG_USER_URL } from "../constants";
import UserConfigurationMenuOptions from "../UserConfigurationMenuOptions/UserConfigurationMenuOptions";

const UserConfigurationMenu: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { currentUser: userContext } = useContext(UserContext);

  return (
    <>
      <div
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center hover:cursor-pointer "
      >
        <div className="flex items-center">
          <ResourceImage
            img={`${IMG_USER_URL}${userContext.avatar}`}
            className="h-16 w-16 rounded-full absolute self-center border-white border-2 hover:bg-gray-100"
          />
          <span className="bg-danger text-white text-sm font-bold pl-1 pr-1 rounded-full relative left-14  bottom-6">
            0
          </span>
        </div>
        <div className="pl-14 mr-10">
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
