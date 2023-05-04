import { createContext, useMemo, useState } from "react";
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
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import SidebarDrawer from "./components/Sidebar/Drawer/SidebarDrawer";
import useScreenSize from "./hooks/useScreenSize";
import { Fab } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";
import { useCart } from "react-use-cart";
import DrawerCheckout from "./components/Checkout/DrawerCheckout/DrawerCheckout";

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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const isDesktop = useScreenSize();
  const { totalUniqueItems } = useCart();

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  const toggleCartDrawer = () => {
    setIsCartDrawerOpen((prevState) => !prevState);
  };

  const handleSidebarMenu = () => {
    if (isDesktop) {
      collapseSidebar(!collapsed);
    } else {
      toggleDrawer();
    }
  };

  return (
    <>
      <ScrollToTop />

      <UserContext.Provider value={value}>
        <div className="fixed flex top-0 flex-col justify-between z-40 text-white">
          <div className="flex flex-row bg-primary w-screen">
            <div className="md:p-3 pl-3 md:pl-10 flex flex-row items-center space-x-5">
              <FaBars
                className="md:text-2xl text-xl hover:cursor-pointer"
                onClick={() => {
                  handleSidebarMenu();
                }}
              />

              <img
                alt="logo"
                src={logo}
                className="lg:w-36 bg-white mr-auto ml-auto lg:visible invisible w-0"
              />
            </div>
            <Search />
            <div className="flex flex-row lg:flex-1 lg:justify-end lg:pr-10 lg:visible w-0 invisible">
              <ShoppingCartAlert onClick={toggleCartDrawer} />
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
          {isDesktop && (
            <div
              className={
                (!collapsed ? "mr-[15.5rem]" : "mr-20") + " fixed h-screen z-50"
              }
            >
              <Sidebar />
            </div>
          )}

          {!isDesktop && (
            <Drawer
              open={isDrawerOpen}
              direction={"left"}
              onClose={toggleDrawer}
              enableOverlay={true}
              className="mt-[7.2rem]"
            >
              <SidebarDrawer onClose={toggleDrawer} />
            </Drawer>
          )}

          {!isDesktop && totalUniqueItems > 0 && (
            <Fab
              mainButtonStyles={{ background: "#150e3d" }}
              icon={<ShoppingCartAlert />}
              style={{ bottom: 0, right: 0 }}
              onClick={toggleCartDrawer}
            ></Fab>
          )}

          <Drawer
            open={isCartDrawerOpen}
            direction={"right"}
            onClose={toggleCartDrawer}
            enableOverlay={true}
          >
            <DrawerCheckout toggleDrawer={toggleCartDrawer} />
          </Drawer>

          <div
            className={
              (!collapsed && isDesktop
                ? "ml-[15.5rem] ease-linear transition-all duration-150"
                : "ml-20 ease-linear transition-all duration-150") +
              (!isDesktop ? " ml-0-important" : "")
            }
          >
            <div className="flex w-[100%] z-0">
              <Outlet />
            </div>
          </div>
        </div>
      </UserContext.Provider>
    </>
  );
}

export default withAuthentication(Root);
