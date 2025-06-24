import { ObjectId } from 'mongoose';
import UserNameSpace from './user.interface';
import ProductNameSpace from './Product.interface';

 declare namespace OrderNameSpace {
  interface IOrderItem {
    product: ObjectId | ProductNameSpace.IModel;
    quantity: number;
  }

  interface IModel extends Document {
    _id: string;
    buyer: ObjectId | UserNameSpace.IModel;
    items: IOrderItem[];
    createdAt: Date;
  }

  interface TCreate {
    buyer: ObjectId;
    items: IOrderItem[];
  }
}

export default OrderNameSpace