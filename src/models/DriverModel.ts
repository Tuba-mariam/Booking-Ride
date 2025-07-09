import mongoose, { Schema } from 'mongoose';
import { DriverNameSpace } from '../interfaces';

export const vehicleSchema = new mongoose.Schema<DriverNameSpace.IvehicleInfo>({
  name: { type: String, required: true },
  model: { type: Number, required: true },
  number: { type: Number, required: true },
  color: { type: String, required: true },
});
export const driverSchema = new mongoose.Schema<DriverNameSpace.IModel>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  drivingLicenceNo: { type: Number, required: true },
  vehicleInfo: vehicleSchema,
  createAt: { type: Date, default: Date.now },
});

const DriverModel = mongoose.model('Driver', driverSchema);

export default DriverModel;
