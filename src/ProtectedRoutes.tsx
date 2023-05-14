import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "./Root";

const ProtectedRoutes = () => {
  const { currentUser } = useContext(UserContext);

  if (!currentUser.roles.includes("ROLE_ADMIN")) {
    return <Navigate to={"/platform"} />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
