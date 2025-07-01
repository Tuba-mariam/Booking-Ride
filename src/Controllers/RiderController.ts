import { Request, Response } from 'express';
import { RiderRepo } from '../repos';
import { GenericNameSpace } from '../interfaces';

class RiderController {
  public static async rider(req: Request, res: Response) {
    try {
      const body = req.body;
      const newRide = await RiderRepo.createRide(body);
      res.json({
        success: true,
        Data: newRide,
        message: '',
      });
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
