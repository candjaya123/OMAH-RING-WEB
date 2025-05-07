import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
  _id: String, // UUID dari cookie
  items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: Number
  }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Cart', CartSchema);
