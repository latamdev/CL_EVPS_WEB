import React, { useEffect } from "react";
import useUser from "../../hooks/useUser";

function Logout() {
  const { logout } = useUser();

  useEffect(() => {
    logout();
  }, []);

  return <div></div>;
}

export default Logout;
