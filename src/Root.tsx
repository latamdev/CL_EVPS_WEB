import { Outlet } from "react-router-dom";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";

function Root() {
  return (
    <div className="flex flex-row">
      <SidebarMenu />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
