import React from "react";

interface Car {
    id: string;
    model: string;
    manufacture: string;
    rentPerDay: number;
    description: string;
    capacity: number;
    transmission: string;
    year: number;
    image: string;
}

interface ProductCardProps {
    car: Car;
}

const ProductCard: React.FC<ProductCardProps> = ({ car }) => {
    const { model, manufacture, rentPerDay, description, capacity, transmission, year, image } = car;

    return (
        <div className="card">
            <img className="card-img-top" src={image} alt={manufacture} />
            <div className="card-body search-result">
                <div className="top">
                    <p className="body-regular-14">{model}</p>
                    <p className="title-bold-16">Rp{rentPerDay}/Hari</p>
                    <p className="body-light-14">{description}</p>
                </div>
                <p>
                    <img src=".\images\fi_users.png" height="20px" alt="Users" />
                    {capacity} Orang
                </p>
                <p>
                    <img src=".\images\fi_settings.png" height="20px" alt="Settings" />
                    {transmission}
                </p>
                <p>
                    <img src=".\images\fi_calendar.png" height="20px" alt="Calendar" />
                    Tahun {year}
                </p>
            </div>
            <button className="btn btn-success body-bold-14">Pilih Mobil</button>
        </div>
    );
};

export default ProductCard;
