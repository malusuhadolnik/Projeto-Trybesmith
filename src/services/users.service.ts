import jwt, { SignOptions } from 'jsonwebtoken';
import userModel from '../models/users.model';
import { NewUser } from '../interfaces';

const JWT_SECRET = process.env.JWT_SECRET || 'MySecretPassword';

const JWT_CONFIG: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '1440m',
};

const createUser = async (user:NewUser) => {
  const payload = await userModel.createUser(user);
  
  const token = jwt.sign({ payload }, JWT_SECRET, JWT_CONFIG);
  return (token);
};

const userService = { createUser };
export default userService;