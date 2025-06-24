import { CartNameSpace } from '../interfaces';
import { CartModel } from '../models';
// import { CartNameSpace } from '../interfaces/Cart.interface';
import { ObjectId } from 'mongoose';

class CartRepo {
  public static async createCart(body: CartNameSpace.ICreate): Promise<CartNameSpace.IModel> {
    // const data = this.getUsersByRole('Sellers');

    try {
      const existingItem = await CartModel.findOne({
        buyerId: body.buyer,
      });

      if (existingItem) {
        throw new Error('Product already exists in the cart');
      }
      const Cartitem = new CartModel({
        items : body.items,
        buyer: body.buyer,
      });
      return await Cartitem.save();
    } catch (error: any) {
      const errorMessage = `Internal server error: ${error?.message || 'Unknown error'}`;
      throw new Error(errorMessage);
    }
  }
  public static async getCartByBuyer(buyer: string): Promise<CartNameSpace.IModel[]> {
    try {
     return  await CartModel.find({ buyer }).populate('product')
    
    } catch (error) {
      const errorMessage = `Internal server error: ${error?.message || 'Unknown error'}`;
      throw new Error(errorMessage);
    }
  }

  // public static async getUsersByRole(role: 'Sellers' | 'Buyer') {
  //   return await CartModel.find({ role: role }).lean().exec();
  // }
}

export default CartRepo;
