// import { SignupDto } from '../dtos/auth';
import { DriverNameSpace } from '../interfaces';
import { UserModel } from '../models';
import { createPasswordHash } from '../utils';

class DriverRepo {
  public static async createUser(body: DriverNameSpace.ICreate): Promise<DriverNameSpace.IModel> {
    const isExist = await this.getUserByEmail(body.email);
    if (isExist) {
      const errorMessage = 'Email is already registered';
      throw new Error(errorMessage);
    }

    try {
      const passwordHash = await createPasswordHash(body.password);
      const newUser = new UserModel({ ...body, password: passwordHash });
      await newUser.save();
      return newUser;
    } catch (error) {
      const errorMessage = `Internal server error: ${(error as unknown as { message: string }).message || 'Unknown error'}`;
      throw new Error(errorMessage);
    }
  }

  public static async getUserByEmail(email: string): Promise<DriverNameSpace.IModel> {
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

export default DriverRepo;
