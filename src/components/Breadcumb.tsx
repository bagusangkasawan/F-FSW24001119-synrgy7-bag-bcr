import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const Breadcumb: React.FC = () => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item href="/dashboard">Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item active>List Cars</Breadcrumb.Item>
        </Breadcrumb>
    );
};

export default Breadcumb;
