import React, { useState, useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
import { Container, Row } from "react-bootstrap";

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
    available: boolean;
    availableAt: string;
}

const SearchBar: React.FC = () => {
    const [formData, setFormData] = useState({
        driverType: "",
        date: "",
        time: "",
        passengers: "",
    });

    const [dateType, setDateType] = useState<"text" | "date">("text");
    const [timeType, setTimeType] = useState<"text" | "time">("text");
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const [cars, setCars] = useState<Car[]>([]);
    const [filteredCars, setFilteredCars] = useState<Car[]>([]);

    const driverInput = useRef<HTMLSelectElement>(null);
    const dateInput = useRef<HTMLInputElement>(null);
    const timeInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const { driverType, date, time } = formData;
        setIsButtonEnabled(driverType !== "" && date !== "" && time !== "");
    }, [formData]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json");
                const data = await response.json();
                localStorage.setItem("CARS", JSON.stringify(data));
                setCars(data);
            } catch (error) {
                console.error("Error fetching car data:", error);
            }
        };

        const localData = localStorage.getItem("CARS");
        if (localData) {
            setCars(JSON.parse(localData));
        } else {
            fetchData();
        }
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const handleSearch = () => {
        const { date, time, passengers } = formData;
        const orderDate = new Date(date + "T" + time + ":00.000Z");
        const seat = +passengers;

        const filtered = cars.filter((car) => new Date(car.availableAt) < orderDate && car.capacity >= seat);
        setFilteredCars(filtered);
    };

    return (
        <>
            <div className="search-component">
                <div className="search-wrapper">
                    <div className="tipe-driver">
                        <label htmlFor="driverType">Tipe Driver</label>
                        <select id="driverType" value={formData.driverType} onChange={handleInputChange} ref={driverInput}>
                            <option disabled value="" hidden className="body-light-12">
                                Pilih Tipe Driver
                            </option>
                            <option value="Dengan sopir" className="optionEl">
                                Dengan Driver
                            </option>
                            <option value="Tanpa sopir" className="optionEl">
                                Tanpa Driver (Lepas Kunci)
                            </option>
                        </select>
                    </div>
                    <div className="tanggal-pemesanan">
                        <label htmlFor="date">
                            Tanggal
                            <input
                                type={dateType}
                                id="date"
                                placeholder="Pilih Tanggal"
                                onFocus={() => setDateType("date")}
                                onBlur={() => setDateType("text")}
                                value={formData.date}
                                onChange={handleInputChange}
                                ref={dateInput}
                                className="body-light-12"
                            />
                        </label>
                    </div>
                    <div className="waktu-pemesanan">
                        <label htmlFor="time">Waktu Jemput/Ambil</label>
                        <input
                            type={timeType}
                            id="time"
                            placeholder="Pilih Waktu"
                            onFocus={() => setTimeType("time")}
                            onBlur={() => setTimeType("text")}
                            value={formData.time}
                            onChange={handleInputChange}
                            ref={timeInput}
                            className="body-light-12"
                        />
                    </div>
                    <div className="jumlah-penumpang">
                        <label htmlFor="passengers">Jumlah Penumpang (optional)</label>
                        <input id="passengers" maxLength={1} placeholder="Jumlah Penumpang" value={formData.passengers} onChange={handleInputChange} className="body-light-12" />
                    </div>
                    <button className="btn btn-success body-bold-14" id="search-btn" onClick={handleSearch} disabled={!isButtonEnabled}>
                        Cari Mobil
                    </button>
                </div>
            </div>
            <div id="cars-container">
                <Container>
                    <Row style={{ display: "flex", justifyContent: "center", gap: "24px" }}>
                        {filteredCars.map((car) => (
                            <ProductCard key={car.id} car={car} />
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default SearchBar;
