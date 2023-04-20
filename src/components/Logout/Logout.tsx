import { useEffect } from "react";
import useUser from "../../hooks/useUser";

function Logout() {
  const { logout } = useUser();

  useEffect(() => {
    logout();
  }, [logout]);

  return <div></div>;
}

export default Logout;
