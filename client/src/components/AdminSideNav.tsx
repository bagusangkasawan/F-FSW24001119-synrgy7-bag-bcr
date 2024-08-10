import React from "react";
import { Row, Col } from "react-bootstrap";

const AdminSideNav: React.FC = () => {
    return (
        <>
            <Row style={{ height: "100%" }}>
                <Col style={{ backgroundColor: "#0D28A6", width: "70px", padding: 0, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div className="" style={{ padding: "18px" }}>
                        <img src=".\images\logo_login.png" alt="" width={34} height={34} />
                    </div>

                    <div style={{ display: "block", color: "white", height: "100vh" }}>
                        <div className="" style={{ height: "64px", alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column" }}>
                            <img src=".\images\fi_home.png" alt="" />
                            <p>Dashboard</p>
                        </div>
                        <div className="" style={{ height: "64px", alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column", backgroundColor: "#FFFFFF4D" }}>
                            <img src=".\images\fi_truck.png" alt="" />
                            <p>Cars</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="" style={{ padding: "18px" }}>
                        <img src=".\images\logo_login.png" alt="" width={100} height={34} />
                    </div>
                    <div className="title" style={{ height: "42px" }}>
                        <h2>Cars</h2>
                    </div>
                    <div className="menu-item" style={{ height: "42px", backgroundColor: "#CFD4ED", display: "flex", alignItems: "center", fontWeight: 700, fontSize: 14 }}>
                        <p>List Cars</p>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default AdminSideNav;
