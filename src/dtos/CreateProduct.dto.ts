import { ObjectId } from 'mongoose';

interface CreateProductDto {
  name: string;
  price: number;
  sellerId: ObjectId;
}

export default CreateProductDto;
