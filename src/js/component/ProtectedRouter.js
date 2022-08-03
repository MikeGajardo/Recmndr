import React from "react";
import { Redirect } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
    return <Redirect push to="/Signin" />;
  }

  return children;
};

export default ProtectedRoute;
