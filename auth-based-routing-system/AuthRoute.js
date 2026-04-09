import React from "react";
import { Navigate } from "react-router-dom";

function AuthRoute({ isLoggedIn, children }) {
  return isLoggedIn ? children : <Navigate to="/login" />;
}

export default AuthRoute;
