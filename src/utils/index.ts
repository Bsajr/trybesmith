import jwt from 'jsonwebtoken';
import Payload from '../interfaces/Payload';

const TOKEN_SECRET = process.env.JWT_SECRET || 'secret';

const jwtConfig: object = {
  expiresIn: '15d',
  algorithm: 'HS256',
};

const generateToken = (payload: Payload) => jwt.sign(payload, TOKEN_SECRET, jwtConfig);

export default { 
  generateToken,
};