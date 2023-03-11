import { useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const initialParam =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

function useUser() {
  let initialToken = JSON.stringify(localStorage.getItem("token"));
  const decodedToken = jwt_decode(
    initialToken !== "null" ? initialToken : initialParam
  );

  const [currentUser, setCurrentUser] = useState<any>(
    mapUserProperties(decodedToken)
  );

  const navigate = useNavigate();

  function mapUserProperties({
    id,
    first_name,
    last_name,
    username,
    birthday,
    country,
    email,
    isAdmin,
    roles,
  }: any) {
    return {
      id,
      first_name,
      last_name,
      username,
      birthday,
      country,
      email,
      isAdmin,
      roles,
    };
  }

  const login = (token: string) => {
    localStorage.setItem("token", token);

    const userData = mapUserProperties(jwt_decode(token));
    setCurrentUser(userData);
    navigate("/platform", { replace: true });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setCurrentUser(null);
    navigate("/", { replace: true });
  };

  return {
    currentUser,
    setCurrentUser,
    login,
    logout,
  };
}

export default useUser;
