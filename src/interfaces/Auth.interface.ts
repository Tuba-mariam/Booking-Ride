
import UserNameSpace from './User.interface'

 declare namespace AuthNameSpace {
  interface TSignup extends UserNameSpace.TCreate {}

  interface TLogin {
    email: string;
    password: string;
  }
}

export default AuthNameSpace