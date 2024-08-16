import React, { useState } from "react";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AppBar: React.FC = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();
    const routeChange = () => {
        const path = "/register";
        navigate(path);
    };
    const navLinks = (
        <>
            <Nav.Link href="#home">Our Service</Nav.Link>
            <Nav.Link href="#link">Why Us</Nav.Link>
            <Nav.Link href="#link">Testimonial</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>
            <Nav.Link href="#link">
                <Button variant="success" onClick={routeChange}>
                    Register
                </Button>
            </Nav.Link>
        </>
    );

    return (
        <Navbar expand="md">
            <Container className="align-items-center container-lg">
                <Navbar.Brand href="/">
                    <img src="https://res.cloudinary.com/dcyojno0c/image/upload/v1718440118/assets/logo_zdzs2w.png" width="100" height="34" className="d-inline-block align-top" alt="BCR Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
                <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-flex">
                    <Nav className="ms-auto align-items-center">{navLinks}</Nav>
                </Navbar.Collapse>
                <Offcanvas show={show} onHide={handleClose} id="offcanvasNavbar" className="d-lg-none" placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>BCR</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="ms-auto">{navLinks}</Nav>
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </Navbar>
    );
};

export default AppBar;
