// import { SignupDto } from '../dtos/auth';
import { UserNameSpace } from '../interfaces';
import { UserModel } from '../models';
import { createPasswordHash } from '../utils';

class UserRepo {
  public static async createUser(body: UserNameSpace.ICreate): Promise<UserNameSpace.IModel> {
    try {
      const passwordHash = await createPasswordHash(body.password);
      return await UserModel.create({ ...body, password: passwordHash });
    } catch (error) {
      const errorMessage = `Internal server error`;
      throw new Error(errorMessage);
    }
  }

  public static async getUserByEmail(email: string): Promise<UserNameSpace.IModel | null> {
    return await UserModel.findOne({ email }).lean().exec();
  }
}

export default UserRepo;
