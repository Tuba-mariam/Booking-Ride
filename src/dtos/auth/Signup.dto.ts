import { UserroleEnum } from '../../enums';

class SignupDto {
  name: string;
  email: string;
  password: string;
  role: UserroleEnum;
}

export default SignupDto;
