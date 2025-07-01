import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import UserNameSpace from './Driver.interface';

declare namespace AuthNameSpace {
  export interface IRequest extends Request {
    user?: JwtPayload | UserNameSpace.IModel;
  }
  interface TSignup extends UserNameSpace.ICreate {}

  interface TLogin {
    email: string;
    password: string;
  }
}

export default AuthNameSpace;
