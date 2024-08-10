import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";
import { Toast, ToastContainer } from "react-bootstrap"; // Import toast components

const Register: React.FC = () => {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showToast, setShowToast] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const requestData = {
            nama,
            email,
            password,
        };

        try {
            const response = await fetch("http://localhost:8686/api/v1/users/member/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
            });

            if (response.ok) {
                console.log("Registration successful");
                setShowToast(true);
                setTimeout(() => {
                    navigate("/login");
                }, 2000);
            } else {
                const errorData = await response.json();
                console.error("Registration failed", errorData);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <section>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <Image src=".\images\loginBackground.jpg" fluid />
                    </div>
                    <div className="col-md-4">
                        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <label htmlFor="nama">Nama</label>
                            <input type="text" id="nama" value={nama} onChange={(e) => setNama(e.target.value)} />
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button type="submit" style={{ backgroundColor: "#0d28a6", color: "white" }}>
                                Register
                            </button>
                        </form>
                        <a href="/login">Sudah punya akun</a>
                    </div>
                </div>
            </div>
            {/* Toast Container */}
            <ToastContainer position="top-end" className="p-3" style={{ zIndex: 9999 }}>
                {/* Show toast if registration is successful */}
                <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Registration Successful!</strong>
                    </Toast.Header>
                    <Toast.Body>Your registration was successful. Redirecting to login...</Toast.Body>
                </Toast>
            </ToastContainer>
        </section>
    );
};

export default Register;
