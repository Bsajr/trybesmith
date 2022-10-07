import { Request, Response } from 'express';
import UserService from '../services/userServices';

export default class UserController {
  userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  create = async (req: Request, res: Response) => {
    const user = req.body;
    const token = await this.userService.create(user);
    res.status(201).json({ token });
  };
}