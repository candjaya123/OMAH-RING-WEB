import Order from "../models/order.model.js";
import Customer from "../models/customer.model.js";

export const createOrder = async (req, res) => {
  try {
    const { name, phoneNumber, address, items, total } = req.body;

    // Cari atau buat customer
    let customer = await Customer.findOne({ name, phoneNumber });

    if (!customer) {
      customer = new Customer({
        name,
        phoneNumber,
        addresses: [address],
      });
      await customer.save();
    }

    // Buat order baru
    const order = new Order({
      customer: customer._id,
      items,
      total,
      status: "menunggu pembayaran",
    });

    await order.save();

    res.status(201).json({
      message: "Order berhasil dibuat",
      orderId: order._id,
    });
  } catch (error) {
    console.error("Error creating order:", error.message);
    res.status(500).json({ message: "Gagal membuat order", error: error.message });
  }
};

export const getOrdersByCustomer = async (req, res) => {
  const { name, phoneNumber } = req.query;
  try {
    const customer = await Customer.findOne({ name, phoneNumber });

    if (!customer) {
      return res.status(404).json({ message: "Customer tidak ditemukan" });
    }

    const orders = await Order.find({ customer: customer._id }).sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Gagal mengambil order", error: error.message });
  }
};

export const getOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findById(id).populate("customer").populate("items.productId");

    if (!order) {
      return res.status(404).json({ message: "Order tidak ditemukan" });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Gagal mengambil detail order", error: error.message });
  }
};

export const updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({ message: "Order tidak ditemukan" });
    }

    order.status = status;
    await order.save();

    res.json({ message: "Status order diperbarui", order });
  } catch (error) {
    res.status(500).json({ message: "Gagal update status", error: error.message });
  }
};
