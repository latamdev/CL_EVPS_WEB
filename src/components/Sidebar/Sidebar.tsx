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
import "./Sidebar.css";

const Sidebar = () => {
  const { pathname: currentPath } = useLocation();
  const { collapseSidebar, collapsed } = useProSidebar();

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
      className="h-screen text-white font-light"
    >
      <Menu>
        <MenuItem
          component={
            <Link
              to={"/platform"}
              className={getCurrenLinkState(currentPath, "/platform") + " mt-5"}
            />
          }
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
      </Menu>
    </ProSidebar>
  );
};

export default Sidebar;
