import { CartRepo } from '../repos';
import { IAuthRequest, IResponse } from '../interfaces';
import { Request, Response } from 'express';
class CartController {
  public static async addToCart(req: IAuthRequest, res: Response): Promise<void> {
    try {
      const cartitem = await CartRepo.createCart({ ...req.body, buyerId: req.user?._id });
      const response: IResponse = {
        success: true,
        message: 'Product added to cart successfully!',
        data: cartitem,
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
  public static async getCartByBuyer(req: IAuthRequest, res: Response): Promise<void> {
    try {
      const buyer = await CartRepo.getCartByBuyer(req.user?._id);

      const response: IResponse = {
        success: true,
        message: 'sucessfully',
        data: buyer,
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
export default CartController;
