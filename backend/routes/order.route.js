import express from "express";
import {
	checkoutOrder,
	lookupOrders,
	updateOrderStatus,
} from "../controllers/order.controller.js";

const router = express.Router();

router.post("/checkout", checkoutOrder);
router.post("/lookup", lookupOrders);
router.put("/:id/status", updateOrderStatus);

export default router;