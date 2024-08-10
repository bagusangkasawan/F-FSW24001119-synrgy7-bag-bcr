import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import AdminCard from "./AdminCard";
import { toast } from "react-toastify";

interface Car {
    id: string;
    name: string;
    harga: string;
    foto: string;
    start_rent: string;
    finish_rent: string;
    created_at: string;
    updated_at: string;
    created_by: string;
    updated_by: string;
}

const AdminListCar: React.FC = () => {
    const [cars, setCars] = useState<Car[]>([]);

    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = async () => {
        try {
            const response = await fetch("http://localhost:8686/api/v1/cars");
            if (!response.ok) {
                throw new Error("Failed to fetch cars");
            }
            const data = await response.json();
            console.log("Fetched data:", data); // Debugging line
            setCars(data.resp);
            localStorage.setItem("cars", JSON.stringify(data.resp));
        } catch (error) {
            console.error("Error fetching car data:", error);
        }
    };

    const handleDelete = async (id: string) => {
        const token = localStorage.getItem("token");
        try {
            const response = await fetch(`http://localhost:8686/api/v1/cars/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
            if (response.ok) {
                toast.success("Car deleted successfully");
                fetchCars(); // Refetch cars after successful deletion
            } else {
                toast.error("Failed to delete car");
            }
        } catch (error) {
            console.error("Error deleting car:", error);
            toast.error("Error deleting car");
        }
    };

    return (
        <div id="cars-container">
            <Container>
                <Row className="d-flex justify-content-center" style={{ gap: "24px" }}>
                    {cars.map((car) => (
                        <AdminCard key={car.id} car={car} onDelete={handleDelete} />
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default AdminListCar;
