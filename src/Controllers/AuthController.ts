import { Request, Response } from 'express';
import { UserRepo } from '../repos';
import jwt from 'jsonwebtoken';
import { matchPassword } from '../utils';
import config from '../config/config';
import { IUser } from '../models/UserModel';
import GenericNameSpace from '../interfaces/Generic.interface';


class AuthController {
  public static async signup(req: Request, res: Response) {
    const body = req.body;

    try {
      const newUser = await UserRepo.createUser(body);

      res.json({
        success: true,
        data: newUser,
        message: '',
      });
    } catch (error) {
      const errorResponse:GenericNameSpace.IApiResponse = {
        success: false,
        message: 'Internal server error',
      };
      res.status(500).json(errorResponse);
    }
  }

  public static async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const user = await UserRepo.getUserByEmail(email);
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
        const errorResponse:GenericNameSpace.IApiResponse = {
          success: false,
          message: 'password invalid',
        };
        res.status(404).json(errorResponse);
        return;
      }

      const token = jwt.sign(
        { _id: user._id, email: user.email, role: user.role },
        config.jwtSecret,
        { expiresIn: '24h' }
      );
      const { password: pass, ...resUser } = user;
      const response: GenericNameSpace.IApiResponse<{
        token: string;
        user: Omit<IUser, 'password'>;
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
      const errorResponse: GenericNameSpace.IApiResponse= {
        success: false,
        message: 'Internal server error',
      };
      res.status(500).json(errorResponse);
    }
  }
}

export default AuthController;
