import { ProductModel } from '../models';
import { CreateProductDto } from '../dtos';
import { IProduct } from '../models/ProductModel';

class ProductRepo {
  public static async createProduct(body: CreateProductDto): Promise<IProduct> {
    try {
      const product = new ProductModel({
        name: body.name,
        price: body.price,
        sellerId: body.sellerId,
      });
      return await product.save();
    } catch (error: any) {
      const errorMessage = `Internal server error: ${error?.message || 'Unknown error'}`;
      throw new Error(errorMessage);
    }
  }
  public static async getAllProduct(): Promise<IProduct[]> {
    try {
      return await ProductModel.find();
    } catch (error: any) {
      const errorMessage = `Internal server error: ${error?.message || 'Unknown error'}`;
      throw new Error(errorMessage);
    }
  }
}

export default ProductRepo;
