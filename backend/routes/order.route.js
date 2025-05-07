import express from "express";
import {
  createOrder,
  getOrdersByCustomer,
  getOrderById,
  updateOrderStatus,
} from "../controllers/order.controller.js";

const router = express.Router();

router.post("/", createOrder); // buat order
router.get("/", getOrdersByCustomer); // cari order berdasarkan nama + hp
router.get("/:id", getOrderById); // detail 1 order
router.put("/:id/status", updateOrderStatus); // update status (admin)

export default router;