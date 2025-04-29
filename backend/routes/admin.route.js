import express from "express";
import { adminLogin as login, adminSignup as signup, adminLogout as logout, adminGetProfile as getProfile, refreshToken  } from "../controllers/admin.controller.js";
import { protectRoute } from "../middleware/admin.middleware.js";

const router = express.Router();
console.log("Admin Route Running");

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh-token", refreshToken); 
router.get("/profile", protectRoute, getProfile);

export default router;