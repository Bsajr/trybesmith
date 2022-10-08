import jwt from 'jsonwebtoken';
import connection from '../models/connection';
import LoginModel from '../models/loginModel';
import Login from '../interfaces/loginInterface';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';
const jwtConfig: object = {
  expiresIn: '15d',
  algorithm: 'HS256',
};

class LoginServices {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async login(login: Login) {
    const result = await this.model.login(login);

    if (!result) {
      return { type: 401, message: { message: 'Username or password invalid' } };
    } 

    const token = jwt.sign({ result }, JWT_SECRET, jwtConfig);

    return { type: 200, message: { token } }; 
  }
}

export default LoginServices;