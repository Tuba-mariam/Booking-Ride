import mongoose from 'mongoose';
import  CartNameSpace  from '../interfaces/Cart.interface';

export const cartItemSchema = new mongoose.Schema<CartNameSpace.IProductItem>({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
});

const cartSchema = new mongoose.Schema<CartNameSpace.IModel>(
  {
    buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: { type: [cartItemSchema], required: true },
  },
  { timestamps: true }
);

const CartModel = mongoose.model<CartNameSpace.IModel>('Cart', cartSchema);

export default CartModel;
