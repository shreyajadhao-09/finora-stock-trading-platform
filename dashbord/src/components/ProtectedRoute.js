import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const hashParams = new URLSearchParams(window.location.hash.slice(1));
  const handoffToken = hashParams.get("token");
  const handoffUser = hashParams.get("user");

  if (handoffToken) {
    localStorage.setItem("token", handoffToken);

    if (handoffUser) {
      try {
        localStorage.setItem("user", JSON.stringify(JSON.parse(handoffUser)));
      } catch {
        localStorage.removeItem("user");
      }
    }

    window.history.replaceState(null, "", window.location.pathname);
  }

  const token = localStorage.getItem("token");

  return token ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
