import { createContext, useMemo, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import ShoppingCartAlert from "./components/Cart/ShoppingCartAlert";
import Search from "./components/Search/Search";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";
import UserConfigurationMenu from "./components/UserConfiguration/UserConfigurationMenu/UserConfigurationMenu";
import { User } from "./components/UserConfiguration/UserEditProflie/interfaces";
import useUser from "./hooks/useUser";

export const UserContext = createContext({
  currentUser: {} as User,
  setCurrentUser: (user: User) => {},
});

function Root() {
  const { currentUser, setCurrentUser } = useUser();
  const value = useMemo(() => ({ currentUser, setCurrentUser }), [currentUser]);

  console.log("currentUser", currentUser);

  return (
    <>
      <UserContext.Provider value={value}>
        <div className="flex flex-row">
          <SidebarMenu />
          <div className="w-full pb-10">
            <div className="flex flex-row justify-between bg-primary text-white">
              <Search />
              <div className="flex flex-row lg:flex-1 lg:justify-end lg:pr-10 lg:visible w-0 invisible">
                <ShoppingCartAlert />
                <UserConfigurationMenu />
              </div>
            </div>
            <Breadcrumbs />
            <Outlet />
          </div>
        </div>
      </UserContext.Provider>
    </>
  );
}

export default Root;
