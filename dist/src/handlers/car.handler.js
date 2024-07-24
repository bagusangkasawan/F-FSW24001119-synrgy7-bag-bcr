"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDelete = exports.handleUpdate = exports.handleCreate = exports.handleDetail = exports.handleHome = void 0;
const Car_Model_1 = require("../models/Car.Model");
const uploadCloudinary_1 = require("../utils/uploadCloudinary");
const handleHome = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cars = yield Car_Model_1.CarModel.query();
    return res.json({
        message: "Data cars ditemukan",
        cars,
    });
});
exports.handleHome = handleHome;
const handleDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getId = Number(req.params.id);
        const cars = yield Car_Model_1.CarModel.query().findById(getId).throwIfNotFound();
        return res.status(200).json({
            message: "Data ditemukan",
            cars,
        });
    }
    catch (error) {
        res.status(404).json({
            message: "Data cars not found",
        });
    }
});
exports.handleDetail = handleDetail;
const handleCreate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }
    try {
        const { name, harga } = req.body;
        if (!name || !harga) {
            return res.status(400).json({ message: "Name and harga are required" });
        }
        const fileBuffer = req.file.buffer;
        const fotoUrl = yield (0, uploadCloudinary_1.uploadToCloudinary)(fileBuffer, "Challenge_5");
        const newCar = yield Car_Model_1.CarModel.query().insertGraph({
            name,
            harga: parseFloat(harga),
            foto: fotoUrl,
            start_rent: new Date(),
            finish_rent: new Date(),
            created_at: new Date(),
            updated_at: new Date(),
        });
        res.status(201).json({
            message: "Data mobil baru berhasil dibuat",
            car: newCar,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Data mobil baru gagal dibuat",
            error: error.message,
        });
    }
});
exports.handleCreate = handleCreate;
const handleUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = +req.params.id;
        const { name, harga } = req.body;
        const updatedData = {
            name,
            harga: harga ? parseFloat(harga) : undefined,
            updated_at: new Date(),
        };
        if (req.file) {
            const fileBuffer = req.file.buffer;
            const fotoUrl = yield (0, uploadCloudinary_1.uploadToCloudinary)(fileBuffer, "Challenge_5");
            updatedData.foto = fotoUrl;
        }
        const updatedCar = yield Car_Model_1.CarModel.query().patchAndFetchById(id, updatedData);
        if (!updatedCar) {
            return res.status(404).json({ message: "Car not found" });
        }
        res.status(200).json({ message: "Car updated successfully", car: updatedCar });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to update car", error: error.message });
    }
});
exports.handleUpdate = handleUpdate;
const handleDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getId = Number(req.params.id);
        const cars = yield Car_Model_1.CarModel.query().deleteById(getId).throwIfNotFound();
        return res.status(202).json({
            status: "OK",
            message: "Data cars berhasil dihapus",
        });
    }
    catch (error) {
        return res.status(400).json({
            status: "Bad",
            message: "Data cars gagal dihapus",
        });
    }
});
exports.handleDelete = handleDelete;
//# sourceMappingURL=car.handler.js.map