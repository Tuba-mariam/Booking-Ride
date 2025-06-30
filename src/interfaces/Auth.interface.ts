import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import UserNameSpace from './User.interface'

 declare namespace AuthNameSpace {
    export interface IRequest extends Request {
    user?: JwtPayload | UserNameSpace.IModel;


  }
  interface TSignup extends UserNameSpace.TCreate {}

  interface TLogin {
    email: string;
    password: string;
  }
}

export default AuthNameSpace