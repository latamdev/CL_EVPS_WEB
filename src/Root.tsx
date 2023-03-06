import { Link, Outlet } from "react-router-dom";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import ShoppingCartAlert from "./components/Cart/ShoppingCartAlert";
import Search from "./components/Search/Search";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";
import UserConfigurationMenu from "./components/UserConfiguration/UserConfigurationMenu/UserConfigurationMenu";
import useUser from "./hooks/useUser";

function Root() {
  const { currentUser } = useUser();

  console.log("currentUser", currentUser);

  return (
    <div className="flex flex-row">
      <SidebarMenu />
      <div className="w-full pb-10">
        <div className="flex flex-row justify-between bg-customYellow">
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
  );
}

export default Root;
