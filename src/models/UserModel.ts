import mongoose from 'mongoose';
import { UserroleEnum } from '../enums';
import { UserNameSpace } from '../interfaces';

export const userSchema = new mongoose.Schema<UserNameSpace.IModel>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  location: {
    latitude: { type: Number, required: true, min: -90, max: 90 },
    longitude: { type: Number, required: true, min: -180, max: 180 },
  },
  role: { type: String, enum: UserroleEnum, required: true },
  createAt: { type: Date, default: Date.now },
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
