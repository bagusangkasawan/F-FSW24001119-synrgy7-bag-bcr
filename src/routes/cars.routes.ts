import { Router } from "express";
import { handleHome, handleCreate, handleDelete, handleUpdate, handleDetail } from "../handlers/car.handler";
import { Upload } from "../middlewares/multer.config";

const router = Router();

// Method POST -> Create new data cars
router.post("/create", Upload.single("foto"), handleCreate);

// Method GET -> Read data cars
router.get("/", handleHome);

// GET specific data cars
router.get("/:id", handleDetail);

// Method PUT -> Update data cars
router.put("/edit/:id", Upload.single("foto"),handleUpdate);

// Method DELETE -> Delete data cars
router.delete("/delete/:id", handleDelete);

export default router;
