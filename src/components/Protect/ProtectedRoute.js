import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  
  return localStorage.getItem('jwt') ? children : (<Navigate to='/' replace />);
}

export default ProtectedRoute;
