import { Request, Response } from 'express';
import { ProductRepo } from '../repos';
import { IAuthRequest, IResponse } from '../interfaces';

class ProductController {
  public static async createProduct(req: IAuthRequest, res: Response): Promise<void> {
    try {
      const product = await ProductRepo.createProduct({ ...req.body, sellerId: req.user?._id });
      const response: IResponse = {
        success: true,
        message: ' Product created successful!',
        data: product,
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

  public static async getProduct(req: IAuthRequest, res: Response): Promise<void> {
    try {
      const getAllProduct = await ProductRepo.getAllProduct();

      const response: IResponse = {
        success: true,
        message: ' sucessfully',
        data: getAllProduct,
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
export default ProductController;
