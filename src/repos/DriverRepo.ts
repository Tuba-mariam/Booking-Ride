import axios from 'axios';
import { DriverNameSpace, GenericNameSpace } from '../interfaces';
import { DriverModel } from '../models';
import config from '../config/config';

class DriverRepo {
  public static async createDriver(body: DriverNameSpace.ICreate, userId: string) {
    return await DriverModel.create({ ...body, user: userId });
  }

  public static async getDriverByUser(userId: string): Promise<DriverNameSpace.IModel | null> {
    return await DriverModel.findOne({ user: userId }).populate('user').lean().exec();
  }

  public static async getAllDrivers(): Promise<DriverNameSpace.IModel[]> {
    return await DriverModel.find().populate('user').lean().exec();
  }
 
}
export default DriverRepo;
