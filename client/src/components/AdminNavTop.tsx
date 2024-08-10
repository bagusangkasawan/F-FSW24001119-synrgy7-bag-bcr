import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import UserProvider, { UserContext } from "../context/UserContext"; // Perbaikan impor

const User: React.FC = () => {
    const user: any = useContext(UserContext);
    return (
        <>
            <span>{user.nama}</span>
        </>
    );
};

const AdminNavTop: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/loginAdmin");
    };

    return (
        <UserProvider>
            <Container>
                <Navbar style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <img src="./images/fi_menu.png" alt="Menu Icon" />
                    </div>
                    <div style={{ display: "flex", gap: 24, height: 40, marginRight: 24 }}>
                        <Form className="d-flex">
                            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <div className="user" style={{ display: "flex", paddingRight: 40 }}>
                            <img src="./images/img_photo3.png" alt="User Photo" style={{ width: "36px", height: "36px" }} />
                            <Navbar.Collapse id="navbar-dark-example">
                                <Nav>
                                    <NavDropdown id="nav-dropdown-dark-example" title={<User />} menuVariant="dark">
                                        <NavDropdown.Item onClick={handleLogout}>Keluar</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </div>
                </Navbar>
            </Container>
        </UserProvider>
    );
};

export default AdminNavTop;
