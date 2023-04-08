import React from "react";
import { Navigate } from "react-router-dom";
import useUser from "../hooks/useUser";

const withAuthentication =
  <T extends {}>(WrappedComponent: React.JSXElementConstructor<T>) =>
  (props: T) => {
    const { currentUser } = useUser();

    if (!currentUser.id) {
      return <Navigate to={"/sign-in"} />;
    }

    return <WrappedComponent {...props} />;
  };

export default withAuthentication;
