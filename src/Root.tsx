import { Outlet } from "react-router-dom";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import ShoppingCartAlert from "./components/Cart/ShoppingCartAlert";
import Search from "./components/Search/Search";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";

function Root() {
  return (
    <div className="flex flex-row">
      <SidebarMenu />
      <div className="w-full pb-10">
        <div className="flex flex-row justify-between">
          <Search />
          <ShoppingCartAlert />
        </div>
        <Breadcrumbs />
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
