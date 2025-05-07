import { v4 as uuidv4 } from 'uuid';
import Cart from '../models/cart.model.js';
import Product from '../models/product.model.js';

// Helper: ambil atau buat cartId dari cookie
const getOrCreateCartId = (req, res) => {
  let cartId = req.cookies.cartId;
  if (!cartId) {
    cartId = uuidv4();
    res.cookie('cartId', cartId, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7 // 7 hari
    });
  }
  return cartId;
};

// GET /cart → ambil isi cart
export const getCartProducts = async (req, res) => {
  const cartId = getOrCreateCartId(req, res);
  const cart = await Cart.findById(cartId).populate('items.productId');
  if (!cart) return res.json({ items: [] });

  const items = cart.items.map(item => ({
    _id: item._id,
    productId: item.productId._id,
    name: item.productId.name,
    price: item.productId.price,
    quantity: item.quantity
  }));

  res.json({ items });
};

// POST /cart → tambah item ke cart
export const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const cartId = getOrCreateCartId(req, res);

  let cart = await Cart.findById(cartId);
  if (!cart) {
    cart = new Cart({ _id: cartId, items: [] });
  }

  const existingItem = cart.items.find(item => item.productId.equals(productId));
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.items.push({ productId, quantity });
  }

  await cart.save();
  res.json({ message: 'Produk ditambahkan ke keranjang' });
};

export const updateQuantity = async (req, res) => {
    try {
      const cartId = req.cookies.cartId;
      const { id } = req.params;
      const { quantity } = req.body;
  
      if (!cartId) {
        return res.status(400).json({ message: "Cart ID tidak ditemukan" });
      }
  
      const cart = await Cart.findById(cartId);
  
      if (!cart) {
        return res.status(404).json({ message: "Cart tidak ditemukan" });
      }
  
      const item = cart.items.find((item) => item._id.toString() === id);
  
      if (!item) {
        return res.status(404).json({ message: "Item tidak ditemukan di cart" });
      }
  
      if (quantity === 0) {
        cart.items = cart.items.filter((item) => item._id.toString() !== id);
      } else {
        item.quantity = quantity;
      }
  
      await cart.save();
  
      res.json({
        message: "Cart diperbarui",
        items: cart.items,
      });
    } catch (error) {
      console.error("Gagal update quantity:", error.message);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };

// DELETE /cart → kosongkan semua item
export const removeAllFromCart = async (req, res) => {
  const cartId = getOrCreateCartId(req, res);
  const cart = await Cart.findById(cartId);
  if (!cart) return res.json({ message: 'Cart sudah kosong' });

  cart.items = [];
  await cart.save();
  res.json({ message: 'Cart dikosongkan' });
};
