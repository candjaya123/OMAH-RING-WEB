import express from "express";
import {
	checkoutOrder,
	lookupOrders,
	getAllOrders,
	updateOrderStatus,
} from "../controllers/order.controller.js";

const router = express.Router();

router.post("/checkout", checkoutOrder);
router.post("/lookup", lookupOrders);
router.get("/", getAllOrders);
router.put("/:id/status", updateOrderStatus);

export default router;