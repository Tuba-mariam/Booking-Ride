import { Document, ObjectId } from 'mongoose';
import ProductNameSpace from './Product.interface';
import  UserNameSpace from './User.interface';

 declare namespace CartNameSpace {
  interface IProductItem {
    product: ObjectId | ProductNameSpace.IModel;
    quantity: number;
  }

  interface IModel extends Document {
    _id: ObjectId;
    buyer: ObjectId | UserNameSpace.IModel;
    items: IProductItem[];
    createAt: Date;
  }

  interface ICreate {
    buyer: ObjectId;
    items: IProductItem[];
  }
}

export default CartNameSpace