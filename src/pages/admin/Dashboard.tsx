import React from "react";
import AdminNavTop from "../../components/AdminNavTop";
import { Row, Col, Container, Button } from "react-bootstrap";
import AdminSideNav from "../../components/AdminSideNav";
import Breadcumb from "../../components/Breadcumb";
import AdminListCar from "../../components/AdminListCar";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
    const navigate = useNavigate();

    const handleAdd = () => {
        navigate("/addCar");
    };

    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={2}>
                        <AdminSideNav></AdminSideNav>
                    </Col>
                    <Col md={10}>
                        <AdminNavTop></AdminNavTop>
                        <Breadcumb></Breadcumb>
                        <header style={{ display: "flex", justifyContent: "space-between" }}>
                            <h2>List Car</h2>
                            <Button onClick={handleAdd}>+ Add new car</Button>
                        </header>
                        <div className="filter-button" style={{ display: "flex", gap: 16, marginTop: 24, marginBottom: 24 }}>
                            <Button style={{ backgroundColor: "#CFD4ED", color: "#0D28A6", fontWeight: 800, borderColor: "#AEB7E1" }}>All</Button>
                            <Button style={{ backgroundColor: "#FFFFFF", color: "#AEB7E1", borderColor: "#AEB7E1" }}>Small</Button>
                            <Button style={{ backgroundColor: "#FFFFFF", color: "#AEB7E1", borderColor: "#AEB7E1" }}>Medium</Button>
                            <Button style={{ backgroundColor: "#FFFFFF", color: "#AEB7E1", borderColor: "#AEB7E1" }}>Large</Button>
                        </div>
                        <AdminListCar></AdminListCar>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Dashboard;
