"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const car_handler_1 = require("../handlers/car.handler");
const multer_config_1 = require("../middlewares/multer.config");
const router = (0, express_1.Router)();
// Method POST -> Create new data cars
router.post("/create", multer_config_1.Upload.single("foto"), car_handler_1.handleCreate);
// Method GET -> Read data cars
router.get("/", car_handler_1.handleHome);
// GET specific data cars
router.get("/:id", car_handler_1.handleDetail);
// Method PUT -> Update data cars
router.put("/edit/:id", multer_config_1.Upload.single("foto"), car_handler_1.handleUpdate);
// Method DELETE -> Delete data cars
router.delete("/delete/:id", car_handler_1.handleDelete);
exports.default = router;
//# sourceMappingURL=cars.routes.js.map