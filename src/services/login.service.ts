import jwt, { SignOptions } from 'jsonwebtoken';
import loginModel from "../models/login.model";
import { UserCredentials, User } from '../interfaces';

const JWT_SECRET ='secret' || 'MySecretPassword';

const JWT_CONFIG: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '1440m',
};

const login = async (credentials: UserCredentials) => {
  const { username } = credentials;
  const theUser = await loginModel.getUserByUsername(username);
  if (theUser.length === 0 || theUser[0].password !== credentials.password) {
    return { status: 401, error: { message: "Username or password invalid" } };
  }
  const token = jwt.sign({ theUser }, JWT_SECRET, JWT_CONFIG);
  return (token);
};

const loginService = { login };
export default loginService;