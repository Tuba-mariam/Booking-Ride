import { CreateOrderDto, OrderItemDto } from '../dtos/CreateOrder.dto';
import { ProductModel, OrderModel } from '../models';
import { IOrder } from '../models/OrderModel';

class OrderRepo {
  public static async createOrder(body: CreateOrderDto): Promise<IOrder> {
    try {
      let totalAmount = 0;
      const orderItems: OrderItemDto[] = [];

      for (const item of body.items) {
        const product = await ProductModel.findById(item.productId);
        const itemTotal = product!.price * item.quantity;
        totalAmount += itemTotal;

        orderItems.push({
          productId: item.productId,
          quantity: item.quantity,
        });
      }

      const order = new OrderModel({
        buyerId: body.buyerId,
        items: orderItems,
        totalAmount,
      });

      return await order.save();
    } catch (error: any) {
      throw new Error(error.message || 'Order creation failed');
    }
  }
  public static async getOrderByUser(sellerId: string): Promise<IOrder[]> {
    try {
      return await OrderModel.find({ sellerId });
    } catch (error: any) {
      const errorMessage = `Internal server error: ${error?.message || 'Unknown error'}`;
      throw new Error(errorMessage);
    }
  }
  public static async getAllOrders(): Promise<IOrder[]> {
    try {
      return await OrderModel.find().populate('items.productId');
    } catch (error: any) {
      const errorMessage = `Internal server error: ${error?.message || 'Unknown error'}`;
      throw new Error(errorMessage);
    }
  }
}

export default OrderRepo;
