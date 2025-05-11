import Order from "../models/order.model.js";
import Cart from "../models/cart.model.js";
import Customer from "../models/customer.model.js";


export const checkoutOrder = async (req, res) => {
	try {
		const { cartId, customerInfo, paymentMethod, shippingAddress } = req.body;

		// Ambil cart dan populate produk dari setiap item
		const cart = await Cart.findById(cartId).populate("items.productId");

		if (!cart || cart.items.length === 0) {
			return res.status(400).json({ message: "Keranjang kosong atau tidak ditemukan" });
		}

		// Cek apakah customer sudah ada
		let customer = await Customer.findOne({
			name: customerInfo.name,
			phoneNumber: customerInfo.phoneNumber,
		});

		// Jika belum ada, buat customer baru
		if (!customer) {
			customer = new Customer({
				name: customerInfo.name,
				phoneNumber: customerInfo.phoneNumber,
				addresses: [shippingAddress],
			});
			await customer.save();
		}

		// Buat list item untuk order
		const orderItems = cart.items.map((item) => ({
			product: item.productId._id,
			quantity: item.quantity,
			price: item.productId.price,
		}));

		// Hitung total
		const totalAmount = orderItems.reduce(
			(acc, item) => acc + item.quantity * item.price,
			0
		);

		// Buat order
		const order = new Order({
			customer: customer._id,
			items: orderItems,
			totalAmount,
			status: paymentMethod === "transfer" ? "menunggu_pembayaran" : "terbayar",
			paymentMethod,
			shippingAddress,
		});

		await order.save();

		// Kosongkan keranjang
		cart.items = [];
		await cart.save();

		res.status(201).json({ message: "Order berhasil dibuat", order });

	} catch (error) {
		console.error("Checkout error:", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const lookupOrders = async (req, res) => { //case sensitif
	try {
		const { name, phoneNumber } = req.body;

		if (!name || !phoneNumber) {
			return res.status(400).json({ message: "Nama dan nomor telepon wajib diisi" });
		}

		const customer = await Customer.findOne({ name, phoneNumber });

		if (!customer) {
			return res.status(404).json({ message: "Customer tidak ditemukan" });
		}

		const orders = await Order.find({ customer: customer._id })
			.populate("items.product")
			.sort({ createdAt: -1 });

		res.json({ customer, orders });
	} catch (error) {
		console.error("Lookup error:", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const getAllOrders = async (req, res) => {
	try {
		const orders = await Order.find({})
			.populate("customer")
			.populate("items.product")
			.sort({ createdAt: -1 });

		res.json({ orders });
	} catch (error) {
		console.error("Get all orders error:", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const updateOrderStatus = async (req, res) => {
	try {
		const { id } = req.params;
		const { status } = req.body;

		const validStatuses = ["menunggu_pembayaran", "terbayar", "dikirim", "selesai"];
		if (!validStatuses.includes(status)) {
			return res.status(400).json({ message: "Status tidak valid" });
		}

		const order = await Order.findById(id);
		if (!order) {
			return res.status(404).json({ message: "Order tidak ditemukan" });
		}

		order.status = status;
		await order.save();

		res.json({ message: "Status order berhasil diperbarui", order });
	} catch (error) {
		console.error("Update status error:", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};
