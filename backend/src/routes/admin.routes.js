import {Router} from "express";
import { loginAdmin } from "../controllers/admin/adminController.js";
const router = Router();    

//public routes
router.post("/login", loginAdmin);
export default router;