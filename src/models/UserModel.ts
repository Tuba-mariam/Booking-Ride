import mongoose from 'mongoose';
import { UserroleEnum } from '../enums';

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: UserroleEnum;
  createAt: Date;
}

export const userSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: UserroleEnum, required: true },
  createAt: { type: Date, default: Date.now },
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
