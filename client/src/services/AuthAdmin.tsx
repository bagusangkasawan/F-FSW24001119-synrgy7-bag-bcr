import React from "react";
import { Navigate } from "react-router-dom";

interface JwtPayload {
    id: string;
    nama: string;
    email: string;
    role: string;
}

const decodeJwtToken = (token: string): JwtPayload | null => {
    try {
        // Memisahkan bagian payload dari token JWT
        const payloadBase64 = token.split(".")[1];

        // Mendekode base64 menjadi string JSON
        const decodedPayload = atob(payloadBase64);

        // Parsing string JSON menjadi objek JavaScript
        const parsedPayload: JwtPayload = JSON.parse(decodedPayload);

        return parsedPayload;
    } catch (error) {
        console.error("Failed to decode token", error);
        return null;
    }
};

const AuthAdmin: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const token = localStorage.getItem("token");

    if (!token) return <Navigate to="/" />;

    const decodedToken = decodeJwtToken(token);

    if (!decodedToken || (decodedToken.role !== "superadmin" && decodedToken.role !== "admin")) {
        return <Navigate to="/" />;
    }

    return <>{children}</>;
};

export default AuthAdmin;
