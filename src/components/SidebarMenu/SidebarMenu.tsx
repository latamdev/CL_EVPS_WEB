import { Link } from "react-router-dom";
import logo from "../../assets/images/plurality_logo.png";
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
    <div>
      <div className="container bg-blue-900 h-screen w-40 flex flex-col items-center shadow-xl ">
        <img alt="logo" src={logo} className="h-20 mt-5 w-fit" />
        <div
          id="sidebar-menu"
          className="flex flex-col space-y-16 text-white mt-20 "
        >
          <Link to={"/platform"}>
            <FaHome className="text-3xl" />
          </Link>
          <Link to={"/platform/videos"}>
            <FaVideo className="text-3xl" />
          </Link>
          <Link to={"/platform/resources"}>
            <FaBookReader className="text-3xl" />
          </Link>
          <Link to={"/platform/messages"}>
            <FaComment className="text-3xl" />
          </Link>
          <Link to={"/platform/configuration"}>
            <FaCogs className="text-3xl" />
          </Link>
          <Link to={"/platform/sign-out"}>
            <FaSignOutAlt className="text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SidebarMenu;
