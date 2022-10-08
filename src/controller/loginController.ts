import { Request, Response } from 'express';
import LoginServices from '../services/loginServices';

class LoginController {
  constructor(private services = new LoginServices()) { } 
    
  public login = async (req: Request, res: Response) => {
    const userLogin = req.body;
    const result = await this.services.login(userLogin);
    res.status(result.type).json(result.message);
  };
}

export default LoginController;
