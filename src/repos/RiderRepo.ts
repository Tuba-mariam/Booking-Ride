import { RideStatusEnum } from '../enums';
import { RideNameSpace } from '../interfaces';
import { RiderModel } from '../models';

class RiderRepo {
  public static async createRide(body: RideNameSpace.ICreate, userId: string): Promise<RideNameSpace.IModel> {
    try {
      const Rider = new RiderModel({ ...body, userId });
      return await Rider.save();
    } catch (error) {
      const errorMessage = `Internal server error`;
      throw new Error(errorMessage);
    }
  }

  public static async updateStatus(rideId: string, status: RideStatusEnum) {
    try {
      await RiderModel.findOneAndUpdate({ _id: rideId }, { status });
    } catch (error) {
      const errorMessage = `Internal server error`;
      throw new Error(errorMessage);
    }
  }
}
export default RiderRepo;
