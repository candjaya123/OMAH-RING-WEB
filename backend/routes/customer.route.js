import express from "express";
import { startSession, endSession, updateCustomer, getAllCustomers, joinMember, deleteCustomer, cancelMember, refreshToken  } from "../controllers/customer.controller.js";
import { protectRoute, customerProtectRoute, adminRoute } from "../middleware/auth.middleware.js";

const router = express.Router();
console.log("Customer Route Running");

router.get("/", getAllCustomers);
router.post("/", startSession);
router.post("/join-member", joinMember);
router.post("/end", endSession);
router.post("/refresh-token", refreshToken);

router.post("/cancel-member", customerProtectRoute, cancelMember);
router.delete("/:id", protectRoute, adminRoute, deleteCustomer);

router.put("/:id", updateCustomer);

export default router;