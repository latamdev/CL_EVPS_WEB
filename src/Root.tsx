import { createContext, useMemo } from "react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import ShoppingCartAlert from "./components/Cart/ShoppingCartAlert";
import Search from "./components/Search/Search";
import UserConfigurationMenu from "./components/UserConfiguration/UserConfigurationMenu/UserConfigurationMenu";
import { User } from "./components/UserConfiguration/UserEditProflie/interfaces";
import useUser from "./hooks/useUser";
import Sidebar from "./components/Sidebar/Sidebar";
import { useProSidebar } from "react-pro-sidebar";
import { FaBars } from "react-icons/fa";
import logo from "./assets/images/short_logo.png";
import ScrollToTop from "./hooks/ScrollToTop";
import withAuthentication from "./hocs/withAuthentication";

export const UserContext = createContext({
  currentUser: {} as User,
  setCurrentUser: (user: User) => {},
});

function Root() {
  const { currentUser, setCurrentUser } = useUser();
  const value = useMemo(
    () => ({ currentUser, setCurrentUser }),
    [currentUser, setCurrentUser]
  );
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <>
      <ScrollToTop />

      <UserContext.Provider value={value}>
        <div className="fixed flex top-0 flex-col justify-between z-40 text-white">
          <div className="flex flex-row bg-primary w-screen">
            <div className="p-3 pl-10 flex flex-row items-center space-x-5">
              <FaBars
                className="lg:text-2xl text-3xl hover:cursor-pointer"
                onClick={() => collapseSidebar(!collapsed)}
              />

              <img
                alt="logo"
                src={logo}
                className="lg:w-36 bg-white mr-auto ml-auto lg:visible invisible w-0"
              />
            </div>
            <Search />
            <div className="flex flex-row lg:flex-1 lg:justify-end lg:pr-10 lg:visible w-0 invisible">
              <ShoppingCartAlert />
              <UserConfigurationMenu />
            </div>
          </div>
          <div
            className={
              (!collapsed
                ? "pl-[15.56rem] ease-linear transition-all duration-150"
                : "pl-20 ease-linear transition-all duration-150") +
              " bg-primary"
            }
          >
            <Breadcrumbs />
          </div>
        </div>
        <div className="mt-[7.2rem]">
          <div className="fixed h-screen z-50">
            <Sidebar />
          </div>
          <div
            className={
              (!collapsed
                ? "ml-[15.5rem] ease-linear transition-all duration-150"
                : "ml-20 ease-linear transition-all duration-150") + ""
            }
          >
            <div className="flex w-[100%] h-screen bg-[#F2F4F7]">
              <Outlet />
            </div>
          </div>
        </div>
      </UserContext.Provider>
    </>
  );
}

export default withAuthentication(Root);
