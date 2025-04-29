import express from "express";
import {
	createProduct,
	deleteProduct,
	getAllProducts,
	getProductsByCategory,
	getRecommendedProducts,
    searchProduct,
} from "../controllers/product.controller.js";
import { protectRoute } from "../middleware/admin.middleware.js"; 

const router = express.Router();
console.log("Product Route Running");

router.get("/", getAllProducts);
router.get("/category/:category", getProductsByCategory);
router.get("/search", searchProduct);
router.get("/recommendations", getRecommendedProducts);
router.post("/", protectRoute, createProduct);
router.delete("/:id", protectRoute, deleteProduct);

export default router; 