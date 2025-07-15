// import { SignupDto } from '../dtos/auth';
import { GenericNameSpace, UserNameSpace } from '../interfaces';
import { UserModel } from '../models';
import { createPasswordHash } from '../utils';

class UserRepo {
  public static async createUser(body: UserNameSpace.ICreate): Promise<UserNameSpace.IModel> {
    const passwordHash = await createPasswordHash(body.password);
    return await UserModel.create({ ...body, password: passwordHash });
  }

  public static async getUserByEmail(email: string): Promise<UserNameSpace.IModel | null> {
    return await UserModel.findOne({ email }).lean().exec();
  }
  public static async getUserByEmailWithPass(email: string): Promise<UserNameSpace.IModel | null> {
    return await UserModel.findOne({ email }).select('password').lean().exec();
  }
  public static async updateLocation(userId: string, location: GenericNameSpace.ILocation): Promise<string> {
    await UserModel.findByIdAndUpdate(userId, { location });
    return 'Location updated';
  }
}

export default UserRepo;
