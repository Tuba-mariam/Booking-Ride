import { ObjectId } from 'mongoose';

export interface OrderItemDto {
  productId: ObjectId;
  quantity: number;
}

export interface CreateOrderDto {
  buyerId: ObjectId;
  items: OrderItemDto[];
}
