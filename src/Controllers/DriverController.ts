import config from '../config/config';
import { AuthNameSpace, DriverNameSpace, GenericNameSpace, UserNameSpace } from '../interfaces';
import DriverRepo from '../repos/DriverRepo';
import { Response } from 'express';
import {findDistance} from '../utils/FindDistance';
import UserRepo from '../repos/UserRepo';
import { promises } from 'dns';

class DriverController {
  public static async registerDriver(req: AuthNameSpace.IRequest, res: Response) {
    try {
      const { body, user } = req;
      const isExist = await DriverRepo.getDriverByUser(user?._id);
      if (isExist) {
        res.status(403).json({
          success: false,
          message: 'Driver is already registered',
        });
        return;
      }
      const newDriver = await DriverRepo.createDriver(body, user?._id);
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
  public static async getDrivers(req: AuthNameSpace.IRequest, res: Response) {
    try {
      const user = await UserRepo.getUserByEmail(req.user?.email);

      if (!user) {
        const errorResponse: GenericNameSpace.IApiResponse = {
          success: false,
          message: 'User not found',
        };
        res.status(500).json(errorResponse);
        return;
      }

      const userLocation = user?.location;
      const origin = `${userLocation.latitude},${userLocation.longitude}`;

      const drivers = await DriverRepo.getAllDrivers();

      const driverDistances = await Promise.all(
        drivers.map(async driver => {
          const driverLocation = (driver.user as UserNameSpace.IModel).location;
          const dest = `${driverLocation.latitude},${driverLocation.longitude}`;
          const routeDistance = await findDistance(origin, dest);
          return { ...driver, routeDistance };
        })
      );

      res.json({
        success: true,
        message: '  driver fetch  successful!',
        data: driverDistances,
      });
    } catch (error) {
      console.error('DriverController Error:', error);

      const errorResponse: GenericNameSpace.IApiResponse = {
        success: false,
        message: 'Internal server error',
      };
      res.status(500).json(errorResponse);
    }
  }


}

export default DriverController;
