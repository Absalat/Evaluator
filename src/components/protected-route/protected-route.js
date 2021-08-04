import React from "react";
import { Redirect, Route } from "react-router";
import config from "../../config";
const ProtectedRoute = ({ children, roles, ...rest }) => {
  const data = localStorage.getItem(config.storage)
  if (data == null) {
    return <Redirect to="/login" />;
  }
  if (!data.user.profile_filled && rest.path !== "/faculity/profiles/new") {
    return <Redirect to="/faculity/profiles/new" />;
  }
  return <Route {...rest}>{children}</Route>;
};

export default ProtectedRoute;
