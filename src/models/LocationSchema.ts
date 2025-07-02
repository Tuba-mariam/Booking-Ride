import mongoose from 'mongoose';
import { GenericNameSpace } from '../interfaces';

export const locationSchema = new mongoose.Schema<GenericNameSpace.ILocation>({
  latitude: { type: Number, required: true, min: -90, max: 90 },
  longitude: { type: Number, required: true, min: -180, max: 180 },
});
