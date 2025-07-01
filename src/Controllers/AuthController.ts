import { Request, Response } from 'express';
import { DriverRepo } from '../repos';
import jwt from 'jsonwebtoken';
import { matchPassword } from '../utils';
import config from '../config/config';
import GenericNameSpace from '../interfaces/Generic.interface';
import { DriverNameSpace } from '../interfaces';

class AuthController {
  public static async signup(req: Request, res: Response) {
    const body = req.body;

    try {
      const newUser = await DriverRepo.createUser(body);

      res.json({
        success: true,
        data: newUser,
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

  public static async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const user = await DriverRepo.getUserByEmail(email);
      if (!user) {
        const errorResponse: GenericNameSpace.IApiResponse = {
          success: false,
          message: 'email invalid',
        };
        res.status(404).json(errorResponse);
        return;
      }

      const isPasswordMatched = await matchPassword(password, user.password);
      if (!isPasswordMatched) {
        const errorResponse: GenericNameSpace.IApiResponse = {
          success: false,
          message: 'password invalid',
        };
        res.status(404).json(errorResponse);
        return;
      }

      const token = jwt.sign({ _id: user._id, email: user.email, role: user.role }, config.jwtSecret, {
        expiresIn: '24h',
      });
      const { password: pass, ...resUser } = user; // eslint-disable-line @typescript-eslint/no-unused-vars
      const response: GenericNameSpace.IApiResponse<{
        token: string;
        user: Omit<DriverNameSpace.IModel, 'password'>;
      }> = {
        success: true,
        message: 'Login successful!',
        data: {
          token,
          user: resUser,
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

export default AuthController;