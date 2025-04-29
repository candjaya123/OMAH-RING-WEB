import mongoose from "mongoose";

const variantSchema = new mongoose.Schema({
	options: {
		type: Map, // misalnya { "Ukuran": "M", "Warna": "Hitam" }
		of: String,
		required: true,
	},
	stock: {
		type: Number,
		required: true,
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
			required: true,
		},
		image: {
			type: String,
			// required: [true, "Image is required"],
		},
		category: {
			type: String,
			required: true,
		},
        variants: [variantSchema],
	},
	{ timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;