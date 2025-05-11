import cloudinary from "../lib/cloudinary.js";
import Product from "../models/product.model.js";

export const getAllProducts = async (req, res) => {
	try {
		const products = await Product.find({});
		res.json({ products });
	} catch (error) {
		console.log("Error in getAllProducts controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const searchProduct = async (req, res) => {
	const { keyword } = req.query;
	try {
		const products = await Product.find({
			name: { $regex: keyword, $options: "i" },
		});
		res.json(products);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const getProductsByCategory = async (req, res) => {
	const { category } = req.params;
	try {
		const products = await Product.find({ category });
		res.json({ products });
	} catch (error) {
		console.log("Error in getProductsByCategory controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const getRecommendedProducts = async (req, res) => {
	try {
		const products = await Product.aggregate([
			{ $sample: { size: 4 } },
			{
				$project: {
					_id: 1,
					name: 1,
					description: 1,
					image: 1,
					price: 1,
				},
			},
		]);
		res.json(products);
	} catch (error) {
		console.log("Error in getRecommendedProducts controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const createProduct = async (req, res) => {
	try {
		const { name, description, price, stock, image, category, variants } = req.body;
		let cloudinaryResponse = null;

		if (image) {
			cloudinaryResponse = await cloudinary.uploader.upload(image, { folder: "products" });
		}

		const product = await Product.create({
			name,
			description,
			price: variants && variants.length > 0 ? undefined : price,
			stock: variants && variants.length > 0 ? undefined : stock,
			image: cloudinaryResponse?.secure_url || "",
			category,
			variants,
		});

		res.status(201).json(product);
	} catch (error) {
		console.log("Error in createProduct controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const deleteProduct = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		if (!product) {
			return res.status(404).json({ message: "Product not found" });
		}

		if (product.image) {
			const publicId = product.image.split("/").pop().split(".")[0];
			try {
				await cloudinary.uploader.destroy(`products/${publicId}`);
				console.log("Deleted image from Cloudinary");
			} catch (error) {
				console.log("Error deleting image from Cloudinary", error);
			}
		}

		await Product.findByIdAndDelete(req.params.id);

		res.json({ message: "Product deleted successfully" });
	} catch (error) {
		console.log("Error in deleteProduct controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};
export const deleteManyProducts = async (req, res) => {
	try {
		const { ids } = req.body; // array of product IDs

		if (!Array.isArray(ids) || ids.length === 0) {
			return res.status(400).json({ message: "No product IDs provided" });
		}

		const products = await Product.find({ _id: { $in: ids } });

		for (const product of products) {
			if (product.image) {
				const publicId = product.image.split("/").pop().split(".")[0];
				try {
					await cloudinary.uploader.destroy(`products/${publicId}`);
					console.log(`Deleted image for product ${product._id}`);
				} catch (err) {
					console.log(`Error deleting image for product ${product._id}:`, err.message);
				}
			}
		}

		await Product.deleteMany({ _id: { $in: ids } });

		res.json({ message: `${products.length} products deleted successfully` });
	} catch (error) {
		console.log("Error in deleteManyProducts controller:", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const updateProduct = async (req, res) => {
	try {
		const { id } = req.params;
		const { name, description, price, stock, image, category, variants } = req.body;

		const product = await Product.findById(id);
		if (!product) {
			return res.status(404).json({ message: "Product not found" });
		}

		// Update gambar jika berbeda
		if (image && image !== product.image) {
			if (product.image) {
				const publicId = product.image.split("/").pop().split(".")[0];
				try {
					await cloudinary.uploader.destroy(`products/${publicId}`);
				} catch (err) {
					console.log("Failed to delete old image:", err.message);
				}
			}
			const uploadResult = await cloudinary.uploader.upload(image, { folder: "products" });
			product.image = uploadResult.secure_url;
		}

		// Update field
		if (name) product.name = name;
		if (description) product.description = description;
		if (category) product.category = category;

		// Jika varian ada, simpan dan kosongkan price & stock global
		if (variants && variants.length > 0) {
			product.variants = variants;
			product.price = undefined;
			product.stock = undefined;
		} else {
			product.variants = [];
			if (price !== undefined) product.price = price;
			if (stock !== undefined) product.stock = stock;
		}

		const updated = await product.save();
		res.status(200).json({ message: "Produk berhasil diperbarui", product: updated });
	} catch (error) {
		console.error("Error in updateProduct controller:", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};
