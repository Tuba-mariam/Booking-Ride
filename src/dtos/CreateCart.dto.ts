import { ObjectId } from 'mongoose';

interface CreateCartDto {
  productId: ObjectId;
  quantity: number;
  price: number;
  buyerId: ObjectId;
}

export default CreateCartDto;
