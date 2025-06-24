import { IAuthRequest, IResponse } from '../interfaces';
import { Request, Response } from 'express';
import OrderRepo from '../repos/OrderRepo';

class OrderController {
  public static async createOrder(req: IAuthRequest, res: Response): Promise<void> {
    try {
      const orderItem = await OrderRepo.createOrder({ ...req.body, buyerId: req.user?._id });

      const response: IResponse = {
        success: true,
        message: 'Order Created  successful!',
        data: orderItem,
      };
      res.json(response);
    } catch (error: any) {
      const errorResponse: IResponse = {
        success: false,
        message: error?.message || 'Internal server error',
      };
      res.status(500).json(errorResponse);
    }
  }
  public static async getOrderBySeller(req: Request, res: Response): Promise<void> {
    try {
      const orders = await OrderRepo.getAllOrders();

      const response: IResponse = {
        success: true,
        message: 'sucessfully',
        data: orders,
      };
      res.json(response);
    } catch (error: any) {
      const errorResponse: IResponse = {
        success: false,
        message: error?.message || 'Internal server error',
      };
      res.status(500).json(errorResponse);
    }
  }
}
export default OrderController;
