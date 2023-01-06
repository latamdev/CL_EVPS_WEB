import { Link } from "react-router-dom";
import logo from "../../assets/images/plurality_logo.png";

function SidebarMenu() {
  return (
    <div>
      <div className="container bg-blue-900 h-screen w-40 flex flex-col align-middle">
        <img alt="logo" src={logo} className="h-20 mt-5 w-fit" />
        <div
          id="sidebar-menu"
          className="flex flex-col align-middle space-y-10 text-white mt-20"
        >
          <Link to={"/platform"}>Home</Link>
          <Link to={"/platform/videos"}>Videos</Link>
          <Link to={"/platform/resources"}>Recursos</Link>
          <Link to={"/platform/messages"}>Mensajes</Link>
          <Link to={"/platform/configuration"}>Configuracion</Link>
        </div>
      </div>
    </div>
  );
}

export default SidebarMenu;
