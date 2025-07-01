import { UserroleEnum } from '../enums';

declare namespace DriverNameSpace {
  interface IModel {
    _id: string;
    name: string;
    email: string;
    password: string;
    location: {
      latitude: number;
      longitude: number;
    };
    role: UserroleEnum;
    createAt: Date;
  }

  interface ICreate {
    name: string;
    email: string;
    password: string;
    location: {
      latitude: number;
      longitude: number;
    };
    role: UserroleEnum;
  }
}

export default DriverNameSpace;
