import mongoose, { Schema } from 'mongoose';
import { RideNameSpace } from '../interfaces';
import { locationSchema } from './LocationSchema';
import { RideStatusEnum } from '../enums';

export const riderSchema = new mongoose.Schema<RideNameSpace.IModel>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  driverId: { type: Schema.Types.ObjectId, ref: 'driver', required: true },
  pickup: locationSchema,
  dropoff: locationSchema,
  status: { type: String, enum: RideStatusEnum, required: true },
});

const RiderModel = mongoose.model('Rider', riderSchema);

export default RiderModel;
