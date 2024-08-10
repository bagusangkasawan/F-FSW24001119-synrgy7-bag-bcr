import React from "react";
import { useNavigate } from "react-router-dom";

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

interface AdminCardProps {
    car: Car;
    onDelete: (id: string) => void;
}

const AdminCard: React.FC<AdminCardProps> = ({ car, onDelete }) => {
    const navigate = useNavigate();

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this car?")) {
            onDelete(car.id);
        }
    };

    const handleEdit = () => {
        navigate(`/editCar/${car.id}`);
    };

    const { name, harga, foto, updated_at } = car;

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={foto} alt={name} />
            <div className="card-body search-result">
                <div className="top">
                    <p className="body-regular-14">{name}</p>
                    <p className="title-bold-16">Rp{harga}/Hari</p>
                </div>
                <p>
                    <img src="./images/fi_clock.png" height="20px" alt="Update time" />
                    Updated at: {updated_at}
                </p>
            </div>
            <button className="btn btn-danger body-bold-14" onClick={handleDelete}>
                Delete
            </button>
            <button className="btn btn-success body-bold-14" onClick={handleEdit}>
                Edit
            </button>
        </div>
    );
};

export default AdminCard;
