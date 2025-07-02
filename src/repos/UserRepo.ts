// import { SignupDto } from '../dtos/auth';
import { UserNameSpace } from '../interfaces';
import { UserModel } from '../models';
import { createPasswordHash } from '../utils';

class UserRepo {
  public static async createUser(body: UserNameSpace.ICreate): Promise<UserNameSpace.IModel> {
    const isExist = await this.getUserByEmail(body.email);
    if (isExist) {
      const errorMessage = 'Email is already registered';
      throw new Error(errorMessage);
    }

    try {
      const passwordHash = await createPasswordHash(body.password);
      return await UserModel.create({ ...body, password: passwordHash });
    } catch (error) {
      const errorMessage = `Internal server error`;
      throw new Error(errorMessage);
    }
  }

  public static async getUserByEmail(email: string): Promise<UserNameSpace.IModel> {
    try {
      const user = await UserModel.findOne({ email }).lean().exec();

      if (!user) throw new Error('User not found');

      return user;

      //todo: if user not found then throw exception;

      //todo:  if user found then match passrod;
    } catch (error) {
      throw error;
    }
  }
}

export default UserRepo;
