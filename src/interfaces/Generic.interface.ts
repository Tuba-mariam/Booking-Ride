import { JwtPayload } from 'jsonwebtoken';
import UserNameSpace from './User.interface';

declare namespace GenericNameSpace {
  interface IConfig {
    port: number;
    mongoDbUrl: string;
    jwtSecret: string;
  }

  interface IRequest extends Request {
    user?: JwtPayload | UserNameSpace.IModel;
  }

  interface IApiResponse<T = undefined> {
    success: boolean;
    message?: string;
    data?: T;
  }

  interface ILocation {
    latitude: number;
    longitude: number;
  }

  interface IDistanceResponse {
    distance: {text: string, value: number}
    duration: {text: string, value: number}
  }
}

export default GenericNameSpace;
