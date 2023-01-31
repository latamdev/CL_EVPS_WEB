import { Outlet } from "react-router-dom";
import Search from "./components/Search/Search";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";

function Root() {
  return (
    <div className="flex flex-row">
      <SidebarMenu />
      <div className="w-full">
        <Search />
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
