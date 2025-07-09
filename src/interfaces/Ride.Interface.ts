import { ObjectId } from 'mongoose';
import { RideStatusEnum } from '../enums';
import GenericNameSpace from './Generic.interface';
import UserNameSpace from './User.interface';
import DriverNameSpace from './Driver.Interface';

declare namespace RideNameSpace {
  interface IModel {
    _id: string;
    userId: UserNameSpace.IModel | ObjectId;
    driverId: DriverNameSpace.IModel | ObjectId;
    pickup: GenericNameSpace.ILocation;
    dropoff: GenericNameSpace.ILocation;
    status: RideStatusEnum;
  }

  interface ICreate {
    pickup: GenericNameSpace.ILocation;
    dropoff: GenericNameSpace.ILocation;
  }
}

export default RideNameSpace;
