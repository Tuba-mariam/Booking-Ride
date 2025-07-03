import mongoose from 'mongoose';
import { UserroleEnum } from '../enums';
import UserNameSpace from './User.interface';

declare namespace DriverNameSpace {
  interface IvehicleInfo {
    name: string;
    model: number;
    number: number;
    color: string;
  }
  interface IModel {
    _id: string;
    user: UserNameSpace.IModel | mongoose.Types.ObjectId;
    drivingLicenceNo: Number;
    vehicleInfo: IvehicleInfo;
    createAt: Date;
  }

  interface ICreate {
    drivingLicenceNo: Number;
    vehicleInfo: IvehicleInfo;
  }

}

export default DriverNameSpace;
