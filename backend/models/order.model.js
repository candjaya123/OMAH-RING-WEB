import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
	product: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Product", // Penting! Ini yang dibutuhkan populate
		required: true,
	},
	quantity: {
		type: Number,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
});

const addressSchema = new mongoose.Schema({
	jalan: String,
	kecamatan: String,
	kelurahan: String,
	kota: String,
	provisi: String,
	kodePos: String,
	negara: { type: String, default: "Indonesia" },
});

const orderSchema = new mongoose.Schema(
	{
		customer: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Customer",
			required: true,
		},
		items: [orderItemSchema],
		totalAmount: {
			type: Number,
			required: true,
		},
		status: {
			type: String,
			enum: ["menunggu_pembayaran", "terbayar", "dikirim", "selesai"],
			default: "menunggu_pembayaran",
		},
		paymentMethod: {
			type: String,
			enum: ["transfer", "cod"],
			required: true,
		},
		shippingAddress: addressSchema,
	},
	{ timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
