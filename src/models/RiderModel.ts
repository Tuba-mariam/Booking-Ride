import mongoose, { Schema } from 'mongoose';
import { RideNameSpace } from '../interfaces';

export const riderSchema = new mongoose.Schema<RideNameSpace.IModel>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  driverId: { type: Schema.Types.ObjectId, ref: 'driver', required: true },
  pickup: {
    type: String,
    latitude: [Number],
    longitude: [Number],
    required: true,
  },
  dropoff: {
    type: String,
    latitude: [Number],
    longitude: [Number],
    required: true,
  },
});

const DriverModel = mongoose.model('Rider', riderSchema);

export default DriverModel;
