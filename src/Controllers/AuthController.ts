import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { matchPassword } from '../utils';
import config from '../config/config';
import GenericNameSpace from '../interfaces/Generic.interface';
import { AuthNameSpace, UserNameSpace } from '../interfaces';
import UserRepo from '../repos/UserRepo';

class AuthController {
  public static async signup(req: Request, res: Response) {
    const body: UserNameSpace.ICreate = req.body;

    const isExist = await UserRepo.getUserByEmail(body.email);
    if (isExist) {
      res.status(403).json({
        success: false,
        message: 'Email is already registered',
      });
      return;
    }

    try {
      const newUser = await UserRepo.createUser(body);
      res.json({
        success: true,
        data: newUser,
        message: 'User signup sucessfully',
      });
    } catch (error) {
      console.log(error);
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
      const user = await UserRepo.getUserByEmail(email);
      if (!user) {
        const errorResponse: GenericNameSpace.IApiResponse = {
          success: false,
          message: 'Email is invalid',
        };
        res.status(400).json(errorResponse);
        return;
      }

      const isPasswordMatched = await matchPassword(password, user.password);
      if (!isPasswordMatched) {
        const errorResponse: GenericNameSpace.IApiResponse = {
          success: false,
          message: 'Password is invalid',
        };
        res.status(400).json(errorResponse);
        return;
      }

      const { password: pass, ...resUser } = user; 

      const token = jwt.sign(resUser, config.jwtSecret, {
        expiresIn: '24h',
      });
      const response: GenericNameSpace.IApiResponse<AuthNameSpace.ILoginResponse> = {
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
