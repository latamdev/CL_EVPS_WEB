import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/plurality_logo.png";
import {
  FaHome,
  FaVideo,
  FaBookReader,
  FaComment,
  FaSignOutAlt,
} from "react-icons/fa";
import UserConfigurationMenu from "../UserConfiguration/UserConfigurationMenu/UserConfigurationMenu";

function SidebarMenu() {
  const isTheSamePath = (currentPath: string, pathName: string) => {
    return new RegExp(`^${currentPath}$`).test(pathName);
  };

  const getCurrenLinkState = (currentPath: string, pathName: string) => {
    return isTheSamePath(currentPath, pathName)
      ? "flex gap-x-4 items-center py-2 text-morazul group font-extrabold"
      : "flex gap-x-4 items-center py-2 text-gray-500 hover:text-morazul group";
  };

  const getCurrentSpanState = (currentPath: string, pathName: string) => {
    return isTheSamePath(currentPath, pathName)
      ? "absolute w-1.5 h-8 bg-yellow-500 rounded-r-full left-0  "
      : "absolute w-1.5 h-8 bg-yellow-500 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out";
  };

  const { pathname: currentPath } = useLocation();

  return (
    <div className="flex">
      <div className=" w-64">
        <div className="bg-customYellow h-[8.6rem]">
          <img alt="logo" src={logo} className="w-32 mr-auto ml-auto" />
        </div>
        <div
          id="sidebar-menu"
          className="flex flex-col gap-y-6 pt-10 py-6 px-10 border-r border-gray-200 h-full"
        >
          <Link
            to={"/platform"}
            className={getCurrenLinkState(currentPath, "/platform")}
          >
            <FaHome />
            <span className={getCurrentSpanState(currentPath, "/platform")} />
            <span>Home</span>
          </Link>
          {/*           <Link
            to={"/platform/videos"}
            className={getCurrenLinkState(currentPath, "/platform/videos")}
          >
            <FaVideo />
            <span
              className={getCurrentSpanState(currentPath, "/platform/videos")}
            />
            <span>Videos</span>
          </Link> */}
          <Link
            to={"/platform/resources"}
            className={getCurrenLinkState(currentPath, "/platform/resources")}
          >
            <FaBookReader />
            <span
              className={getCurrentSpanState(
                currentPath,
                "/platform/resources"
              )}
            />
            <span>Recursos</span>
          </Link>
          <Link
            to={"/platform/messages"}
            className={getCurrenLinkState(currentPath, "/platform/messages")}
          >
            <FaComment />
            <span
              className={getCurrentSpanState(currentPath, "/platform/messages")}
            />
            <span>Mensajes</span>
          </Link>
          {/*           <Link
            to={"/platform/configuration"}
            className={`${getCurrenLinkState(
              currentPath,
              "/platform/configuration"
            )} w-full bottom-10 absolute `}
          >
            <span
              className={getCurrentUserOptionState(
                currentPath,
                "/platform/configuration"
              )}
            />
            <UserConfigurationMenu />
          </Link> */}
          {/*           <Link
            to={"/platform/sign-out"}
            className={getCurrenLinkState(currentPath, "/platform/sign-out")}
          >
            <FaSignOutAlt />
            <span
              className={getCurrentSpanState(currentPath, "/platform/sign-out")}
            />
            <span>Salir</span>
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default SidebarMenu;
