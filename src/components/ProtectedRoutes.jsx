import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const getTokenFromLocalStorage = localStorage.getItem("token");
  return getTokenFromLocalStorage !== null ? (
    children
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default ProtectedRoutes;
