import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ ...rest }) => {
  const auth = JSON.parse(localStorage.getItem("token"));
  if (auth) {
    if (auth.token) {
      return <Route {...rest} />;
    }
  }
  return <Redirect to="/signin" />;
};

export const AdminAuthRoute = ({ ...rest }) => {
  const userRole = localStorage.getItem("userRole");
  if (userRole) {
    if (userRole == 1) {
      return <Route {...rest} />;
    }
  }
  return <Redirect to="/unAuthorized" />;
};
