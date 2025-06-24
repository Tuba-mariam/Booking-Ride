import { UserroleEnum } from '../enums';

 declare namespace UserNameSpace {
  interface IModel extends Document {
    _id: string;
    name: string;
    email: string;
    password: string;
    role: UserroleEnum;
    createAt: Date;
  }

  interface TCreate {
    name: string;
    email: string;
    password: string;
    role: UserroleEnum;
  }
}

export default UserNameSpace