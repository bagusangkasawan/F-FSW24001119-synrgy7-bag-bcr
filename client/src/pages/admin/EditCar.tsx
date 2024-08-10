import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import AdminNavTop from "../../components/AdminNavTop";
import AdminSideNav from "../../components/AdminSideNav";
import Breadcumb from "../../components/Breadcumb";
import { toast } from "react-toastify";

interface CarForm {
    name: string;
    harga: number;
    foto: File | null;
}

const EditCar: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Extract id from URL params
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const [formData, setFormData] = useState<CarForm>({
        name: "",
        harga: 0,
        foto: null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        setFormData((prevFormData) => ({
            ...prevFormData,
            foto: file || null,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();
            formDataToSend.append("name", formData.name);
            formDataToSend.append("harga", String(formData.harga));
            if (formData.foto) {
                formDataToSend.append("foto", formData.foto);
            }

            const response = await fetch(`http://localhost:8686/api/v1/cars/edit/${id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formDataToSend,
            });

            if (response.ok) {
                toast.success("Car edited successfully");
                navigate("/dashboard");
            } else {
                toast.error("Failed to edit car");
            }
        } catch (error) {
            console.error("Error editing car:", error);
            toast.error("Error editing car");
        }
    };

    return (
        <Container fluid>
            <Row>
                <Col md={2}>
                    <AdminSideNav />
                </Col>
                <Col md={10}>
                    <AdminNavTop />
                    <Breadcumb />
                    <header style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                        <h2>Edit Car</h2>
                    </header>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="harga" className="form-label">
                                Price
                            </label>
                            <input type="number" className="form-control" id="harga" name="harga" value={formData.harga} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="foto" className="form-label">
                                Photo Upload
                            </label>
                            <input type="file" className="form-control" id="foto" name="foto" onChange={handleFileChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Save Changes
                        </button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default EditCar;
