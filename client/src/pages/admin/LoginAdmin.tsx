import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";

const LoginAdmin: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch("http://localhost:8686/api/v1/users/admin/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error("Login failed");
            }

            const data = await response.json();
            console.log(data);
            if (data && data.token) {
                localStorage.setItem("token", data.token);
                navigate("/dashboard");
            } else {
                setError("Invalid email or password");
            }
        } catch (error) {
            setError("An error occurred during login");
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className="row align-items-center" style={{ maxWidth: "1440px", height: "100vh" }}>
            <div className="col-md-8">
                <Image src=".\images\login_admin.png" fluid />
            </div>
            <div className="col-md-4">
                <h1>Welcome, Admin BCR</h1>
                <Image src="https://res.cloudinary.com/dcyojno0c/image/upload/v1718701035/assets/logo_login_fuoavn.png" fluid />
                <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label htmlFor="email-user">Email</label>
                    <input type="email" id="email-user" placeholder="Contoh: email@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <label htmlFor="password-user">Password</label>
                    <input type="password" id="password-user" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="6+ characters" required />
                    <button type="submit" disabled={isLoading} style={{ backgroundColor: "#0d28a6", color: "white" }}>
                        {isLoading ? "Signing in..." : "Sign in"}
                    </button>
                </form>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
        </div>
    );
};

export default LoginAdmin;
