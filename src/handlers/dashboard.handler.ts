import { Request, Response } from "express";

export const handleDashboard = (req: Request, res: Response) => {
    res.status(200).json({
        status: "OK",
        message: "Ini halaman dashboard",
    });
};
