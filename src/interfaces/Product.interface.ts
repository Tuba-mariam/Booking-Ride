import { ObjectId } from 'mongoose';
import UserNameSpace from './user.interface';

 declare namespace ProductNameSpace {
  interface IModel extends Document {
    _id: string;
    name: string;
    price: number;
    quantity: number
    seller: ObjectId | UserNameSpace.IModel;
    createAt: Date;
  }

  interface TCreate {
    name: string;
    price: number;
    quantity: number
    seller: ObjectId;

  }
}

export default ProductNameSpace