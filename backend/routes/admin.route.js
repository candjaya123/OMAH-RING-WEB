import express from "express";
import { adminLogin as login,getAllAdmins, deleteManyAdmins, updateAdmin, adminSignup as signup, adminLogout as logout, adminGetProfile as getProfile, refreshToken  } from "../controllers/admin.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();
console.log("Admin Route Running");

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh-token", refreshToken); 
router.get("/profile", protectRoute, getProfile);
router.get("/", getAllAdmins);
router.put("/:id", updateAdmin);
router.post("/delete-many", deleteManyAdmins)

export default router;