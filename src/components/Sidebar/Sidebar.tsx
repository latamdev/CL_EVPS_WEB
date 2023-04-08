import React from "react";
import {
  FaBookReader,
  FaComment,
  FaHome,
  FaStepBackward,
  FaStepForward,
} from "react-icons/fa";
import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  useProSidebar,
} from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/plurality_logo.png";

const Sidebar = () => {
  const { pathname: currentPath } = useLocation();
  const { collapseSidebar, collapsed } = useProSidebar();

  const isTheSamePath = (currentPath: string, pathName: string) => {
    return new RegExp(`^${currentPath}$`).test(pathName);
  };

  const getCurrenLinkState = (currentPath: string, pathName: string) => {
    return isTheSamePath(currentPath, pathName)
      ? "flex gap-x-4 items-center py-2 text-white font-bold group font-extrabold"
      : "flex gap-x-4 items-center py-2 text-gray-400 hover:font-bold group";
  };

  const getCurrentSpanState = (currentPath: string, pathName: string) => {
    return isTheSamePath(currentPath, pathName)
      ? "absolute w-1.5 h-8 bg-info rounded-r-full left-0  "
      : "absolute w-1.5 h-8 bg-info rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out";
  };

  return (
    <ProSidebar backgroundColor="bg-primary" className="h-screen">
      <Menu>
        <MenuItem
          component={
            <Link
              to={"/platform"}
              className={getCurrenLinkState(currentPath, "/platform")}
            />
          }
        >
          <div className="flex flex-row gap-4 items-center">
            <FaHome />
            <span className={getCurrentSpanState(currentPath, "/platform")} />

            <span>Inicio</span>
          </div>
        </MenuItem>
        <MenuItem
          component={
            <Link
              to={"/platform/resources"}
              className={getCurrenLinkState(currentPath, "/platform/resources")}
            />
          }
        >
          <div className="flex flex-row gap-4 items-center">
            <span
              className={getCurrentSpanState(
                currentPath,
                "/platform/resources"
              )}
            />

            <FaBookReader />
            <span>Recursos</span>
          </div>
        </MenuItem>
        <MenuItem
          component={
            <Link
              to={"/platform/messages"}
              className={getCurrenLinkState(currentPath, "/platform/messages")}
            />
          }
        >
          <div className="flex flex-row gap-4 items-center">
            <span
              className={getCurrentSpanState(currentPath, "/platform/messages")}
            />

            <FaComment />
            <span>Mensajes</span>
          </div>
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
};

export default Sidebar;
