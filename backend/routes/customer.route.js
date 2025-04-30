import express from "express";
import { startSession, endSession, joinMember, deleteCustomer, cancelMember, refreshToken  } from "../controllers/customer.controller.js";
import { protectRoute, customerProtectRoute, adminRoute } from "../middleware/auth.middleware.js";

const router = express.Router();
console.log("Customer Route Running");

router.post("/", startSession);
router.post("/join-member", joinMember);
router.post("/end", endSession);
router.post("/refresh-token", refreshToken);
router.post("/cancel-member", customerProtectRoute, cancelMember);
router.delete("/:id", protectRoute, adminRoute, deleteCustomer);

export default router;