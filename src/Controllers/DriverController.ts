import config from '../config/config';
import { DriverNameSpace, GenericNameSpace } from '../interfaces';
import DriverRepo from '../repos/DriverRepo';
import { matchPassword } from '../utils';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import UserRepo from '../repos/UserRepo';

class DriverController {
  public static async signup(req: Request, res: Response) {
    const body = req.body;

    try {
      const newDriver = await DriverRepo.createDriver(body);
      res.status(201).json({
        success: true,
        data: newDriver,
        message: 'Driver registered successfully',
      });
    } catch (error) {
      const errorResponse: GenericNameSpace.IApiResponse = {
        success: false,
        message: 'Internal server error',
      };
      res.status(500).json(errorResponse);
    }
  }

  public static async driverlogin(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const user = await UserRepo.getUserByEmail(email);
      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'Email not found',
        });
      }

      const driver = await DriverRepo.getDriverByUser(user._id);

      if (!driver) {
        return res.status(404).json({
          success: false,
          message: 'Email not found',
        });
      }

      const isPasswordMatched = await matchPassword(password, user.password);
      if (!isPasswordMatched) {
        return res.status(401).json({
          success: false,
          message: 'Invalid password',
        });
      }

      const jwtPayload = { ...driver };

      const token = jwt.sign(jwtPayload, config.jwtSecret, { expiresIn: '24h' });

      const response: GenericNameSpace.IApiResponse<{
        token: string;
        driver: Omit<DriverNameSpace.IModel, 'password'>;
      }> = {
        success: true,
        message: 'Login successful!',
        data: {
          token,
          driver,
        },
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
