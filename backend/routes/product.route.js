import express from "express";
import {
	createProduct,
	deleteProduct,
	deleteManyProducts,
	getAllProducts,
	getProductsByCategory,
	getRecommendedProducts,
    searchProduct,
	updateProduct,
} from "../controllers/product.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js"; 

const router = express.Router();
console.log("Product Route Running");

router.get("/", getAllProducts);
router.get("/category/:category", getProductsByCategory);
router.get("/search", searchProduct);
router.get("/recommendations", getRecommendedProducts);

//admin
router.post("/", createProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);
router.post("/delete-many", deleteManyProducts);

export default router; 