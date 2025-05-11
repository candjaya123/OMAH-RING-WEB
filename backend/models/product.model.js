import mongoose from "mongoose";

const variantSchema = new mongoose.Schema({
	options: {
		type: Map, // contoh: { "Ukuran": "M", "Warna": "Hitam" }
		of: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
		min: 0,
	},
	stock: {
		type: Number,
		required: true,
		min: 0,
	},
});

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			min: 0,
			// Optional: hanya digunakan jika tidak ada varian
		},
		stock: {
			type: Number,
			min: 0,
			// Optional: hanya digunakan jika tidak ada varian
		},
		image: {
			type: String,
		},
		category: {
			type: String,
			required: true,
		},
		variants: [variantSchema], // Jika ini tidak kosong, gunakan harga/stock dari varian
	},
	{ timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
