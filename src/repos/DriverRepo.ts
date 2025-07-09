import { DriverNameSpace } from '../interfaces';
import { DriverModel } from '../models';

class DriverRepo {
  public static async createDriver(body: DriverNameSpace.ICreate, userId: string): Promise<DriverNameSpace.IModel> {
    return await DriverModel.create({ ...body, user: userId });
  }

  public static async getDriverByUser(userId: string): Promise<DriverNameSpace.IModel | null> {
    return await DriverModel.findOne({ user: userId }).populate('user').lean().exec();
  }
}
export default DriverRepo;
