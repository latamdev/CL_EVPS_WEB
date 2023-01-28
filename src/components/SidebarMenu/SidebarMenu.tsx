import { Link } from "react-router-dom";
import logo from "../../assets/images/plurality_logo_v2.png";
import {
  FaHome,
  FaVideo,
  FaBookReader,
  FaComment,
  FaCogs,
  FaSignOutAlt,
} from "react-icons/fa";

function SidebarMenu() {
  return (
    <div className="flex">
      <div className="py-6 px-10 w-64 border-r border-gray-200">
        <img alt="logo" src={logo}  className="w-28" />
        <div
          id="sidebar-menu"
          className="flex flex-col gap-y-6 pt-20"
        >
          <Link to={"/platform"} className="flex gap-x-4 items-center py-2 text-gray-500 hover:text-morazul group" >
            <FaHome />
            <span
              className="absolute w-1.5 h-8 bg-customYellow rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out"
            />
            <span>Home</span>
          </Link>
          <Link to={"/platform/videos"} className="flex gap-x-4 items-center py-2 text-gray-500 hover:text-morazul group" >
            <FaVideo/>
            <span
              className="absolute w-1.5 h-8 bg-customYellow rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out"
            />
            <span>Videos</span>
          </Link>
          <Link to={"/platform/resources"} className="flex gap-x-4 items-center py-2 text-gray-500 hover:text-morazul group" >
            <FaBookReader/>
            <span
              className="absolute w-1.5 h-8 bg-customYellow rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out"
            />
            <span>Recursos</span>
          </Link>
          <Link to={"/platform/messages"} className="flex gap-x-4 items-center py-2 text-gray-500 hover:text-morazul group" >
            <FaComment/>
            <span
              className="absolute w-1.5 h-8 bg-customYellow rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out"
            />
            <span>Mensajes</span>
          </Link>
          <Link to={"/platform/configuration"} className="flex gap-x-4 items-center py-2 text-gray-500 hover:text-morazul group" >
            <FaCogs/>
            <span
              className="absolute w-1.5 h-8 bg-customYellow rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out"
            />
            <span>Configuración</span>
          </Link>
          <Link to={"/platform/sign-out"} className="flex gap-x-4 items-center py-2 text-gray-500 hover:text-morazul group" >
            <FaSignOutAlt/>
            <span
              className="absolute w-1.5 h-8 bg-customYellow rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out"
            />
            <span>Salir</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SidebarMenu;
