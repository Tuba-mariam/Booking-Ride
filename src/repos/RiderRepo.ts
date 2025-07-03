import { RideNameSpace } from '../interfaces';
import { RiderModel } from '../models';

class RiderRepo {
  public static async createRide(body: RideNameSpace.ICreate): Promise<RideNameSpace.IModel> {
    try {
      const Rider = new RiderModel({
        userId: body.userId,
        driverId: body.driverId,
        pickup: body.pickup,
        dropoff: body.dropoff,
      });
      return await Rider.save();
    } catch (error) {
      const errorMessage = `Internal server error`;
      throw new Error(errorMessage);
    }
  }
}
export default RiderRepo;
