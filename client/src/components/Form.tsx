import React, { useState } from "react";

interface CarForm {
    name: string;
    harga: number;
    foto: string | null;
}

interface FormProps {
    onSubmit: (formData: CarForm) => void; // Callback for form submission
    submitButtonText: string; // Text for submit button (e.g., "Add Car", "Update Car")
}

const Form: React.FC<FormProps> = ({ onSubmit, submitButtonText }) => {
    const [formData, setFormData] = useState<CarForm>({
        name: "",
        harga: 0,
        foto: null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setFormData({
                ...formData,
                foto: URL.createObjectURL(file),
            });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="harga">Rent Per Day</label>
                <input type="number" id="harga" name="harga" value={formData.harga} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="foto">Foto</label>
                <input type="file" id="foto" name="foto" accept="image/*" onChange={handleFotoChange} required />
                {formData.foto && <img src={formData.foto} alt="Car" width="100" />}
            </div>
            <button type="submit">{submitButtonText}</button>
        </form>
    );
};

export default Form;
