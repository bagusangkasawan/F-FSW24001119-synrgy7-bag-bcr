import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./Index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel"; // Ensure this import is correct
import "owl.carousel/dist/assets/owl.carousel.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
