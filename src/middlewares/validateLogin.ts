import { Request, Response, NextFunction } from 'express';
import schema from './schema';

const validateLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  const validation = schema.schemaLogin.validate({ username, password });

  if (validation.error) {
    return res.status(400).json({ message: validation.error.message });
  }

  next();
};

export default validateLogin;