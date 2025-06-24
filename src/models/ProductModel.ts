import mongoose from 'mongoose';

export interface IProduct {
  _id: string;
  name: string;
  price: number;
  sellerId: mongoose.Types.ObjectId;
  quantity: number;
  createAt: Date;
}

export const productSchema = new mongoose.Schema<IProduct>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createAt: { type: Date, default: Date.now },
});

const ProductModel = mongoose.model('Product', productSchema);

export default ProductModel;
