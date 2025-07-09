import { Request, Response } from 'express';
import { RiderRepo } from '../repos';
import { AuthNameSpace, GenericNameSpace } from '../interfaces';
import { body } from 'express-validator';
import { RideStatusEnum } from '../enums';

class RiderController {
  public static async requestRide(req: AuthNameSpace.IRequest, res: Response) {
    try {
      const { body, user } = req;
      const newRide = await RiderRepo.createRide(body, user?._id);
      res.json({
        success: true,
        Data: newRide,
        message: 'Ride requested successfully',
      });
    } catch (error) {
      const errorResponse: GenericNameSpace.IApiResponse = {
        success: false,
        message: 'Internal server error',
      };
      res.status(500).json(errorResponse);
    }
  }

  public static async updateRideStatus(req: AuthNameSpace.IRequest, res: Response) {
    try {
      const { rideId, status } = req.body;
      if (rideId.status !== RideStatusEnum.REQUEST_SENT) {
        res.json({
          success: false,
          message: 'Ride must be in REQUEST_SENT ',
        });

        const newRide = await RiderRepo.updateStatus(rideId, status);
        res.json({
          success: true,
          Data: newRide,
          message: `Ride ${status.toLowerCase()} successfully`,
        });
      }
    } catch (error) {
      const errorResponse: GenericNameSpace.IApiResponse = {
        success: false,
        message: 'Internal server error',
      };
      res.status(500).json(errorResponse);
    }
  }
}

export default RiderController;
