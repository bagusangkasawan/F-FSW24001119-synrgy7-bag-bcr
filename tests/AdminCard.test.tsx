import { render, screen } from "@testing-library/react";
import AdminCard from "../src/components/AdminCard";
import { BrowserRouter } from "react-router-dom";

const mockOnDelete = jest.fn();

const car = {
    id: "1",
    name: "Car Name",
    harga: "100000",
    foto: "car.jpg",
    start_rent: "",
    finish_rent: "",
    created_at: "",
    updated_at: "",
    created_by: "",
    updated_by: "",
};
test("renders AdminCard with delete and edit buttons", () => {
    render(
        <BrowserRouter>
            <AdminCard car={car} onDelete={mockOnDelete} />
        </BrowserRouter>
    );

    const deleteButton = screen.getByRole("button", { name: /Delete/i });
    expect(deleteButton).toBeTruthy();

    const editButton = screen.getByRole("button", { name: /Edit/i });
    expect(editButton).toBeTruthy();
});
