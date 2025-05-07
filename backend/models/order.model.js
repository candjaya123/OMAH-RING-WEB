import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    items: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        name: String,
        quantity: Number,
        price: Number,
        variantOptions: {
          type: Map,
          of: String,
        },
      },
    ],
    total: { type: Number, required: true },
    status: {
      type: String,
      enum: ["menunggu pembayaran", "diproses", "dikirim", "selesai", "dibatalkan"],
      default: "menunggu pembayaran",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;