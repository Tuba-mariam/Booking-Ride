import { DriverNameSpace } from '../interfaces';
import { DriverModel } from '../models';

class DriverRepo {
  public static async createDriver(body: DriverNameSpace.ICreate): Promise<DriverNameSpace.IModel> {
    const isExist = await this.getDriverByUser(body.userId);

    if (isExist) {
      throw new Error('Driver already registered');
    }

    try {
      return await DriverModel.create(body);
    } catch (error) {
      throw new Error('Internal server error');
    }
  }

  public static async getDriverByUser(userId: string): Promise<DriverNameSpace.IModel> {
    try {
      const driver = await DriverModel.findOne({ user: userId }).populate('user').lean().exec();
      if (!driver) throw new Error('Driver not found');
      return driver;
    } catch (error) {
      throw new Error('Internal server error');
    }
  }
}

export default DriverRepo;
