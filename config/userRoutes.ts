import { Router } from "express";
import { buatAdmin, cekUser, loginByAdmin, loginByMember, loginBySuperAdmin, register } from "../app/controllers/api/v1/authController";
import { checkSuperAdmin, whoAmI } from "../app/middlewares/auth";

const router = Router();
router.post("/superAdmin/login", loginBySuperAdmin);
router.post("/admin/login", loginByAdmin);
router.get("/currentUser", whoAmI, cekUser);
router.post("/member/login", loginByMember);
router.post("/member/register", register);
router.post("/superAdmin/createAdmin", checkSuperAdmin, buatAdmin);

export default router;
