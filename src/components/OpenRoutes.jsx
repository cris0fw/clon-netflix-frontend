import React from "react";
import { Navigate } from "react-router-dom";

const OpenRoutes = ({ children }) => {
  const getTokenFromLocalStorage = localStorage.getItem("token");

  return getTokenFromLocalStorage === null ? (
    children
  ) : (
    <Navigate to="/browse" replace={true} />
  );
};

export default OpenRoutes;
