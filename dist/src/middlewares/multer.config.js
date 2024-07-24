"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload = void 0;
const multer_1 = __importDefault(require("multer"));
const validateFileType = (allowedMimeTypes) => {
    return (req, file, cb) => {
        if (allowedMimeTypes.includes(file.mimetype)) {
            cb(null, true);
        }
        else {
            const err = new Error(`Only accepted file with type ${allowedMimeTypes.join(", ")}`);
            cb(err, false);
        }
    };
};
exports.Upload = (0, multer_1.default)({
    storage: multer_1.default.memoryStorage(),
    fileFilter: validateFileType(["image/bmp", "image/jpeg", "image/png", "image/gif"]),
    limits: { fileSize: 2000000 },
});
//# sourceMappingURL=multer.config.js.map