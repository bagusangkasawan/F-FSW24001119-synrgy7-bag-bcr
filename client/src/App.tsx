import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPages from "./pages/guest/LandingPages";
import CariMobil from "./pages/users/CariMobil";
import Login from "./pages/guest/Login";
import Register from "./pages/guest/Register";
import Dashboard from "./pages/admin/Dashboard";
import Auth from "./services/Auth";
import Home from "./pages/users/Home";
import LoginAdmin from "./pages/admin/LoginAdmin";
import AuthAdmin from "./services/AuthAdmin";
import CreateCar from "./pages/admin/CreateCar";
import EditCar from "./pages/admin/EditCar";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" Component={LandingPages} />
                    <Route
                        path="/cars"
                        element={
                            <Auth>
                                <CariMobil />
                            </Auth>
                        }
                    />
                    <Route
                        path="/home"
                        element={
                            <Auth>
                                <Home />
                            </Auth>
                        }
                    />
                    <Route path="/login" Component={Login} />
                    <Route path="/register" Component={Register} />
                    <Route
                        path="/dashboard"
                        element={
                            <AuthAdmin>
                                <Dashboard />
                            </AuthAdmin>
                        }
                    />
                    <Route
                        path="/editCar/:id"
                        element={
                            <AuthAdmin>
                                <EditCar />
                            </AuthAdmin>
                        }
                    />
                    <Route
                        path="/addCar"
                        element={
                            <AuthAdmin>
                                <CreateCar />
                            </AuthAdmin>
                        }
                    />
                    <Route path="/LoginAdmin" Component={LoginAdmin} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
