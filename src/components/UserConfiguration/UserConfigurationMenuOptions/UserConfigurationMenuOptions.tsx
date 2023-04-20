import React, { useEffect, useRef } from "react";
import { FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

interface UserConfigurationMenuOptionsProps {
  onClick?: (event: MouseEvent) => void;
  showMenu: boolean;
  setShowMenu: (showMenu: boolean) => void;
}

const UserConfigurationMenuOptions: React.FC<
  UserConfigurationMenuOptionsProps
> = (props) => {
  const { showMenu, setShowMenu } = props;
  const { pathname: currentPath } = useLocation();

  const isTheSamePath = (currentPath: string, pathName: string) => {
    return new RegExp(`^${currentPath}$`).test(pathName);
  };

  const getCurrenLinkState = (currentPath: string, pathName: string) => {
    return isTheSamePath(currentPath, pathName)
      ? "flex gap-x-4 items-center py-2 text-morazul group font-extrabold"
      : "flex gap-x-4 items-center py-2 text-gray-500 hover:text-morazul group";
  };

  const menuRef = useRef<any>(null);

  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, setShowMenu]);

  return (
    <>
      {showMenu ? (
        <div className="relative -bottom-16 w-fit flex ">
          <ul
            ref={menuRef}
            className="w-max mt-10 bg-gray-100 rounded-lg p-3  shadow-md"
          >
            <li>
              <Link
                className={`${getCurrenLinkState(
                  currentPath,
                  "/platform/configuration"
                )}`}
                to={"/platform/configuration"}
              >
                <FaUserAlt />
                Perfil
              </Link>
            </li>
            <li>
              <Link
                className={`${getCurrenLinkState(currentPath, "/sign-out")}`}
                to={"/sign-out"}
              >
                <FaSignOutAlt />
                Cerrar Sesión
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default UserConfigurationMenuOptions;
