import { createAdmin, getUserByEmail } from "../../../services/userService";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

const saltRounds = 10;
const SECRET_KEY = "yangsuperadminaja";

export const cekUser = (req: Request, res: Response) => {
    const userData = req.user;
    res.json({ userData });
};

const checkPassword = (hashedPassword: string, password: string | Buffer) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hashedPassword, (err, isPasswordCorrect) => {
            if (!!err) {
                reject(err);
                return;
            }

            resolve(isPasswordCorrect);
        });
    });
};

const createToken = (payload: any): string => {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" }); // Token expires in 1 hour
};

export const loginBySuperAdmin = async (req: Request, res: Response) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await getUserByEmail(email);
    if (!user) {
        res.status(404).json({ message: "akun tidak ditemukan" });
        return;
    }
    const isPasswordCorrect = await checkPassword(user.password, password);
    if (!isPasswordCorrect) {
        res.status(401).json({ message: "Password salah!" });
        return;
    }
    const token = await createToken({
        id: user.id,
        nama: user.nama,
        email: user.email,
        role: user.role,
        createdAt: user.created_at,
        updatedAt: user.updated_at,
    });
    res.status(201).json({
        id: user.id,
        nama: user.nama,
        email: user.email,
        token: token,
        role: user.role,
        createdAt: user.created_at,
        updatedAt: user.updated_at,
    });
};

export const loginByAdmin = async (req: Request, res: Response) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await getUserByEmail(email);
    if (!user) {
        res.status(404).json({ message: "akun tidak ditemukan" });
        return;
    }
    const isPasswordCorrect = await checkPassword(user.password, password);
    if (!isPasswordCorrect) {
        res.status(401).json({ message: "Password salah!" });
        return;
    }
    const token = await createToken({
        id: user.id,
        nama: user.nama,
        email: user.email,
        role: user.role,
        createdAt: user.created_at,
        updatedAt: user.updated_at,
    });
    res.status(201).json({
        id: user.id,
        nama: user.nama,
        email: user.email,
        token: token,
        role: user.role,
        createdAt: user.created_at,
        updatedAt: user.updated_at,
    });
};

export const loginByMember = async (req: Request, res: Response) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = await getUserByEmail(email);
    if (!user) {
        res.status(404).json({ message: "akun tidak ditemukan" });
        return;
    }
    const isPasswordCorrect = await checkPassword(user.password, password);
    if (!isPasswordCorrect) {
        res.status(401).json({ message: "Password salah!" });
        return;
    }
    const token = await createToken({
        id: user.id,
        nama: user.nama,
        email: user.email,
        role: user.role,
        createdAt: user.created_at,
        updatedAt: user.updated_at,
    });
    res.status(201).json({
        id: user.id,
        nama: user.nama,
        email: user.email,
        token: token,
        role: user.role,
        createdAt: user.created_at,
        updatedAt: user.updated_at,
    });
};

const hashPassword = (password: string) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
            if (!!err) {
                reject(err);
                return;
            }

            resolve(hashedPassword);
        });
    });
};

export const buatAdmin = async (req: Request, res: Response) => {
    const { nama, email, password } = req.body;
    const role = "admin";

    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newAdmin = await createAdmin({ nama, email, password: hashedPassword, role, created_at: new Date(), updated_at: new Date() });
        return res.status(201).json({ message: "Admin user created successfully", user: newAdmin });
    } catch (error) {
        console.error("Error creating admin user:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const register = async (req: Request, res: Response) => {
    const { nama, email, password } = req.body;
    const role = "member";

    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newMember = await createAdmin({ nama, email, password: hashedPassword, role, created_at: new Date(), updated_at: new Date() });
        return res.status(201).json({ message: "Admin user created successfully", user: newMember });
    } catch (error) {
        console.error("Error creating admin user:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
