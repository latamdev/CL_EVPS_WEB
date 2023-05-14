import { FaBookReader, FaComment, FaHome, FaSignOutAlt } from "react-icons/fa";
import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  useProSidebar,
  SubMenu,
} from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import useScreenSize from "../../hooks/useScreenSize";
import UserConfigurationMenu from "../UserConfiguration/UserConfigurationMenu/UserConfigurationMenu";
import "./Sidebar.css";
import { useContext } from "react";
import { UserContext } from "../../Root";

interface SidebarProps {
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { onClose } = props;
  const { pathname: currentPath } = useLocation();
  const { collapsed } = useProSidebar();
  const isDesktop = useScreenSize();
  const { currentUser } = useContext(UserContext);

  const isTheSamePath = (currentPath: string, pathName: string) => {
    return new RegExp(`^${currentPath}$`).test(pathName);
    /* return currentPath
      .split("/")
      [currentPath.split("/").length - 1].includes(pathName); */
  };

  const getCurrenLinkState = (currentPath: string, pathName: string) => {
    return isTheSamePath(currentPath, pathName)
      ? "flex gap-x-4 items-center py-2 text-white font-bold group font-extrabold bg-selected-item"
      : "flex gap-x-4 items-center py-2 text-gray-400  group ";
  };

  const getCurrentSpanState = (currentPath: string, pathName: string) => {
    return isTheSamePath(currentPath, pathName)
      ? "absolute w-1.5 h-8 bg-primary rounded-r-full left-0  "
      : "absolute w-1.5 h-8 bg-primary rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out";
  };

  return (
    <ProSidebar
      backgroundColor="#1B2C3F"
      className="h-screen text-white font-light z-50"
    >
      <Menu className="">
        {!isDesktop && (
          <Link to={"/platform/configuration"}>
            <MenuItem className="mt-5" onClick={onClose}>
              <UserConfigurationMenu />
            </MenuItem>
          </Link>
        )}
        <MenuItem
          component={
            <Link
              to={"/platform"}
              className={getCurrenLinkState(currentPath, "/platform") + " mt-5"}
            />
          }
          onClick={onClose}
        >
          <div className="flex flex-row gap-4 items-center">
            <span className={getCurrentSpanState(currentPath, "/platform")} />

            {collapsed ? (
              <span className="flex flex-col gap-1 mx-auto">
                <FaHome className="w-full mx-auto" />
              </span>
            ) : (
              <span className="flex flex-row items-center gap-4">
                <FaHome />
                Inicio
              </span>
            )}
          </div>
        </MenuItem>
        <MenuItem
          component={
            <Link
              to={"/platform/resources"}
              className={getCurrenLinkState(currentPath, "/platform/resources")}
            />
          }
          onClick={onClose}
        >
          <div className="flex flex-row gap-4 items-center">
            <span
              className={getCurrentSpanState(
                currentPath,
                "/platform/resources"
              )}
            />

            {collapsed ? (
              <span className="flex flex-col gap-1 mx-auto">
                <FaBookReader className="w-full mx-auto" />
              </span>
            ) : (
              <span className="flex flex-row items-center gap-4">
                <FaBookReader /> Recursos
              </span>
            )}
          </div>
        </MenuItem>
        <MenuItem
          component={
            <Link
              to={"/platform/messages"}
              className={getCurrenLinkState(currentPath, "/platform/messages")}
            />
          }
          onClick={onClose}
        >
          <div className="flex flex-row gap-4 items-center w-full">
            <span
              className={getCurrentSpanState(currentPath, "/platform/messages")}
            />

            {collapsed ? (
              <span className="flex flex-col gap-1 mx-auto">
                <FaComment className="w-full mx-auto" />
              </span>
            ) : (
              <span className="flex flex-row items-center gap-4">
                <FaComment /> Mensajes
              </span>
            )}
          </div>
        </MenuItem>
        {!isDesktop && (
          <MenuItem
            component={
              <Link
                to={"/sign-out"}
                className={getCurrenLinkState(currentPath, "/sign-out")}
              />
            }
            onClick={onClose}
          >
            <div className="flex flex-row gap-4 items-center w-full">
              <span className={getCurrentSpanState(currentPath, "/sign-out")} />

              <span className="flex flex-row items-center gap-4">
                <FaSignOutAlt /> Cerrar sesión
              </span>
            </div>
          </MenuItem>
        )}
        {currentUser.roles.includes("ROLE_ADMIN") && (
          <SubMenu className="submenu" label={"Adminstración"}>
            <MenuItem
              component={
                <Link
                  to={"/platform/admin/dashboard"}
                  className={getCurrenLinkState(
                    currentPath,
                    "/platform/admin/dashboard"
                  )}
                />
              }
              onClick={onClose}
            >
              Dashboard
            </MenuItem>
            <MenuItem
              component={
                <Link
                  to={"/platform/admin/new-resource"}
                  className={getCurrenLinkState(
                    currentPath,
                    "/platform/admin/new-resource"
                  )}
                />
              }
              onClick={onClose}
            >
              Subir Recurso
            </MenuItem>
          </SubMenu>
        )}
      </Menu>
    </ProSidebar>
  );
};

export default Sidebar;
