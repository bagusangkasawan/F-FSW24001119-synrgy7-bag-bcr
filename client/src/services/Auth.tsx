import React from "react";
import { Navigate } from "react-router-dom";

const Auth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const token = localStorage.getItem("token");

    if (!token) return <Navigate to="/" />;

    return <>{children}</>;
};

export default Auth;
