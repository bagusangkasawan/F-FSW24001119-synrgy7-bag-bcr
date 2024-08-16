import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const loginGoogle = async (payload: any) => {
    const response = await fetch("https://synrgy7-ch8-backend-production.up.railway.app/api/v1/users/login/google", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            payload,
        }),
    });
    const data = await response.json();
    return data;
};
const Login: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleLoginWithGoogle = (payload: string) => {
        const googleInfo: any = jwtDecode(payload);
        console.log(googleInfo);
        loginGoogle(googleInfo)
            .then((response: any) => {
                if (response.token) {
                    localStorage.setItem("token", response.token);
                    navigate("/home");
                }
            })
            .catch((err) => console.log(err.message))
            .finally(() => setIsLoading(false));
    };

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch("https://synrgy7-bcr-backend.fly.dev/api/v1/users/member/login", {
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
                navigate("/home");
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
        <section>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <Image src="static\images\loginBackground.jpg" fluid />
                    </div>
                    <div className="col-md-4">
                        <h1>Welcome to BCR</h1>
                        <Image src="https://res.cloudinary.com/dcyojno0c/image/upload/v1718701035/assets/logo_login_fuoavn.png" fluid />
                        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <label htmlFor="email-user">Email</label>
                            <input type="email" id="email-user" placeholder="Contoh: johndee@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <label htmlFor="password-user">Password</label>
                            <input type="password" id="password-user" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="6+ characters" required />
                            <button type="submit" disabled={isLoading} style={{ backgroundColor: "#0d28a6", color: "white" }}>
                                {isLoading ? "Signing in..." : "Sign in"}
                            </button>
                        </form>
                        <a href="/register">Belum punya akun?</a>
                        <br></br>
                        <a href="/loginAdmin">Login sebagai admin?</a>
                        <br />
                        <GoogleOAuthProvider clientId="486816282345-uptrlghs9kd2mehv29p2ugiqor8rq4if.apps.googleusercontent.com">
                            <GoogleLogin
                                onSuccess={(credentialResponse) => {
                                    console.log(credentialResponse);
                                    if (credentialResponse.credential) {
                                        handleLoginWithGoogle(credentialResponse.credential);
                                    }
                                }}
                                onError={() => {
                                    console.log("Login Failed");
                                }}
                            />
                        </GoogleOAuthProvider>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
