import React from "react";
import { Redirect, Route } from "react-router";
import config from "../../config";
import useLocalStorage from "../../hooks/useLocalStorage";
const ProtectedRoute = ({ children, roles, ...rest }) => {
  const [data, _] = useLocalStorage(config.storage, null);
  if (data == null) {
    return <Redirect to="/login" />;
  }
  if (!roles.some((role) => data.user.roles.includes(role))) {
    return <Redirect to="/login" />;
  }
  if (
    data.user &&
    !data.user.profile_filled &&
    rest.path !== "/faculity/profiles/new"
  ) {
    return <Redirect to="/faculity/profiles/new" />;
  }
  return <Route {...rest}>{children}</Route>;
};

export default ProtectedRoute;
