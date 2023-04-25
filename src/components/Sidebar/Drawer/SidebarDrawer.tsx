import React from "react";
import Sidebar from "../Sidebar";

interface SidebarDrawerProps {
  onClose: () => void;
}

const SidebarDrawer: React.FC<SidebarDrawerProps> = (props) => {
  const { onClose } = props;
  return <Sidebar onClose={onClose} />;
};

export default SidebarDrawer;
