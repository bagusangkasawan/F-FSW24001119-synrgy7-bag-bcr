import { Request, Response } from "express";
import { CarModel } from "../models/Car.Model";
import { uploadToCloudinary } from "../utils/uploadCloudinary";

export const handleHome = async (_req: Request, res: Response) => {
    const cars = await CarModel.query();
    return res.json({
        message: "Data cars ditemukan",
        cars,
    });
};

export const handleDetail = async (req: Request, res: Response) => {
    try {
        const getId: number = Number(req.params.id);
        const cars = await CarModel.query().findById(getId).throwIfNotFound();
        return res.status(200).json({
            message: "Data ditemukan",
            cars,
        });
    } catch (error) {
        res.status(404).json({
            message: "Data cars not found",
        });
    }
};

export const handleCreate = async (req: Request, res: Response) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }

    try {
        const { name, harga } = req.body;
        if (!name || !harga) {
            return res.status(400).json({ message: "Name and harga are required" });
        }
        const fileBuffer = req.file.buffer;
        const fotoUrl = await uploadToCloudinary(fileBuffer, "Challenge_5");
        const newCar = await CarModel.query().insertGraph({
            name,
            harga: parseFloat(harga),
            foto: fotoUrl,
            start_rent: new Date(),
            finish_rent: new Date(),
            created_at: new Date(),
            updated_at: new Date(),
        } as any);
        res.status(201).json({
            message: "Data mobil baru berhasil dibuat",
            car: newCar,
        });
    } catch (error) {
        res.status(500).json({
            message: "Data mobil baru gagal dibuat",
            error: (error as Error).message,
        });
    }
};

export const handleUpdate = async (req: Request, res: Response) => {
    try {
        const id = +req.params.id;
        const { name, harga } = req.body;
        const updatedData: Partial<CarModel> = {
            name,
            harga: harga ? parseFloat(harga) : undefined,
            updated_at: new Date(),
        };
        if (req.file) {
            const fileBuffer = req.file.buffer;
            const fotoUrl = await uploadToCloudinary(fileBuffer, "Challenge_5");
            updatedData.foto = fotoUrl;
        }
        const updatedCar = await CarModel.query().patchAndFetchById(id, updatedData);
        if (!updatedCar) {
            return res.status(404).json({ message: "Car not found" });
        }
        res.status(200).json({ message: "Car updated successfully", car: updatedCar });
    } catch (error) {
        res.status(500).json({ message: "Failed to update car", error: (error as Error).message });
    }
};

export const handleDelete = async (req: Request, res: Response) => {
    try {
        const getId: number = Number(req.params.id);
        const cars = await CarModel.query().deleteById(getId).throwIfNotFound();
        return res.status(202).json({
            status: "OK",
            message: "Data cars berhasil dihapus",
        });
    } catch (error) {
        return res.status(400).json({
            status: "Bad",
            message: "Data cars gagal dihapus",
        });
    }
};
