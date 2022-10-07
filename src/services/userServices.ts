import UserModel from '../models/userModel';
import User from '../interfaces/userInterface';
import jwt from '../utils';

export default class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  async create(user: User) {
    const { username, password } = await this.model.create(user);
    return jwt.generateToken({ username, password });
  }
}