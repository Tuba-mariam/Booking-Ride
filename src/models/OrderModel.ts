import mongoose from 'mongoose';

export interface IOrderItem {
  _id: string;
  productId: mongoose.Types.ObjectId;
  quantity: number;
}
export interface IOrder {
  _id: string;
  buyerId: mongoose.Schema.Types.ObjectId;
  items: IOrderItem[];
  totalAmount: number;
  createdAt: Date;
}

export const orderItemSchema = new mongoose.Schema<IOrderItem>({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
});

export const orderSchema = new mongoose.Schema<IOrder>({
  buyerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: { type: [orderItemSchema], required: true },
  totalAmount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const OrderModel = mongoose.model('Order', orderSchema);

export default OrderModel;
