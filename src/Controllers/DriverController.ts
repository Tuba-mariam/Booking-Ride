import config from '../config/config';
import { AuthNameSpace, DriverNameSpace, GenericNameSpace } from '../interfaces';
import DriverRepo from '../repos/DriverRepo';
import { Response } from 'express';

class DriverController {
  public static async registerDriver(req: AuthNameSpace.IRequest, res: Response) {
    try {
      const { body, user } = req;
      const newDriver = await DriverRepo.createDriver(body, user?._id);

      const isExist = await DriverRepo.getDriverByUser(user?._id);
      if (isExist) {
        res.status(403).json({
          success: false,
          message: 'Driver is already registered',
        });
        return;
      }

      const response: GenericNameSpace.IApiResponse<typeof newDriver> = {
        success: true,
        message: '  driver register successful!',
        data: newDriver,
      };
      res.json(response);
    } catch (error) {
      const errorResponse: GenericNameSpace.IApiResponse = {
        success: false,
        message: 'Internal server error',
      };
      res.status(500).json(errorResponse);
    }
  }
}

export default DriverController;
