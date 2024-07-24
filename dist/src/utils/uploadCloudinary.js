"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadToCloudinary = void 0;
const stream_1 = require("stream");
const cloudinary_config_1 = __importDefault(require("../config/cloudinary.config"));
const uploadToCloudinary = (fileBuffer, folder) => {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary_config_1.default.uploader.upload_stream({ folder }, (error, result) => {
            if (error)
                return reject(error);
            if (result === null || result === void 0 ? void 0 : result.secure_url) {
                resolve(result.secure_url);
            }
            else {
                reject(new Error("No secure_url returned from Cloudinary"));
            }
        });
        stream_1.Readable.from(fileBuffer).pipe(uploadStream);
    });
};
exports.uploadToCloudinary = uploadToCloudinary;
//# sourceMappingURL=uploadCloudinary.js.map